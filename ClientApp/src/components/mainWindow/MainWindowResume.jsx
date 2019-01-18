import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        minWidth: '100%',  
        minHeight: '30vmax',
        marginBottom: '2%',
        marginTop: '2%',
        background: 'linear-gradient(to bottom right, #1b5e20, white)'
    },
};

function MainWindowResume(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h3" align="center" gutterBottom>
                {`Main Window Resume`}
            </Typography>
        </div>
    );
}

export default withStyles(styles)(MainWindowResume);