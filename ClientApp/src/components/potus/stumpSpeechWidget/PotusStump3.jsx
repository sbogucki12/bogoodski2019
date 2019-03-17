import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        color: '#000000',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '90%',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing.unit,
        fontSize: '8vh'
    }        
});

function PotusStump3(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Typography variant="body1" gutterBottom>
                {`Every time the United States fails to take on its most daunting challenges – healthcare for all its people, improvement of its crumbling infrastructure, properly resourcing its educational system, slowing climate change, and on – because the solutions “cost too much” or “they aren’t American!” or because “the politics aren’t right”, we display a lack of courage that spits in the face of our ancestors who never allowed meager challenges deter them from solving the massive ones. And betrays the promises we make to those willing to sacrifice on our behalf.`}
            </Typography>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={props.onNext}>
                    {`👀`}
                </Button>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusStump3);