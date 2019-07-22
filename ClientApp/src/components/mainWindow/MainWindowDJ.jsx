import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheatCodeCoverVol4 from '../dj/images/cheatcodevol4soundcloud.jpg'; 
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
        borderColor: '#0099AA'
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
        maxHeight: '225px', 
        width: '60%',
        borderWidth: '1px',
        borderColor: 'orange',
        borderStyle: 'solid',
        borderRadius: '5px'
    }
});

function MainWindowDj(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className="djBackground">
                <div className={classes.leftBox}>
                    <img src={CheatCodeCoverVol4} className={classes.imgStyle} alt="Cheat Code Volume 4" />
                </div>
                <div className={classes.rightBox}>
                    <div className={classes.rightBoxTop}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            component={Link}
                            to="/dj/cheatcodevol4/main"
                        >
                            {`Enter`}
                        </Button>
                    </div>
                    <div className={classes.rightBoxBottom}>
                        <Typography variant="h5" style={{ color: '#000000' }} gutterBottom>
                            {`🎵 DJ Archive`}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(MainWindowDj);