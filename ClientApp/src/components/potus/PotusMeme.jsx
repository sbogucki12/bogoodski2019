import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Meme from "./images/dasharezone.jpg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
        color: '#000000',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: '70%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column'
    }, 
    meme: {
        maxWidth: '100%', 
        maxHeight: '70%'
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
            <div>
                <img src={Meme} alt="daShareZ0ne" className={classes.meme} />
            </div>
            <div>
                {`You should follow `}
                <a href="https://twitter.com/dasharez0ne" target="_blank">
                    {`daSharez0ne`}
                </a>
                {` on twitter. Also, you probably shouldn't.`}
            </div>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="secondary" className={classes.button} component={Link} to="/">
                    {`BoGoodSki 2020`}
                </Button>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(PotusMeme);