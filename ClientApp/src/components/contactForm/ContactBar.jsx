import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing.unit
    }
});

function ContactBar(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar} toggleDialog={props.toggleDialog}>
                <Button variant="outlined" className={classes.button} onClick={props.toggleDialog} >
                    {`Contact BoGoodSki`}
                </Button>
            </AppBar>


        </React.Fragment>
    );
}

export default withStyles(styles)(ContactBar);