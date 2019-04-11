import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheatCodeCoverVol1 from '../dj/images/CheatCodeVol1Cover.jpg'; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../dj/djStyle.css';
import { Link } from 'react-router-dom';

const styles = theme =>  ({
    root: {
        minWidth: '100%',
        minHeight: 300, 
        backgroundColor: "#EEEEEE",
        marginBottom: '2%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderStyle: 'solid', 
        borderWidth: '1px',
        borderColor: '#ff80ff'
    },    
    leftBox: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        width: '40%',
        marginLeft: '3%'
    }, 
    rightBox: {
        width: '60%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginRight: '1%'
    }, 
    rightBoxTop: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightBoxBottom: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'        
    },
    imgStyle: {
        maxHeight: '225px'        
    }
});

function MainWindowDj(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className="djBackground">
                <div className={classes.leftBox}>
                    <img src={CheatCodeCoverVol1} className={classes.imgStyle} alt="Cheat Code Volume 1" />
                </div>
                <div className={classes.rightBox}>
                    <div className={classes.rightBoxTop}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            component={Link}
                            to="/dj/djmain"
                        >
                            {`Enter`}
                        </Button>
                    </div>
                    <div className={classes.rightBoxBottom}>
                        <Typography variant="h5" style={{ color: '#FFFF66' }} gutterBottom>
                            {`🎵 DJ Archive`}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(MainWindowDj);