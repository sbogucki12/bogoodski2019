import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TopBar from './appbar/TopBar';
import MainWindowMain from './mainWindow/MainWindowMain';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ResumeMain from './resume/ResumeMain';
import './LayoutStyle.css';

const styles = theme => ({
    root: {
        display: 'flex',        
        alignItems: 'flex-start'
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
