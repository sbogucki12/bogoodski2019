import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PotusBackgroundLeftBox from './PotusBackgroundLeftBox';
import PotusBackgroundRightBox from './PotusBackgroundRightBox';

const styles = theme => ({
    background: {
        minWidth: '100vw',        
        display: 'flex', 
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,255,1)', 
        minHeight: '100vh'
    },
    backgroundRightBox: {
        
    }
});

function PotusDesktopLayout(props) {
    const { classes } = props;
    return (
        <div className={classes.background}>
            <PotusBackgroundLeftBox />
            <div className={classes.backgroundRightBox}>
                <PotusBackgroundRightBox />
            </div>
        </div>
        
    )
}


export default withStyles(styles)(PotusDesktopLayout);