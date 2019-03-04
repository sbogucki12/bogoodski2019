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
        paddingTop: theme.spacing.unit * 1,        
        paddingBottom: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
        marginTop: '9%'       
    }, 
    thinkStyle: {
        fontSize: '4vh',
        fontFamily: `'News Cycle', sans-serif`, 
        margin: 0, 
        padding: 0
    },
    biggerStyle: {
        fontSize: '6vh',
        fontFamily: `'News Cycle', sans-serif`,
        margin: 0, 
        padding: 0
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