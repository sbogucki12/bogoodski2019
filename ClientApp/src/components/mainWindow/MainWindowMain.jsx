import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainWindowResume from './MainWindowResume';
import MainWindowRoux from './MainWindowRoux';

const screenSize = window.screen.availWidth;
let marginTop; 
if (screenSize <= 320)  {
    marginTop = '25vh';
} else if (screenSize > 320) {
    marginTop = '9vh';
} else {
    marginTop = '9vh';
};


const styles = theme => ({
    root: {        
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center', 
        flexDirection: 'column', 
        marginTop: marginTop,
        minWidth: '100vw',
    }
});

function MainWindowMain(props) {
    const { classes } = props;

    return (
        <div className={classes.root} >
            <MainWindowResume />
            <MainWindowRoux  />
        </div>
    );
}

export default withStyles(styles)(MainWindowMain);