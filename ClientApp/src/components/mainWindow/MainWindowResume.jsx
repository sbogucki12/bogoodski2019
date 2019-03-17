import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        minHeight: '30vmax',
        marginBottom: '2%',
        background: 'linear-gradient(to bottom right, #1b5e20, white)',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '18vh'
    },
    text: {
        maxWidth: '60vw',
        columnCount: 2,
        columnWidth: '225px', 
        marginBottom: '2%',
    },
    button: {
        margin: theme.spacing.unit
    }, 
    logo: {
        fontFamily: `'Bungee Inline', cursive`
    },
    bio: {
        display: 'flex',
        justifyContent: 'center'
    }
});

function MainWindowResume(props) {
    const { classes } = props; 
    const months = [ "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
    const date = new Date();
    const monthIndex = date.getMonth(); 
    const month = months[monthIndex]; 
    const day = date.getDate(); 

    return ( 
        <div className={classes.root}>
            <div className={classes.text}>
                <center>
                    <h1 className={classes.logo}>
                        {`BoGoodSki`}
                    </h1>
                </center>
                <Typography variant="body2" gutterBottom className={classes.bio}>
                    Long Beach. Born near Philadelphia, raised in North Dakota; California is home.  Runner. Perpetually curious.  Web developer.  Dog spoiler.  I like techno. Other music, too. Vet. ☮️ #TrustTheProcess
                </Typography>
                <Typography variant="caption" gutterBottom className={classes.bio}>
                    <b>{`${month} ${day}:`}</b> <i>{` Currently Available For Hire.`}</i>
                </Typography>
                <center>
                    <Button variant="contained" color="primary" className={classes.button} component={Link} to="/resume">
                        {`View Resume`}
                    </Button>
                </center>
            </div>
        </div>
        
    );
}

export default withStyles(styles)(MainWindowResume);