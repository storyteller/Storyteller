var React = require("react");
var ReactDOM = require('react-dom');
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

module.exports = class BigText extends React.Component{
	constructor(){
		super();
		this.state = {value: this.props.arg.value};
	}

	handleChange(event) {
		if (!event){
			var value = ReactDOM.findDOMNode(this).innerHTML;
		}
		else {
			var value = event.target.value;
		}

		this.setState({value: value});

		this.publishChange(value);
	}

	componentWillReceiveProps(props){
		if (this.isMounted()){
			this.setState({value: props.arg.value});
		}
		
	}

	resize(e){
		AutoGrowTextArea(ReactDOM.findDOMNode(this));
	}

	publishChange(value){
		var arg = this.props.arg;

		changes.cellValue(arg.id, arg.cell.key, value);
	}

	componentWillUnmount(){
		this.subscription.unsubscribe();
	}

	componentDidMount(){
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

		this.resize();
	}

	render(){
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
}
