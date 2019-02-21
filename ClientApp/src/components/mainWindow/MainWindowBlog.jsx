import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BlogMainWindowDesktop from '../blog/BlogMainWindowDesktop';
import BlogMainWindowMobile from '../blog/BlogMainWindowMobile';

const screenSize = window.screen.availWidth;
const mobileMaxWidth = 479; 

const styles = {
    root: {        
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: "black", 
        width: '100%', 
        marginBottom: `2%`, 
        color: `#dcedc8`
    }
};

class MainWindowBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false
        }        
    };

    componentDidMount() {
        const getWinSize = () => {            
            if (screenSize > mobileMaxWidth) {
                this.setState({
                    mobile: false
                })
            } else {
                this.setState({
                    mobile: true
                })
            }
        };

        getWinSize();

    };

    render() {
        const { classes } = this.props;
        const isMobile = this.state.mobile; 

        const content =
            isMobile ? <BlogMainWindowMobile /> : <BlogMainWindowDesktop />;                      

        return (
            <div className={classes.root}>
                {content}
            </div>
        );
    }
}

export default withStyles(styles)(MainWindowBlog);