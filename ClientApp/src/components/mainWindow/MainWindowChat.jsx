import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMainWindowDesktop from '../chat/ChatMainWindowDesktop';

const styles = theme => ({
    root: {
        minWidth: '100%', 
        minHeight: '100%',
        backgroundColor: theme.palette.secondary.main,        
        marginBottom: '2%', 
        borderWidth: '1px', 
        borderStyle: "solid", 
        borderColor: theme.palette.primary.main
    }
});

class MainWindowChat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobile: false,
            isOnline: false
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ChatMainWindowDesktop />
            </div>
        );
    }
}

export default withStyles(styles)(MainWindowChat);