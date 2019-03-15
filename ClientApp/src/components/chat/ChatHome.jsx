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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
        width: '100vw',
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
    }, 
    messageBox: {
        width: '99%',
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: '2vh'
    },
    messageContainer: {
        width: '97%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        flexWrap: 'wrap'
    },
    userName: {
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center'        
    },
    textField: {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'flex-start'        
    },
    button: {
        margin: theme.spacing.unit     
    }, 
    homeButton: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: theme.spacing.unit
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
            incomingMessageList: [], 
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = () => {        
        const message = this.state.message;
        let user;
        if (!this.props.location.state) {
            user = "Anonymous User"
        } else {
            user = this.props.location.state.userName;
        }
        connection.invoke("SendMessage", user, message)
            .catch((err) => {
                console.error(err.toString());
            })
        this.setState({
            message: ""
        });
    };

    componentDidMount() {        
        connection.on("ReceiveMessage", (user, message) => {
            let encodedMessage =
                <ListItem key={message} style={{ width: '100%' }}>
                    <Typography variant="caption" style={{ wordWrap: 'break-word', maxWidth: '100%' }} >
                        <b>{`${user}`}</b>{`: ${message}`}
                    </Typography>
                </ListItem>;
            let newArray = [];
            if (this.state.incomingMessageList.length >= 5) {
                newArray = this.state.incomingMessageList.splice(0, 1);
            }
            newArray = update(this.state.incomingMessageList, { $push: [encodedMessage] })
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
    getUser = () => {
        if (!this.props.location.state) {
            return "Anonymous User"
        } else {
            return this.props.location.state.userName;
        }
    }    
    
    render() {
        const { classes } = this.props;
        const chatMessages = this.state.incomingMessageList;  
        const user = this.getUser(); 
        
        return (
            <div className={classes.root} onKeyDown={this.handleEnter}>
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
                    <Paper className={classes.messageBox} elevation={6}>
                        <div className={classes.messageContainer}>
                            <Typography variant="body1" className={classes.userName}>
                                {`${user}: `}
                            </Typography>
                            <form style={{ width: '65%', marginRight: '2%' }} onSubmit={e => { e.preventDefault(); }}>
                                <TextField
                                    id="standard-name"
                                    label="Message"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.message}
                                    onChange={this.handleChange('message')}
                                    margin="normal"
                                    inputProps={{
                                        maxLength: 300
                                    }}                                    
                                />                               
                                </form>
                             <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleSubmit}>
                                    {`Send`}
                            </Button>
                        </div>
                    </Paper>
                    <div className={classes.homeButton}>
                        <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/">
                            {`Home`}
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ChatHome);