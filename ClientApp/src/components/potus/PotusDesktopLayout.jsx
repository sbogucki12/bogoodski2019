import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PotusBackgroundLeftBox from './PotusBackgroundLeftBox';

const styles = theme => ({
    background: {
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex', 
        flexDirection: 'row',
        backgroundColor: theme.palette.background.default
    },
    backgroundRightBox: {
        minHeight: '400px',
        width: '70%',
        backgroundColor: theme.palette.background.default
    }
});

function PotusDesktopLayout(props) {
    const { classes } = props;
    return (
        <div className={classes.background}>
            <PotusBackgroundLeftBox />
            <div className={classes.backgroundRightBox}>
                {`BoGoodSki 2020`}
            </div>
        </div>
        
    )
}


export default withStyles(styles)(PotusDesktopLayout);