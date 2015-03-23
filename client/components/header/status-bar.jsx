/** @jsx React.DOM */

var React = require("react");

var RecycleState = require('./recycle-state');
var Navbar = require('react-bootstrap/Navbar');
var Button = require('react-bootstrap/Button');
var Postal = require('postal');
var QueueCount = require('./../queue/queue-count');
var GrammarCount = require('./../grammars/grammar-count');
var SpecProgressBar = require('./spec-progress-bar');

var SpecificationStore = require('./../../lib/specification-store');

var StatusBar = React.createClass({
	getInitialState: function(){
		var data = SpecificationStore.systemRecycled;
	
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
				<span id="spec-progress-bar" className="pull-left">
					<SpecProgressBar />
				</span>
				<span className="pull-right">
					<QueueCount />
					<GrammarCount />
					<RecycleState recycled={this.state.recycled} time={this.state.time} success={this.state.success} recycling={this.state.recycling}/>


				</span>
			</Navbar>
		);
	}
});

module.exports = StatusBar;
