

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import NavgationMore from 'material-ui/svg-icons/navigation/more-vert';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionTimeLine from 'material-ui/svg-icons/action/timeline';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NewWindow from 'react-new-window'

export default class ReactComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});





  render() {
    return (

      <div>
	  <NewWindow>
	    <h1>Hi </h1>
	  </NewWindow>      
	  <AppBar
	    title="HouseControl"
	    iconElementLeft ={<IconButton onClick={this.handleToggle}><NavgationMore /></IconButton>}	    

	  />      
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle} className="app-drawer" >
          <MenuItem>Graficas</MenuItem>
          <MenuItem>Historia</MenuItem>
        </Drawer>

	      <div>
			  <Card>
			    <CardHeader
			      title="Temperatura"
			      subtitle="32 C°"
			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    

			    <CardText expandable={true}>
				    <CardActions>
				    <IconButton >
				      <ActionHistory />
				    </IconButton>					      
				    <IconButton >
				      <ActionTimeLine />
				    </IconButton>					      
								    			    
				    </CardActions>
			    </CardText>
			  </Card>
  			  <Card>
			    <CardHeader
			      title="Humedad"
			      subtitle="45 %°"
			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    

			    <CardText expandable={true}>
				    <CardActions>
				    <IconButton >
				      <ActionHistory />
				    </IconButton>					      				      
				    <IconButton >
				      <ActionTimeLine />
				    </IconButton>					      							    			    
				    </CardActions>
			    </CardText>
			  </Card>	  			     
	      </div>
      </div>      
    );
  }
}