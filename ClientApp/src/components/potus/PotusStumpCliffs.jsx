import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        color: '#000000',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', 
        maxWidth: '90%'
    },
    realCliffs: {
        fontSize: '5vh'
    },
    memeCliffs: {
        fontSize: '2vh'
    },
    button: {
        margin: theme.spacing.unit, 
        fontSize: '8vh'
    }
});

function PotusStumpCliffs(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={6}>
            <div className={classes.realCliffs}>
                {`Cliffs: We have the moral obligation to those who sacrifice on our behalf to dream the impossible. And then achieve it.`}
            </div>
            <div className={classes.memeCliffs}>
                {`Memes shall be our chronicle for posterity.`}
            </div>
            <Button variant="outlined" color="secondary" className={classes.button} onClick={props.onNext}>
                {`🤔`}
            </Button>
        </Paper>
    )
}

export default withStyles(styles)(PotusStumpCliffs);