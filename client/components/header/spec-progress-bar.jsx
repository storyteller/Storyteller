/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');

var ProgressBar = require('react-bootstrap/ProgressBar');

var SpecProgressBar = React.createClass({
	getInitialState: function(){
		return {
			running: false,
			step: 0,
			total: 0,
			spec: null,
			counts: null
		}
	},

	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'explorer',
			topic: 'spec-execution-state',
			callback: data => {
				self.setState({
					running: true,
					step: data.step,
					total: data.total,
					spec: data.spec,
					counts: data.counts
				});
			}
		});

		Postal.subscribe({
			channel: 'engine', 
			topic: 'spec-execution-completed',
			callback: data => {
				self.setState({
					running: false
				});
			}
		})

	},

	render: function(){
		if (!this.state.running){
			return null;
		}

		var bsStyle = null;

		if (this.state.counts.anyResults()){
			if (this.state.counts.success()){
				bsStyle = "success";
			}
			else{
				bsStyle = "danger";
			}
		}

		return (
			<ProgressBar label={'Running ' + this.state.spec.name} bsStyle={bsStyle} min={0} max={this.state.total} now={this.state.step} />
		);

	}
});

module.exports = SpecProgressBar;