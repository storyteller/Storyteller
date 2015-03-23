/** @jsx React.DOM */

var React = require("react");

var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var DropdownButton = require('react-bootstrap/DropdownButton');
var MenuItem = require('react-bootstrap/MenuItem');
var NavItem = require('react-bootstrap/NavItem');
var Button = require('react-bootstrap/Button');

var Icons = require('./../icons');

var Postal = require('postal');

var StatusBar = require('./status-bar');






module.exports = React.createClass({
	getInitialState: function(){
		return {
			name: 'Storyteller Project'
		}
	},

	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'engine',
			topic: 'system-recycled',
			callback: function(data, envelope){
				self.setState({
					name: data.name
				});
			}
		})
	},

	render: function(){
		var onRecycle = e => {
			Postal.publish({
				channel: 'engine-request',
				topic: 'force-recycle',
				data: {}
			});
			
			return e.preventDefault();
		}
	
		return (
			<div>
				<Navbar inverse={true} id="top-nav">
					<Nav>
						<a className="navbar-brand" href="#/">Storyteller 3</a>

				        <NavItem eventKey="4" href="#/">{this.state.name}</NavItem>
					</Nav>
					<Nav right={true}>
				          <NavItem eventKey="1" href="#/language">Fixtures and Grammars</NavItem>
				          <NavItem eventKey="2" href="#/docs">Documentation</NavItem>
				        <DropdownButton eventKey={1} title="Commands">
				          <NavItem eventKey="1" onClick={onRecycle}>Recycle System</NavItem>
				          <NavItem eventKey="2" >Reload Spec from Disk</NavItem>
				          <NavItem eventKey="2" >Clear All Results</NavItem>
				        </DropdownButton>
					</Nav>
				</Navbar>
				<StatusBar/>

			</div>

		);


	}
});

