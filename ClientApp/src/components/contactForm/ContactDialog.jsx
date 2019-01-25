import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    appBar: {
        position: 'relative'
    }
});

class ContactDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Name',
            multiline: 'Email',
            open: this.props.open
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;


        function Transition(props) {
            return <Slide direction="up" {...props} />;
        }

        return (
            <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.props.toggleDialog}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.props.toggleDialog} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="4"
                        value={this.state.multiline}
                        onChange={this.handleChange('multiline')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows="4"
                        defaultValue="Default Value"
                        className={classes.textField}
                        margin="normal"
                    />
                </form>
            </Dialog>
        );
    }
}

export default withStyles(styles)(ContactDialog);