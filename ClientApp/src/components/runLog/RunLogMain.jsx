import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RunnerIcon from './RunnerIcon';
import './RunStyle.css';

const styles = theme => ({
    root: { 
        backgroundColor: 'white', 
        minHeight: '100vh',
        minWidth: '100vw', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        minWidth: '80vw', 
        maxHeight: '70vh'
    }
});

function RunLogMain(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paperRoot} elevation={6}> 
                <div >
                
                    <span className="runnerAnimated">{RunnerIcon}</span>
                  
                    </div>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(RunLogMain);