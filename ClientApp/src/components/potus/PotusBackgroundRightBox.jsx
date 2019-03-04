import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PotusPlatform from './PotusPlatform';
import PotusSlogan from './PotusSlogan';

const styles = theme => ({
    backgroundRightBox: {
        minHeight: '100%',                   
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',         
    }, 
    sloganBox: {
        marginTop: '10vh'
    }
});

function PotusBackgroundRightBox(props) {
    const { classes } = props;
    return (
        <div className={classes.backgroundRightBox}>
            <div className={classes.sloganBox}>
                <PotusSlogan />
            </div>            
            <PotusPlatform />            
        </div>
    )
}

export default withStyles(styles)(PotusBackgroundRightBox);