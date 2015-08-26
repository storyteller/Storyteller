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
var Hierarchy = require('./../../lib/stores/hierarchy');
var SpecProgressBar = require('./spec-progress-bar');




module.exports = React.createClass({
	getInitialState: function(){
		var data = Hierarchy.systemRecycled();

		return {
			name: data.name,
			profile: data.properties.Profile
		}
	},

	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'engine',
			topic: 'system-recycled',
			callback: function(data, envelope){
				self.setState({
					name: data.name,
					profile: data.properties.Profile
				});
			}
		})
	},

	render: function(){
		var toCommand = topic => {
			return e => {
				Postal.publish({
					channel: 'engine-request',
					topic: topic,
					data: {}
				});
				
				return e.preventDefault();
			}
		}

		var name = this.state.name;
		if (this.state.profile){
			name += ' (' + this.state.profile + ')';
		}
	
		return (
			<div>
				<Navbar inverse={true} id="top-nav">
					<Nav>
						<a className="navbar-brand" href="#/">Storyteller 3</a>

				        <NavItem id="project-title" eventKey="4" href="#/">{name}</NavItem>
					</Nav>
					<Nav right={true}>
				          <NavItem eventKey="1" href="#/language">Fixtures and Grammars</NavItem>
				          <NavItem eventKey="2" href="#/docs">Documentation</NavItem>
				          <NavItem eventKey="3" href="#/results">Results</NavItem>
				        <DropdownButton eventKey={1} title="Commands">
				          <NavItem eventKey="1" id="force-recycle" onClick={toCommand('force-recycle')}>Recycle System</NavItem>
				          <NavItem eventKey="2" onClick={toCommand('reload-specs')}>Reload All Specs from Disk</NavItem>
				          <NavItem eventKey="2" onClick={toCommand('clear-all-results')}>Clear All Results</NavItem>
				        </DropdownButton>
					</Nav>
				</Navbar>
				<StatusBar/>

				<SpecProgressBar />
			</div>

		);


	}
});

