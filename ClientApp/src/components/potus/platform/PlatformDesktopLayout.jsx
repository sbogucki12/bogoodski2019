import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

function PlatformDesktopLayout(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
            </Paper>
            
        </div>
    );
}

export default withStyles(styles)(PlatformDesktopLayout);