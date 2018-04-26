

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import NavgationMore from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';



export default class ReactComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});





  render() {
    return (

      <div>
	  <AppBar
	    title="HouseControl"
	    iconElementLeft ={<IconButton onClick={this.handleToggle}><NavgationMore /></IconButton>}	    

	  />      
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle} className="app-drawer" >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}