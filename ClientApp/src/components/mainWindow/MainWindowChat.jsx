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
            screenSize: window.innerWidth,
            isMobile: true,
            isOnline: false
        }        

        window.addEventListener('resize', this.setDeviceSize);
    }

    setDeviceSize = () => {
        this.setState({
            screenSize: window.innerWidth
        })

        const width = this.state.screenSize;
        const desktopMinimum = 620;

        if (width > desktopMinimum) {           
            this.setState({
                isMobile: false
            })
        } else {           
            this.setState({
                isMobile: true
            })
        }
    };
    
    componentDidMount() {        
        this.setDeviceSize(); 
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.setDeviceSize);
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