import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as signalR from '@aspnet/signalr';
import update from 'react-addons-update';

const styles = theme => ({
    root: {
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    container: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        fontSize: '3vw',
        marginTop: '18vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.start()
    .then(() => { console.log("connected") })
    .catch(err => console.log(err))

let chatMessages;

class ChatTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            name: "",
            incomingMessageList: ["",""]
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
            let encodedMessage = <li key={message}> <b>{`${user}`}</b>{`: ${message}`} </li>;
            let newArray = update(this.state.incomingMessageList, {$push: [encodedMessage] })
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
                <div className={classes.container}>
                    <div>
                        {`Name: `} <input type="text" onChange={this.handleName} value={this.state.name} />
                    </div>
                    <div>
                        {`Message: `} <input type="text" onChange={this.handleMessage} value={this.state.message} />
                    </div>
                    <div>
                        <button type="submit" onClick={this.handleSubmit}>
                            {`SUBMIT`}
                        </button>
                        <button type="submit" onClick={this.handleClear}>
                            {`Clear Chat`}
                        </button>
                    </div>
                    <div>
                        <p>{`Chat:`}</p>
                        
                        <ul>
                            {chatMessages}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChatTemplate);
