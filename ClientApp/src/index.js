import { install } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

install();

const rootElement = document.getElementById('root');

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#aeea00'
        },
        secondary: {
            main: '#1b5e20'
        }
    }, 
    typography: {
        useNextVariants: true
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    rootElement);

registerServiceWorker();