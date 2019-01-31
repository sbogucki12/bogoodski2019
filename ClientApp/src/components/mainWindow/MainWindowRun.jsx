import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RunMain from '../runLog/RunMain';

const styles = theme => ({
    root: {
        minHeight: 300,
        backgroundColor: "#1b5e20",
        //marginBottom: theme.spacing.unit
    }
});

function MainWindowRun(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <RunMain />
        </div>
    );
}

export default withStyles(styles)(MainWindowRun);