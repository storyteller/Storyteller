var React = require("react");
var ReactDOM = require('react-dom');
var changes = require('./../../../lib/model/change-commands');
var Postal = require('postal');

class SpecTitleEditor extends React.Component{
	componentDidMount(){
		var element = ReactDOM.findDOMNode(this);
		element.focus();

		if (this.props.title){
			element.setSelectionRange(0, this.props.title.length);
		}
	}

	render(){
		var size = this.props.title.length;

		return (
			<input onBlur={this.props.exit} onChange={this.props.handleChange} type="text" size={size} value={this.props.title} />
		);
	}
}

class SpecTitle extends React.Component{
	getInitialState(){
		return {
			editing: false
		}
	}

	handleChange(event) {
		if (!event){
			var title = ReactDOM.findDOMNode(this).getAttribute('value');
		}
		else {
			var title = event.target.value;
		}

		this.publishChange(title);
	}

	publishChange(value){
		changes.rename(value);
	}


	render(){

		if (this.state.editing){
			var lostfocus = e => {
				this.setState({
					editing: false
				});
			}

			return (<SpecTitleEditor title={this.props.spec.title} handleChange={this.handleChange} exit={lostfocus} />)
		}

		var edit = e => {
			this.setState({
				editing: true
			});

			e.stopPropagation();
		}

		return (<span onClick={edit} title="Click to edit the Specification title">{this.props.spec.title}</span>);
	}
}

module.exports = SpecTitle;