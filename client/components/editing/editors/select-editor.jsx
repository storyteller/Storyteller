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
		var element = ReactDOM.findDOMNode(this);
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
		var className = 'cell active-cell mousetrap';
		if (this.props.classes){
			className = className + " " + this.props.classes;
		}

		var value = this.state.value;

        var i = 0;
		var options = this.props.arg.cell.options.map(function(x){
			return ( 
				<option key={++i} value={x.value}>{x.display}</option> 
			);
		});

		return (
			<select 
				type="text" 
                defaultValue={value}
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