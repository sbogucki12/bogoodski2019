import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as signalR from '@aspnet/signalr';
import update from 'immutability-helper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = theme => ({
    root: {
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: theme.palette.secondary.main
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '18vh',
        width: '95%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',         
    },
    box: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '2vh'
    }, 
    chatMessages: {
        display: 'flex',
        justifyContent: 'flexStart',
        alignItems: 'center', 
        flexDirection: 'column'
    }, 
    chatBox: {
        width: '99%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '2vh'
    }, 
    chatBorder: {
        borderStyle: 'solid',
        borderSize: '3px',
        borderColor: theme.palette.primary.main,
        borderRadius: '5%',
        width: '95%', 
        minHeight: '300px',
        marginTop: '2vh', 
        marginBottom: '2vh'
    }
});


const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.start()
    .then(() => { console.log("connected") })
    .catch(err => console.log(err))

class ChatHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            name: "",
            incomingMessageList: ["", ""]
        }
    }

    handleName = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
    };

    handleMessage = (e) => {
        e.preventDefault();
        this.setState({
            message: e.target.value
        })
    };

    handleSubmit = () => {
        const user = this.state.name;
        const message = this.state.message;

        connection.invoke("SendMessage", user, message)
            .catch((err) => {
                console.error(err.toString());
            })
    };

    handleClear = () => {
        this.setState({
            incomingMessageList: []
        })
    }

    componentDidMount() {
        connection.on("ReceiveMessage", (user, message) => {
            let encodedMessage =
                <ListItem key={message} style={{ width: '100%' }}>
                    <Typography variant="caption">
                        <b>{`${user}`}</b>{`: ${message}`}
                    </Typography>
                </ListItem>;
            let newArray = update(this.state.incomingMessageList, { $push: [encodedMessage] })
            this.setState({
                incomingMessageList: newArray
            })
        })

    }

    componentWillUnmount() {
        connection.stop()
            .then(() => {
                console.log("connection stopped")
            })
            .catch(err => {
                console.log(err)
            })
    }    

    render() {
        const { classes } = this.props;
        const chatMessages = this.state.incomingMessageList;

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={1}>
                    <Paper className={classes.box} elevation={6}>
                        <Typography variant="h5">
                            {`Chat`}
                        </Typography>
                    </Paper>
                    <Paper className={classes.box} elevation={6}>
                        <Typography variant="body2">
                            {`🚨 This is a public chat! 🚨`}
                        </Typography>
                        <Typography variant="body1">
                            {`All users can view all messages.`}
                        </Typography>
                    </Paper>
                    <Paper className={classes.chatBox} elevation={6}>
                        <div className={classes.chatBorder}>
                            <List className={classes.chatMessages}>
                             {chatMessages}
                            </List>
                        </div>
                    </Paper>
                </Paper>
            </div>
        );

    }
    
}

export default withStyles(styles)(ChatHome);