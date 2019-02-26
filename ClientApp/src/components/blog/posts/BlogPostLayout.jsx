import React, { lazy } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GrittyPic from '../images/grittyHeader.jpg';


const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
        minWidth: '100vw',
        backgroundColor: theme.palette.secondary.main
    },
    background: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '90vw',
        display: 'flex',
        justifyContent: 'center', 
        flexDirection: 'column'
    },
    header: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, 
    headerLeftBox: {
        width: '90%',
        backgroundImage: `url(${GrittyPic})`,
        opacity: .5,
        //backgroundImage: `url(${GrittyPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',        
        height: 400
    },
    headerRightBox: {
        width: '80%',        
        backgroundImage: `linear-gradient(to right, black, lightgray, pink)`,
        height: 400
    },

    contentBackground: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing.unit
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing.unit,
        maxWidth: '60%'
    }
});

function BlogPostLayout(props) {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Paper className={classes.background} elevation={1}>
                <Paper className={classes.header} elevation={6}>
                    <div className={classes.headerLeftBox}>
                        {`LEFT`}
                    </div>
                    <div className={classes.headerRightBox}>
                        {`RIGHT`}
                    </div>
                </Paper>
                <Paper className={classes.contentBackground} elevation={6}>
                    <Typography variant="h5" component="h3">
                        {`Title`}
                    </Typography> 
                    <Typography variant="overline" gutterBottom>
                        {`Date`}
                    </Typography>  
                    <Typography variant="body1" gutterBottom>
                        {`Body`}
                    </Typography>  
                </Paper>
                <div className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        {`Blog Home`}
                    </Button>
                </div>

          
            </Paper>
        </div>
    );
}

export default withStyles(styles)(BlogPostLayout);