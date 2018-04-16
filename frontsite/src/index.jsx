import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/app';

ReactDom.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
  , document.querySelector('.container'),
);
