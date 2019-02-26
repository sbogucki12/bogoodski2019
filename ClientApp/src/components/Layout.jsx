import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TopBar from './appbar/TopBar';
import MainWindowMain from './mainWindow/MainWindowMain';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RunLogMain from './runLog/RunLogMain';
import ResumeMain from './resume/ResumeMain';
import './LayoutStyle.css';
import RunUploader from './runLog/RunUploader';
import BlogFullArchive from './blog/BlogFullArchive';
import DatingAppLayout from './dating/datingUI/DatingAppLayout';
import BlogPostLayout from './blog/posts/BlogPostLayout';

const styles = theme => ({
    root: {
        display: 'flex',        
        alignItems: 'flex-start',        
        backgroundImage: 'linear-gradient(#dcedc8 70%, #e4ff54)',
        minHeight: '100%'
    }
});

class Layout extends Component {
    displayName = Layout.name

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <TopBar className="sticky" />                    
                    <Router>
                        <div >
                            <Route exact path="/dating/app" component={DatingAppLayout} />
                            <Route exact path="/blog/posts/layout" component={BlogPostLayout} />
                            <Route exact path="/blog/archive" component={BlogFullArchive} />
                            <Route exact path="/runlog/upload" component={RunUploader} />
                            <Route exact path="/runlog" component={RunLogMain} />
                            <Route exact path="/resume" component={ResumeMain} />
                            <Route exact path="/" component={MainWindowMain} />
                        </div>
                    </Router>
                </div>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Layout);
