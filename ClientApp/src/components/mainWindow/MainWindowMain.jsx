import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainWindowResume from './MainWindowResume';
import MainWindowDJ from './MainWindowDJ';
import MainWindowRoux from './MainWindowRoux';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center', 
        flexDirection: 'column',
        minWidth: '100vmax', 
        marginTop: '5%'
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