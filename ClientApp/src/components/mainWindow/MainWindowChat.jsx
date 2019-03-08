import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMainWindowDesktop from '../chat/ChatMainWindowDesktop';
import ChatMainWindowMobile from '../chat/ChatMainWindowMobile';

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
            isMobile: true,
            isOnline: false
        }
    }

    componentDidMount() {
        const availWidth = window.screen.availWidth;
        const desktopMinimum = 620;

        if (availWidth > desktopMinimum) {
            this.setState({
                isMobile: false
            })
        } else {
            this.setState({
                isMobile: true
            })
        }
    }

    render() {
        const { classes } = this.props;

        const isMobile = this.state.isMobile;
        let content;
        if (!isMobile) {
            content = <ChatMainWindowDesktop />;
        } else {
            content = <ChatMainWindowMobile />;
        }

        return (
            <div className={classes.root}>
                {content}
            </div>
        );
    }
}

export default withStyles(styles)(MainWindowChat);