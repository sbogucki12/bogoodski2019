import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }, 
    root: {
        display: 'flex', 
        justifyContent: 'center',
        margin: 'auto'
    }
});

function ContactButton(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>
                {`Send`}
            </Button>
        </div>
    );
}

export default withStyles(styles)(ContactButton);