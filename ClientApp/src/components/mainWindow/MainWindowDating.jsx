import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HeartIcon from '@material-ui/icons/FavoriteTwoTone';
import { Link } from 'react-router-dom';

const styles = theme => ({
    background: {
        minWidth: '100%',
        minHeight: '300px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: '2%'
    },
    contentContainer: {
        width: '90%',
        height: '225px',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', 
        borderWidth: '1px',
        borderColor: theme.palette.primary.main,
        borderStyle: 'solid'
    },
    contentLeftBox: {
        width: '40%',
        backgroundImage: 'linear-gradient(to right, #FFB6C1, #FFFFFF)', 
        backgroundSize: 'cover',
        minHeight: '100%', 
        display: 'flex', 
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    heartIconStyle: {
        fontSize: '10vh'
    },
    contentRightBox: {
        width: '60%',
        minHeight: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column',
        fontFamily: `'Playfair Display', serif`,
        fontSize: '3vh'
    },
    button: {
        margin: theme.spacing.unit,
        backgroundImage: 'linear-gradient(to right, #FFB6C1, #FFFFFF)'
    }
});

function MainWindowDating(props) {
    const { classes } = props;
    return (
        <div className={classes.background}>
            <div className={classes.contentContainer}>
                <div className={classes.contentLeftBox}> 
                    <HeartIcon className={classes.heartIconStyle} />
                </div>
                <div className={classes.contentRightBox}>
                    {`(fake) Dating App`}
                    <Button
                        variant="contained"
                        className={classes.button}
                        size="small"
                        component={Link}
                        to="/dating/app"
                    >
                        {`Begin`}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(MainWindowDating);