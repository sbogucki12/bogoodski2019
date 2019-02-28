import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    footer: {
        width: '100%'
    }
});

function DatingFooter(props) {
    const { classes } = props;
    return (
        <div className={classes.footer} />
       )
}

export default withStyles(styles)(DatingFooter);