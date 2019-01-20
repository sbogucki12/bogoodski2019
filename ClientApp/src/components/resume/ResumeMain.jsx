import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {         
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15vh'
    },
    button: {
        margin: theme.spacing.unit,
        marginLeft: '50%'
    }
});

function ResumeMain(props) {
    const { classes } = props;

    return (
        <React.Fragment>
        <div className={classes.root} style={{ minWidth: '100vw' }} >
            <Typography component="h2" variant="h1" align='center' gutterBottom>
                {`ResumeMain`}
            </Typography> 
            </div>
            <Button variant="contained" component={Link} to="/" className={classes.button} >
                {`Back`}
            </Button>
            </React.Fragment>
    );
}

export default withStyles(styles)(ResumeMain);