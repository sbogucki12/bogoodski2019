import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PotusBitmoji from './images/potusbitmoji.jpg';

const styles = theme => ({
    backgroundLeftBox: {
        minHeight: '400px',
        width: '25%',
        background: 'linear-gradient(to top, rgb(0,0,255,.9), rgb(255,255,255,.5))', 
        borderRightStyle: 'solid',
        borderRightWidth: 2,
        borderRightColor: 'rgba(0,255,0,.2)'
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
        color: 'rgb(0,0,255)', 
        fontFamily: `'Lobster', cursive`, 
        color: '#FFFFFF', 
        textShadow: '1px 1px #000000, 2px 2px #00FF00', 
        fontSize: '5vh'
    }, 
    bitmoji: {
        height: 300,
        borderWidth: 1, 
        borderStyle: 'solid',
        borderColor: '#009900',
        borderRadius: '25%', 
        boxShadow: '3px 1px 5px #00FF00'
    }
});

function PotusBackgroundLeftBox(props) {
    const { classes } = props;
    return (
        <div className={classes.backgroundLeftBox}>
            <div className={classes.topBox}>
                <img src={PotusBitmoji} className={classes.bitmoji} />
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