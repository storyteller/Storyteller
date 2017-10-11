var React = require("react");
var ReactDOM = require('react-dom');
var changes = require('./../../../lib/model/change-commands');
var Postal = require('postal');


module.exports = class TextboxEditor extends React.Component{
	getInitialState() {
		return {value: this.props.arg.value};
	}

	componentWillReceiveProps(props){
		if (!this.isMounted()) return;
		this.setState({value: props.arg.value});
	}

	handleChange(event) {
		if (!event){
			var value = ReactDOM.findDOMNode(this).getAttribute('value');
		}
		else {
			var value = event.target.value;
		}

		this.setState({value: value});

		this.publishChange(value);
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
            if (this.props.arg.changed){
                element.setSelectionRange(this.state.value.length, this.state.value.length);
            }
            else {
                element.setSelectionRange(0, this.state.value.length);
            }
			
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
	}

	render(){
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
}
