import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RouxLayout from './RouxLayout';

const styles = theme => ({
    root: {}
});

function RouxMain(props) {
    const { classes } = props;

    return (
        <div>
            <RouxLayout />
        </div>
    );
}

export default withStyles(styles)(RouxMain);