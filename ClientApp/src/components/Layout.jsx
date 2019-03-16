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
import DatingQuestionHome from './dating/datingQuestionaire/DatingQuestionHome';
import BlogPostLayout from './blog/posts/BlogPostLayout';
import DatingQuestionSetLayout from './dating/datingQuestionaire/DatingQuestionSetLayout';
import PotusDesktopLayout from './potus/PotusDesktopLayout';
import PotusLanding from './potus/PotusLanding';
import ChatTemplate from './chat/ChatTemplate';
import ChatHome from './chat/ChatHome';
import ChatUserLogin from './chat/ChatUserLogin';
import MyDashboardRoot from './chat/MyDashboardRoot';

const styles = theme => ({
    root: {
        display: 'flex',        
        alignItems: 'flex-start',  
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
                        <div>
                            <Route exact path="/chat/home" component={ChatUserLogin} />
                            <Route exact path="/chat/room" component={ChatHome} />
                            <Route exact path="/chat/mydashboard" component={MyDashboardRoot} />
                            <Route exact path="/potus/home" component={PotusDesktopLayout} />
                            <Route exact path="/potus/intro" component={PotusLanding} />
                            <Route exact path="/dating/getyourmatch" component={DatingQuestionSetLayout} />
                            <Route exact path="/dating/app" component={DatingQuestionHome} />
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
