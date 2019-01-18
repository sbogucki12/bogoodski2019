import { install } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

install();

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const theme = createMuiTheme();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>,
    rootElement);

registerServiceWorker();