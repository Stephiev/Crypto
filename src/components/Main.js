import React from 'react';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import CryptoPaper from './CryptoPaper'

const Main = () => (
  <MuiThemeProvider>
    <AppBar title="This is the title"/>
    <CryptoPaper />
  </MuiThemeProvider>
);

export default Main;