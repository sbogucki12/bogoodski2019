import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: { 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start', 
        color: '#000000',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: theme.spacing.unit
    }, 
    thinkStyle: {
        fontSize: '4vh'
    },
    biggerStyle: {
        fontSize: '6vh'
    }
});

function PotusSlogan(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={6}>
            <div className={classes.thinkStyle}>
                {`Think`}
            </div>
            <div className={classes.biggerStyle}>
                {`BIGGER`}
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusSlogan);