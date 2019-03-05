import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        color: '#000000',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: '60%'
    }    
});

function PotusStumpIntro(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={6}>
            {`Potus Stump Intro`}
        </Paper>
    )
}

export default withStyles(styles)(PotusStumpIntro);