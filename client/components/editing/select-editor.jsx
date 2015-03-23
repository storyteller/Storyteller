/** @jsx React.DOM */


var React = require("react");
var changes = require('./../../lib/change-commands');
var Postal = require('postal');


module.exports = React.createClass({
	getInitialState: function() {
		return {value: this.props.arg.value};
	},

	handleChange: function(event) {
		if (!event){
			var value = this.getDOMNode.getAttribute('value');
		}
		else {
			var value = event.target.value;
		}

		this.setState({value: value});

		this.publishChange();
	},	

	publishChange: function(value){
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
			callback: function(data, envelope){
				var value = element.value;

				if (value != component.props.arg.value){
					component.publishChange(value);
				}
			}
		});
	},

	render: function(){
		var className = 'cell active-cell';
		if (this.props.classes){
			className = className + " " + this.props.classes;
		}

		var value = this.state.value;

		var options = this.props.arg.cell.options.map(function(x){
			var selected = (x.value == value);

			return ( 
				<option selected={selected} value={x.value}>{x.display}</option> 
			);
		});

		return (
			<select 
				type="text" 
				value={this.state.value} 
				onChange={this.handleChange} 
				tabIndex="0" 
				className={className}
				data-cell={this.props.arg.cell.key}>
				{options}
			</select>
		);
	}
});