import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TopBar from './appbar/TopBar';
import MainWindowMain from './mainWindow/MainWindowMain';

const styles = theme => ({
    root: {
        display: 'flex',        
        alignItems: 'flex-start'
    },
    topBar: {
        position: 'sticky',
        top: 0
    }
});

class Layout extends Component {
    displayName = Layout.name

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <TopBar className={classes.topBar} />
                    <div >
                        <MainWindowMain />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Layout);
