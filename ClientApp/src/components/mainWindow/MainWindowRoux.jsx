import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RouxMain from '../rouxPics/RouxMain';

const styles = theme => ({
    root: {
        minHeight: 300,
        backgroundColor: "#e4ff54", 
        //marginBottom: theme.spacing.unit
    }
});

function MainWindowRoux(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <RouxMain />
        </div>
    );
}

export default withStyles(styles)(MainWindowRoux);