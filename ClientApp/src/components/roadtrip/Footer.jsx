import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', 
        background: `linear-gradient(180deg, rgba(250, 250, 250, 1) 0%, rgba(27, 94, 32, 1) 100%)`
    },
    button: {
        margin: theme.spacing(2)
    }    
});

const Footer = props => {
    const { classes } = props;
  
    const content =
        <div className={classes.root}>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component={Link}
                to='/'
            >
                {`HOME`}
            </Button>
        </div>;

    return content;
};

export default withStyles(styles)(Footer); 