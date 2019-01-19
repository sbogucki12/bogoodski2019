import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import RouxMain from './components/rouxPics/RouxMain';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Router>
                <React.Fragment>
                    <CssBaseline />
                    <Layout>
                        <Route exact path='/' component={Home} />
                    </Layout>
                </React.Fragment>
            </Router>
        );
    }
}
