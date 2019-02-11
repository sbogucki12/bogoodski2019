import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RunMain from '../runLog/RunMain';

const styles = theme => ({
    root: {
        backgroundImage: 'linear-gradient(#1b5e20, #e4ff54)',
        minHeight: 300
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