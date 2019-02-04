import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RunnerIcon from './RunnerIcon';

const styles = theme => ({
    root: {       

        backgroundColor: 'white', 
        minHeight: '100vh',
        minWidth: '100vw', 
        display: 'flex',
        justifyContent: 'center',
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function RunLogMain(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paperRoot} elevation={6}>                
                <Typography variant="h5" component="h3">
                    {RunnerIcon}
                </Typography>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(RunLogMain);