import React from 'react';

import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        minWidth: '100%',
        minHeight: 300, 
        backgroundColor: "#79b700"
    }
};

function MainWindowDj(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
       
        </div>
    );
}

export default withStyles(styles)(MainWindowDj);