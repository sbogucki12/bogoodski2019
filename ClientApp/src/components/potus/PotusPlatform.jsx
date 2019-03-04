import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    background: {
    
    }    
});

function PotusPlatform(props) {
    const { classes } = props;
    return (
        <div className={classes.background}>
            {`Some of the issues for which we'll fight`}                    
        </div>
    )
}

export default withStyles(styles)(PotusPlatform);