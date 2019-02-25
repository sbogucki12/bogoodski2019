import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GrittyPic from './images/users/gritty/gritty1.jpg'
import DatingTopBar from './DatingTopBar';
import DatingPicTopRow from './DatingPicTopRow';
import DatingPicBottomRow from './DatingPicBottomRow';
import DatingFooter from './DatingFooter';

const styles = theme => ({
    background: {
        backgroundColor: 'white',
        minWidth: '100vw',         
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100%'
    },
    topBar: {
        width: '100%', 
        marginTop: '25vh',
        display: 'flex',
        justifyContent: 'center'
    },
    picBackground: {
        width: '90%',
        height: '600px'
    },
    picBackgroundImage: {
        backgroundImage: `url(${GrittyPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',        
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'white',
        borderRadius: '10px'
    },
    picTopRow: {
        width: '100%', 
        marginBottom: '390px'
    },
    picBottomRow: {
        marginTop: '390px',
        width: '100%'
    },
    footer: {
        width: '100%'
    }
});

function DatingAppLayout(props) {
    const { classes } = props;
    return (
        <div className={classes.background}>
            <div className={classes.topBar}>
                <DatingTopBar />     
            </div>

            <div className={classes.picBackground}>
                <div className={classes.picBackgroundImage}>
                    <div className={classes.picTopRow}>
                        <DatingPicTopRow />
                    </div>
                    <div className={classes.picBottomRow}>
                        <DatingPicBottomRow />
                    </div>
                </div>
            </div>
            <div className={classes.footer} >
                <DatingFooter />
            </div>
        </div>
        
    )
}

export default withStyles(styles)(DatingAppLayout);
