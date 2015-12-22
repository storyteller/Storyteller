var React = require("react");
var ReactDOM = require('react-dom');
var changes = require('./../../../lib/model/change-commands');
var Postal = require('postal');


module.exports = React.createClass({
	getInitialState: function() {
		return {value: this.props.arg.value};
	},

	componentWillReceiveProps: function(props){
		if (!this.isMounted()) return;
		this.setState({value: props.arg.value});
	},

	handleChange: function(event) {
		if (!event){
			var value = ReactDOM.findDOMNode(this).getAttribute('value');
		}
		else {
			var value = event.target.value;
		}

		this.setState({value: value});

		this.publishChange(value);
	},	

	publishChange: function(value){
		var arg = this.props.arg;

		changes.cellValue(arg.id, arg.cell.key, value);
	},

	componentWillUnmount: function(){
		this.subscription.unsubscribe();
	},

	componentDidMount: function(){
		var element = ReactDOM.findDOMNode(this);
		element.focus();

		if (this.state.value){
			element.setSelectionRange(0, this.state.value.length);
		}

		this.subscription = Postal.subscribe({
			channel: 'editor',
			topic: 'apply-changes',
			callback: (data, envelope) => {
				var value = ReactDOM.findDOMNode(this).value;
				if (value != this.state.value){
					this.publishChange(value);
				}
			}
		});
	},

	render: function(){
		var className = 'cell active-cell mousetrap';
		if (this.props.classes){
			className = className + " " + this.props.classes;
		}

		var size = 5;
		if (this.state.value && this.state.value.length > 5){
			size = this.state.value.length;
		}
		

		return (
			<input 
				type="text" 
				size={size}
				placeholder={this.props.arg.cell.key}
				value={this.state.value} 
				onChange={this.handleChange} 
				tabIndex="0" 
				className={className}
				data-cell={this.props.arg.cell.key}/>
		);
	}
});
