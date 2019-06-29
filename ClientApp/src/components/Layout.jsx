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
import ChatHome from './chat/ChatHome';
import ChatUserLogin from './chat/ChatUserLogin';
import MyDashboardRoot from './chat/MyDashboardRoot';
import DjMain from './dj/DjMain';
import UpdateMay232019 from './newBlogFolder/UpdateMay232019';
import ToDoSwitchPage from './toDo/ToDoSwitchPage';
import BogoodskiWritesMain from './bogoodskiWrites/BogoodskiWritesMain';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: '100%'
    }
};

class Layout extends Component {
    displayName = Layout.name
    constructor(props) {
        super(props);
        this.state = {
            isOnline: ""
        }
    }

    componentDidMount() {
        fetch("/api/chat/isonline")
            .then(res => res.json())
            .then(data => data.isOnline)
            .then(onlineStatus => {
                this.setState({
                    isOnline: onlineStatus
                })
            })
            .catch(err => console.error(`${err}`));
    }

    render() {
        const { classes } = this.props;
        const onlineStatus = this.state.isOnline;

        let chatRoutes = null;

        if (onlineStatus === "yes") {
            chatRoutes =
                <React.Fragment>
                    <Route exact path="/chat/home" component={ChatUserLogin} />
                    <Route exact path="/chat/room" component={ChatHome} />
                </React.Fragment>
        }

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <TopBar className="sticky" />
                    <Router>
                        <div>
                            {chatRoutes}
                            <Route exact path="/chat/mydashboard" component={MyDashboardRoot} />                            
                            <Route exact path="/todo/switch" component={ToDoSwitchPage} /> 
                            <Route exact path="/writes/test" component={BogoodskiWritesMain} />                           
                            <Route exact path="/blog/updatemay232019" component={UpdateMay232019} />
                            <Route exact path="/dj/djmain" component={DjMain} />
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
