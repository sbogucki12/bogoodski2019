import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/PersonTwoTone'

const styles = theme => ({
    backgroundLeftBox: {
        minHeight: '400px',
        width: '30%',
        background: 'linear-gradient(to bottom, rgb(255,0,0,.8), rgb(255,255,255,.5))'        
    }, 
    topBox: {
        minHeight: '70%', 
        display: 'flex', 
        paddingTop: '20%',
        justifyContent: 'center',        
    }, 
    bottomBox: {
        minWidth: '100%',
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center', 
        color: 'rgb(0,0,255)'
    }
});

function PotusBackgroundLeftBox(props) {
    const { classes } = props;
    return (
        <div className={classes.backgroundLeftBox}>
            <div className={classes.topBox}>
                <PersonIcon style={{ fontSize: '50vh' }}/>
            </div>
            <div className={classes.bottomBox}>
                <div>
                    {`BoGoodSki`}
                </div>
                <div>
                    {`2020`}
                </div>
            </div>

        </div>
    )
}

export default withStyles(styles)(PotusBackgroundLeftBox);