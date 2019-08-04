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
    const currentProgress = props.currentProgress * 20;

    const content =
        <div className={classes.root}>
            {`You've currently read ${currentProgress}% of the blog.`}            
        </div>;

    return content;
};

export default withStyles(styles)(ProgressBar); 