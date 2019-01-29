import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';
import localPath from './helpers/localPath';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Layout />
            </React.Fragment>
        );
    }
}
