/** @jsx React.DOM */
var React = require("react");
var Router = require('react-router');
var SpecExplorer = require('./spec-explorer');
var Hierarchy = require('./../../lib/specs/hierarchy');

var SuiteExplorer = React.createClass({
	mixins: [Router.State],

	getInitialState(){
		var params = this.props.params || this.getParams();

		var path = params.splat;

		var suite = Hierarchy.findSuite(path);

		return {
			suite: suite
		}
	},

	render(){
		return (<SpecExplorer suite={this.state.suite} />);
	}
});

module.exports = SuiteExplorer;