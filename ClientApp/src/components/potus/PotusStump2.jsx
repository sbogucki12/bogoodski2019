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
        flexDirection: 'column',         
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {        
        fontSize: '8vh',
        marginTop: '7%'
    }    
});

function PotusStump2(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Typography variant="body1" gutterBottom>
                {`(A land of memes so great their message transcends eternally from Slashdot to reddit, through digg, 4chan, and StumbleUpon)...`}
            </Typography>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={props.onNext}>
                    {`🦅`}
                </Button>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusStump2);