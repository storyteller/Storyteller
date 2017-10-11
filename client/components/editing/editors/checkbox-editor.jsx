var React = require("react");
var ReactDOM = require('react-dom');
var changes = require('./../../../lib/model/change-commands');
var Postal = require('postal');

module.exports = class CheckboxEditor extends React.Component{
	getInitialState() {
		var value = this.props.arg.value;
		if (value == null || value == undefined){
			value = false;
		}

		if (value == "True" || value == "true"){
			value = true;
		}

		if (value == "False" || value == "false"){
			value = false;
		}


		return {value: value};
	}

	componentWillReceiveProps(props){
		if (!this.isMounted()) return;

		var value = props.arg.value;
		if (value == null || value == undefined){
			value = false;
		}

		this.setState({value: value});
	}


	toggle(){
		var value = ReactDOM.findDOMNode(this).checked;
		this.setState({value: value});
		this.publishChange(value);
	}

	publishChange(value){
		var arg = this.props.arg;

		var cellChanged = changes.cellValue(arg.id, arg.cell.key, value);

	}

	componentWillUnmount(){
		this.subscription.unsubscribe();
	}

	componentDidMount(){
		var element = ReactDOM.findDOMNode(this);
		element.focus();

		var component = this;

		this.subscription = Postal.subscribe({
			channel: 'editor',
			topic: 'apply-changes',
			callback: (data, envelope) => {
				var value = element.checked;

				if (value != component.props.arg.value){

					component.publishChange(value);
				}
			}
		});
	}

	render(){
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
}