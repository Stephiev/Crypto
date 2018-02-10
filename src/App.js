import React, { Component } from 'react';
import './App.css';
import CryptoPaper from './components/CryptoPaper'
import DashboardMenu from './components/DashboardMenu'
import TestCard from './components/TestCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  constructor() {
    super()

    this.state = {
      ticker: '', 
      base: "USD"
    }
  }

  getPriceData() {
    
  }
  render() {
    return (
  <MuiThemeProvider>
    <AppBar title="This is the title"/>
    <CryptoPaper />
  </MuiThemeProvider>    );
  }
}

export default App;
