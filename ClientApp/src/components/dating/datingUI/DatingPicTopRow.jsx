import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    picTopRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white'        
    },
    icon: {
        margin: theme.spacing.unit * 2
    }
});

function DatingPicTopRow(props) {
    const { classes } = props;
    return (
        <div className={classes.picTopRow}>
            <div className={classes.icon}>Icons Left</div>
            <div className={classes.icon}>Icons Right</div>
        </div>)
}

export default withStyles(styles)(DatingPicTopRow);

