import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme1, theme2 } from './theme/theme';
import './fonts/Raleway-Black.ttf';
import './fonts/Raleway-Light.ttf';
import './fonts/Raleway-ExtraLight.ttf';
import './fonts/Raleway-Medium.ttf';
import './fonts/Raleway-Bold.ttf';

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={createMuiTheme(theme1)}>
     <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
