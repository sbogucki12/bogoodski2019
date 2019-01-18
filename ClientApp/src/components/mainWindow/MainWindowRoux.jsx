import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        minWidth: '100%',
        minHeight: 300,
        backgroundColor: "#e4ff54",
        marginBottom: '2%',
    }
};

function MainWindowRoux(props) {
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
            <Typography variant="h3" align="center" gutterBottom>
                {`Main Window Roux`}
             </Typography>
        </div>
    );
}

export default withStyles(styles)(MainWindowRoux);