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
    paragraph2: {
        marginTop: '2%'
    },
    buttonContainer: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: theme.spacing.unit * 2
    },
    button: {
        fontSize: '8vh'
    }    
});

function PotusStump1(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Typography variant="body1" gutterBottom>
                {`After two tours of Iraq as a forward observer in the United States Army, my guilt from experiences during combat was matched only by the pride that I felt knowing that I had fought on behalf of the values of the greatest nation the world has ever seen.`}
            </Typography>
            <Typography variant="body1" className={classes.paragraph2} gutterBottom>
                {`I was compelled to join the military because I had been convinced that the America I was to defend runs from no challenge, overcomes all obstacles, and achieves feats of magnitude beyond the scope of anything previously imagined.`}
            </Typography>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={props.onNext}>
                    {`💪`}
                </Button>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusStump1);