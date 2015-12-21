var React = require("react");
var Router = require('react-router');
var SpecEditor = require('./spec-editor');

var SpecEditorWrapper = React.createClass({
	mixins: [Router.State],

	getInitialState(){
		var params = this.getParams();
		return {
			mode: params.mode,
			id: params.id
		}
	},

	render(){
		return (
			<SpecEditor id={this.state.id} mode={this.state.mode} />
		);
	}
});

module.exports = SpecEditorWrapper;