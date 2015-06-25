/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var Hierarchy = require('./../../lib/stores/hierarchy');
var Icons = require('./../icons');
var {Button} = require('react-bootstrap');

var UnsavedChanges = React.createClass({
	getInitialState: function(){
		return {
			hasUnsavedChanges: Hierarchy.hasUnsavedChanges()
		};
	},

	updateData: function(){
		this.setState({
			hasUnsavedChanges: Hierarchy.hasUnsavedChanges()
		});
	},

	componentDidMount: function(){
		Postal.subscribe({
			channel: 'editor',
			topic: '*',
			callback: data => this.updateData()
		});

		Postal.subscribe({
			channel: 'explorer',
			topic: '*',
			callback: data => this.updateData()
		});
	},

	render: function(){
		if (!this.state.hasUnsavedChanges) return null;

		var SaveIcon = Icons['save'];

		var onClick = e => {
			var dirtys = _.filter(Hierarchy.allSpecs(), x => x.isDirty());

			dirtys.forEach(spec => {
				Hierarchy.saveSpecData(spec);
			});

			e.preventDefault();
		};

		return (
			<Button bsStyle="link" onClick={onClick} title="Click to save all specifications with unsaved changes"><SaveIcon />Save All Changes</Button>
		);
	}


});

module.exports = UnsavedChanges;