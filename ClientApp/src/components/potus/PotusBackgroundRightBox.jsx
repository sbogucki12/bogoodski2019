import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import StumpSpeechWidget from './stumpSpeechWidget/StumpSpeechWidget';
import PotusSlogan from './PotusSlogan';
import PayForItLogo from './payingForIt/PayForItLogo';

const styles = theme => ({
    root: {
        display: 'flex', 
        flexDirection: 'column',
        minWidth: '85vw'
    },
    backgroundRightBox: {                        
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }, 
    sloganBox: {
        marginTop: '10vh'
    }, 
    stumpContainer: {
        display: 'flex',
        alignItems: 'center',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '80vh',
        minWidth: "60%"
        
    },
    payForItLogoContainer: {        
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FF0000',
        width: '100%', 
        minHeight: '200px'
    }
});

//TODO: Refactor so that stump speech widget isnt coupled to 
//this component's state 
class PotusBackgroundRightBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        const { classes } = this.props;   

        return (
            <div className={classes.root}>
                <div className={classes.backgroundRightBox}>
                    <div className={classes.sloganBox}>
                        <PotusSlogan />
                    </div>
                    <div className={classes.stumpContainer}>
                        <StumpSpeechWidget />
                    </div>
                </div>
                    <div className={classes.payForItLogoContainer}>
                        <PayForItLogo />
                    </div>
            </div>
           

        )
    }
}

export default withStyles(styles)(PotusBackgroundRightBox);