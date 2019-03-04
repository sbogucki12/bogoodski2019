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
        maxWidth: '60%'
    }, 
    punchline: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: theme.spacing.unit
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

function PotusStump5(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <div>
                {`I truly believe that our world can become one of universal prosperity, peace, and technological advancement far beyond what we settle for today.  And the United States of America can lead us there.`}
            </div>
            <div className={classes.punchline}>
                {`But only if we dare to think BIGGER.`}
            </div>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={props.onNext}>
                    {`🌎`}
                </Button>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusStump5);