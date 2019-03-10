import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as signalR from '@aspnet/signalr';

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

connection.start().then(() => {
    console.log("connected");
})

class ChatRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            name: "",
            incomingMessage: ""
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
            incomingMessage: ""
        })
    }

    componentDidMount() {
        let encodedMessage;
        connection.on("ReceiveMessage", (user, message) => {
            encodedMessage = `${user} says ${message}`;
            this.setState({
                incomingMessage: encodedMessage
            })
        })
    }

    render() {
        const { classes } = this.props;
        const message = this.state.incomingMessage
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
                        <p>{`Incoming Messages:`}</p>
                        {message}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChatRoot);
