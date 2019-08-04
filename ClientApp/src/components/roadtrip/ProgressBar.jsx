import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

const ProgressBar = props => {
    const { classes } = props;
    const currentProgress = props.currentProgress;

    const content =
        <div className={classes.root}>
            <p>{`Progress Bar`}</p>
            <p>{currentProgress}</p>
        </div>;

    return content;
};

export default withStyles(styles)(ProgressBar); 