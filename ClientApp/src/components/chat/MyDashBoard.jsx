import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main
    },
    button: {
        margin: theme.spacing.unit,
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: '97%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: "70%"
    }
});

class ChatMyDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isOnline: false
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
            isOnline: event.target.checked
        });
    };

    onEnter = () => {
        const password = this.state.password;

        fetch('/api/chat/dashboard', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(password)
        })
            .then(res => res.json())
            .then(response => {

                if (response === "true") {
                    this.setState({ redirect: true });
                } else {
                    return alert("This is the login for BoGoodSki");
                }
            })
            .catch(err => console.log(`Error: ${err}`));
    }

    onSaveStatus = () => {
        const status = this.state.isOnline;
        if (status) {
            let data = {
                "isOnline": "yes"
            }
            fetch('/api/chat/makeonline', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => alert(`Response: ${response.status}`))
                .catch(err => alert(`Error: ${err}`))

        } else {
            let data = {
                "isOnline": "no"
            }
            fetch('/api/chat/makeoffline', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => alert(`Response: ${response.status}`))
                .catch(err => alert(`Error: ${err}`))
        }

    }

    render() {
        const { classes } = this.props;
        let userNameValue = this.state.userName;
        let disabled = false;
        if (userNameValue < 1) {
            disabled = true
        }
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/chat/room',
                state: { userName: userNameValue }
            }}
            />;
        }

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
                    <Typography variant="subtitle2">
                        {`Are you online?`}
                    </Typography>
                    
                    <Switch
                        checked={this.state.isOnline}
                        onChange={this.handleChange('isOnline')}
                        value="isOnline"
                    />
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        onClick={this.onSaveStatus}
                    >
                        {`Save Status`}
                    </Button>
                    <Typography variant="h5" component="h3">
                        {`Enter a name to use in the chat room:`}
                    </Typography>
                    <form onSubmit={e => { e.preventDefault() }}>
                        <TextField
                            id="standard-name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.userName}
                            onChange={this.handleChange('userName')}
                            margin="normal"
                            inputProps={{
                                maxLength: 20
                            }}
                        />
                        <TextField
                            id="standard-name"
                            label="Password"
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            margin="normal"
                            type="password"
                            inputProps={{
                                maxLength: 20
                            }}
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            disabled={disabled}
                            onClick={this.onEnter}
                        >
                            {`Enter Chat`}
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }

}

export default withStyles(styles)(ChatMyDashboard);