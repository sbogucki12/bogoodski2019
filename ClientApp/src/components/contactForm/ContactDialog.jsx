﻿import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ContactForm from './ContactForm';

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
    },
    icon: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    border: {
        border: '2px solid #1b5e20',
        borderRadius: 5,
        maxWidth: '80%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing.unit * 3
    },
    container: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class ContactDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            body: 'body'
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
                open
                onClose={this.props.toggleDialog}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.icon} >
                        <IconButton color="inherit" onClick={this.props.toggleDialog} aria-label="Close" >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.container}>
                    <div className={classes.border}>                       
                        <ContactForm />                        
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(ContactDialog);