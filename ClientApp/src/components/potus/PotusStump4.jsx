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
        width: '800px',
        height: '400px',
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
        marginTop: '2%',
        fontSize: '8vh'
    }          
});

function PotusStump4(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Typography variant="body1" gutterBottom>
                {`My dream isn’t just to see America become great again (for ALL its people), but to see America regain its dogged determination to take on all odds, achieve the impossible, and shirk from no beneficial endeavor no matter the immensity of its difficulty.`}
            </Typography>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={props.onNext}>
                    {`🚀`}
                </Button>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusStump4);