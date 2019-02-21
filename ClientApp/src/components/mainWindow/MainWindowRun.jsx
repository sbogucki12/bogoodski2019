import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RunMain from '../runLog/RunMain';

const styles = theme => ({
    root: {        
        backgroundColor: "#e4ff54",
        minHeight: 300, 
        marginBottom: `2%`, 
        display: 'flex', 
        alignItems: 'center'
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