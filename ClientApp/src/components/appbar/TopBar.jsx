import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    toolbar: {
        display: 'flex',
        justifyContent: 'center'
    }
};

function TopBar(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <div>
                        {`Link 1`}
                    </div>
                    <div>
                        {`Link 2`}
                    </div>
                    <div>
                        {`Link 3`}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(TopBar);