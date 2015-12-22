var React = require("react");
var SpecEditor = require('./spec-editor');

var SpecEditorWrapper = React.createClass({
	render(){
		return (
			<SpecEditor id={this.props.params.id} mode={this.props.params.mode} />
		);
	}
});

module.exports = SpecEditorWrapper;