/** @jsx React.DOM */

var React = require("react");
var changes = require('./../../lib/change-commands');
var Postal = require('postal');

module.exports = React.createClass({
	getInitialState: function() {
		var value = this.props.arg.value;
		if (value == null || value == undefined){
			value = false;
		}

		return {value: value};
	},


	toggle: function(){
		var value = this.getDOMNode().checked;
		this.setState({value: value});
		this.publishChange();
	},

	publishChange: function(value){
		console.log('publishing ' + value);
		var arg = this.props.arg;

		var cellChanged = changes.cellValue(arg.id, arg.cell.key, value);

		Postal.publish({
			channel: 'editor',
			topic: 'changes',
			data: cellChanged
		});
	},

	componentWillUnmount: function(){
		this.subscription.unsubscribe();
	},

	componentDidMount: function(){
		var element = this.getDOMNode();
		element.focus();

		var component = this;

		this.subscription = Postal.subscribe({
			channel: 'editor',
			topic: 'apply-changes',
			callback: (data, envelope) => {
				console.log('I am trying to apply changes');
				var value = element.checked;

				if (value != component.props.arg.value){

					component.publishChange(value);
				}
			}
		});
	},

	render: function(){
		var className = 'cell active-cell mousetrap';
		if (this.props.classes){
			className = className + " " + this.props.classes;
		}

		var value = (this.state.value.toString().toLowerCase() == 'true');

		if (value){
			return (
			<input 
				type="checkbox" 
				checked
				value={this.state.value} 
				onChange={this.toggle} 
				tabIndex="0" 
				className={className}
				data-cell={this.props.arg.cell.key}/>
				);
		}

		return (
			<input 
				type="checkbox" 
				value={this.state.value} 
				onChange={this.toggle} 
				tabIndex="0" 
				className={className}
				data-cell={this.props.arg.cell.key}/>
		);
	}
});