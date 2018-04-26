import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactComponent from './ReactComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {


    return (
    	  <MuiThemeProvider>
    		<ReactComponent />
  		</MuiThemeProvider>

  	
    );
  }
}

export default App;
