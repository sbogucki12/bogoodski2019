import React from 'react';
import Typography from '@material-ui/core/Typography';
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h3" align="center" className={classes.text} gutterBottom>
                {`Main Window DJ`}
            </Typography>
            
        </div>
    );
}

export default withStyles(styles)(MainWindowDj);