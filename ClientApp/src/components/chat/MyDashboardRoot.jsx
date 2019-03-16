import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import MyDashBoard from './MyDashBoard';

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

class MyDashboardRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            password: ""
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = () => {
        const password = this.state.password; 
        if (password != "tobibobi") {
            return alert("try a different password")
        }
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        const { classes } = this.props; 
        const status = this.state.isLoggedIn
        const notLoggedIn =
            <div>
                <TextField
                    id="standard-name"
                    label="Password"
                    className={classes.textField}
                    value={this.state.passWord}
                    onChange={this.handleChange('password')}
                    margin="normal"
                    type="password"
                />
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleSubmit}
                >
                    {`Open Dashboard`}
                </Button>
            </div>;

        const loggedIn = <MyDashBoard />

        return (
            <div className={classes.root}>
                {status ? loggedIn : notLoggedIn}
            </div>
        );
    }

}

export default withStyles(styles)(MyDashboardRoot);