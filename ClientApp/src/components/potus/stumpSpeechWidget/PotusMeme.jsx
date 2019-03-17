import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Meme from "../images/dasharezone.jpg";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        color: '#000000',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '64vw',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        marginTop: '10%',
        marginBottom: '2%',
        
    }, 
    memeContainer: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    meme: {
        maxWidth: '80%', 
        maxHeight: '400px'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing.unit        
    }          
});

function PotusMeme(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <div className={classes.memeContainer}>
                <img src={Meme} alt="daShareZ0ne" className={classes.meme} />
            </div>
            <Typography variant="caption" gutterBottom>
                {`You should follow `}
                <a href="https://twitter.com/dasharez0ne" target="_blank" rel="noopener noreferrer">
                    {`daSharez0ne`}
                </a>
                {` on twitter. Also, you probably shouldn't.`}
            </Typography>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={props.onHome}>
                    {`BoGoodSki 2020`}
                </Button>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusMeme);