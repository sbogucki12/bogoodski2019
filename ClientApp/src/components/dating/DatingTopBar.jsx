import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    topBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%', 
       
        
        
    },
    topBarIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        margin: theme.spacing.unit * 2
    },
});

function DatingTopBar(props) {
    const { classes } = props;
    return (
        <div className={classes.topBar}>
            <div className={classes.topBarIcons}>
                <div>Icon1</div>
                <div>(fake) Dating App</div>
                <div>Icon2</div>
            </div>
        </div>)
}

export default withStyles(styles)(DatingTopBar);