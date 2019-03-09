import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BlogMainWindowDesktop from '../blog/BlogMainWindowDesktop';
import BlogMainWindowMobile from '../blog/BlogMainWindowMobile';

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
            mobile: false,
            screenSize: window.innerWidth
        }
        window.addEventListener('resize', this.getWinSize);
    };

    getWinSize = () => {
        this.setState({
            screenSize: window.innerWidth
        });

        const screenSize = this.state.screenSize;
        const mobileMaxWidth = 479;

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

    componentDidMount() {
        this.getWinSize();
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.getWinSize);
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