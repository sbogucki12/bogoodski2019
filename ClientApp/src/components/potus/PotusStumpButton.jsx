import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        color: '#000000',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
    button: {
        margin: theme.spacing.unit, 
       
    }, 
    buttonTextContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap'
    }
});

function PotusStumpButton(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={6}>
            <Button variant="flat" color="secondary" className={classes.button} onClick={props.onNext}>
                <div className={classes.buttonTextContainer}>
                <div style={{ textDecoration: 'line-through' }}>
                    {`Stump Speech`}
                </div>
                <div>
                    {`My Story`}
                    </div>
                </div>
            </Button>
        </Paper>

    )
}

export default withStyles(styles)(PotusStumpButton);