/** @jsx React.DOM */

var React = require("react");
var changes = require('./../../../lib/model/change-commands');
var Postal = require('postal');

function AutoGrowTextArea(textField)
{
  if (textField.clientHeight < textField.scrollHeight)
  {
    textField.style.height = textField.scrollHeight + "px";
    if (textField.clientHeight < textField.scrollHeight)
    {
      textField.style.height = 
        (textField.scrollHeight * 2 - textField.clientHeight) + "px";
    }
  }
}

module.exports = React.createClass({
	getInitialState: function() {
		return {value: this.props.arg.value};
	},

	handleChange: function(event) {
		if (!event){
			var value = this.getDOMNode.innerHTML;
		}
		else {
			var value = event.target.value;
		}

		this.setState({value: value});

		this.publishChange(value);
	},	

	resize: function(e){
		AutoGrowTextArea(this.getDOMNode());
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

		if (this.state.value){
			element.setSelectionRange(0, this.state.value.length);
		}
		

		this.subscription = Postal.subscribe({
			channel: 'editor',
			topic: 'apply-changes',
			callback: (data, envelope) => {
				var value = this.getDOMNode().value;
				if (value != this.state.value){
					this.publishChange(value);
				}
			}
		});

		this.resize();


	},

	render: function(){
		var className = 'cell active-cell mousetrap';
		if (this.props.classes){
			className = className + " " + this.props.classes;
		}


		var length = (this.state.value || 0);
		var rows = Math.ceil(length / 50) + 1;

		

		return (
			<textarea 
				cols={50}
				placeholder={this.props.arg.cell.key}
				onKeyPress={this.resize}
				onChange={this.handleChange} 
				tabIndex="0" 
				className={className}
				value={this.state.value}
				data-cell={this.props.arg.cell.key}></textarea>
		);
	}
});
