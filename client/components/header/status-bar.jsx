/** @jsx React.DOM */

var React = require("react");

var RecycleState = require('./recycle-state');
var {Navbar, Button} = require('react-bootstrap');
var Postal = require('postal');
var QueueCount = require('./../queue/queue-count');
var GrammarCount = require('./../grammars/grammar-count');


var Hierarchy = require('./../../lib/stores/hierarchy');
var HelpIcon = require('./help');
var Search = require('./search');
var RuntimeError = require('./runtime-error');
var UnsavedChanges = require('./unsaved-changes');


var StatusBar = React.createClass({
	getInitialState: function(){
		var data = Hierarchy.systemRecycled();
	
		return {
			success: data.success,
			time: data.time,
			recycled: data,
			recycling: false
		}
	},

	
	
	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'engine',
			topic: 'system-recycled',
			callback: data => {
				self.setState({
					success: data.success,
					time: data.time,
					recycled: data,
					recycling: false
				});
			}
		});
		
		Postal.subscribe({
			channel: 'engine',
			topic: 'system-recycle-start',
			callback: data => {
				self.setState({
					recycling: true
				});
			}
		});


	},

	render: function(){
		return (
			<Navbar className="bg-info status-bar">
				<span className="pull-right">
					<UnsavedChanges />
					<QueueCount />
					<GrammarCount />
					<RecycleState recycled={this.state.recycled} time={this.state.time} success={this.state.success} recycling={this.state.recycling}/>
					<Search />
					<HelpIcon />
					<RuntimeError />
				</span>

			</Navbar>

		);
	}
});

module.exports = StatusBar;
