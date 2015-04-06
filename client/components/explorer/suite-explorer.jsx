/** @jsx React.DOM */
var React = require("react");
var Router = require('react-router');
var SpecExplorer = require('./spec-explorer');

var SuiteExplorer = React.createClass({
	mixins: [Router.State],

	getInitialState(){
		var params = this.getParams();

		return {
			
		}
	}
});

module.exports = SuiteExplorer;