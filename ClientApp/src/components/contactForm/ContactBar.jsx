import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

const primaryColor = '#b0bec5';
const secondaryColor = '#aeea00';

const winSize = window.screen.availWidth;

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundImage: `linear-gradient(${primaryColor}, ${secondaryColor})`,
        borderTop: '1px solid black',
        //maxHeight: '10vh',
        //maxWidth: '100vw'
    },

    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit * 1,
        //padding: theme.spacing.unit * 3        
    },
    fab: {
        marginTop: theme.spacing.unit * 1,
        marginBottom: theme.spacing.unit * 1,
        //padding: theme.spacing.unit * 1

    }
});

function ContactBar(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar} toggleDialog={props.toggleDialog}>

                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={2} sm={5} lg={2}/>
                    <Grid item xs={8} sm={5} lg={5}>
                        <Button variant="outlined" className={classes.button} onClick={props.toggleDialog} >
                            {`Contact BoGoodSki`}
                        </Button>
                    </Grid>
                    <Grid item sm={1} lg={4} />
                    <Grid item xs={1} sm={1} lg={1} >
                        <Fab size="small" className={classes.fab} >
                            <CancelIcon />
                        </Fab>
                        <Grid item xs={1} />
                    </Grid>
                </Grid>
            </AppBar>
        </React.Fragment>
    );
}

export default withStyles(styles)(ContactBar);