import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

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
    },
    captcha: {
        display: 'flex',
        justifyContent: 'center',
        alingItems: 'center',
        margin: theme.spacing.unit
    }
});

class ChatUserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '', 
            captchaValue: null
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    
    onEnter = () => {
        const userName = this.state.userName.toLowerCase();
        const captchaValue = this.state.captchaValue;
        
        if (userName === "bogoodski") {
            return alert("That is a restricted name.")
        }
        if (captchaValue != null) {
            this.setState({ captchaValue: null, redirect: true });
        } else return alert("Please complete reCAPTCHA.");
    };

    handleRecaptcha = (value) => {
        this.setState({
            captchaValue: value
        })
    }
    
    render() {
        const { classes } = this.props;
        const key = "6LdWdZAUAAAAAF6kNUNYvBxdVyJglPWaAgcCdzF3";
        
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
                    <Typography variant="h5" component="h3">
                        {`Enter a name to use in the chat room:`}
                    </Typography>
                    <Typography variant="caption">
                        {`Maximum of 20 characters, please.`}
                    </Typography>
                    <form>
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
                        <ReCAPTCHA
                            sitekey={key}
                            onChange={this.handleRecaptcha}
                            className={classes.captcha}
                            size="compact"
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

export default withStyles(styles)(ChatUserLogin);