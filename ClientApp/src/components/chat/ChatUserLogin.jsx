import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

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

class ChatUserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '' 
            
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    onEnter = () => {
        let userName = this.state.userName.toLowerCase();
        if (userName === "bogoodski") {
            return alert("That is a restricted name.")
        }
        this.setState({ redirect: true });
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