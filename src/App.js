import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactComponent from './ReactComponent';
import TempList from './TempList';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";


const config = {
	apiKey: "AIzaSyCbWTZJzUYbyeom5VVFDWm4fVJalA1gihY",
	authDomain: "wachter-c9d24.firebaseapp.com",
	databaseURL: "https://wachter-c9d24.firebaseio.com",
	projectId: "wachter-c9d24",
	storageBucket: "wachter-c9d24.appspot.com",
	messagingSenderId: "303707008192"

}

firebase.initializeApp(config);




class App extends Component {

  constructor () {
    super()
    this.state = { }


  }


  render() {
  	var temps = [];
  	      const ordersRef = firebase.database().ref('wachter').orderByKey();

		   ordersRef.once('value', snapshot => {
		        snapshot.forEach(child =>{
		        	temps.push(1);
		            temps.push([child.key])
		        })
});
			        	temps.push(1);
    return (

    	  <MuiThemeProvider>
  			<TempList temps={temps} />
      		<ReactComponent />

  		</MuiThemeProvider>


  	
    );
  }
}

export default App;
