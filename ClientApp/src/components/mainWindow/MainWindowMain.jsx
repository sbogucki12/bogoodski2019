import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainWindowResume from './MainWindowResume';
import MainWindowDJ from './MainWindowDJ';
import MainWindowRoux from './MainWindowRoux';

const styles = theme => ({
    root: {
        
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center', 
        flexDirection: 'column', 
        marginTop: '5%',
        minWidth: '100vw',
    }
});

function MainWindowMain(props) {
    const { classes } = props;

    return (
        <div className={classes.root} >
            <MainWindowResume />
            <MainWindowRoux  />
            <MainWindowDJ />
        </div>
    );
}

export default withStyles(styles)(MainWindowMain);