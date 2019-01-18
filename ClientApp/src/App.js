import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetchdata' component={FetchData} />
                </Layout>
            </React.Fragment>
        );
    }
}
