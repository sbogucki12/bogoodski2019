import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

function Footer(props) {
    const { classes } = props;

    return (
        <AppBar position="fixed" color="secondary" className={classes.appBar}>
            <Toolbar className={classes.toolbar} />

        </AppBar>
    )
}

export default withStyles(styles)(Footer);