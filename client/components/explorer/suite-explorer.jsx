var React = require("react");
var SpecExplorer = require('./spec-explorer');
var Hierarchy = require('./../../lib/stores/hierarchy');

var SuiteExplorer = React.createClass({
	render(){
		var params = this.props.params;

		var path = params.splat;

		var suite = Hierarchy.findSuite(path);

		return (<SpecExplorer suite={suite} />);
	}
});

module.exports = SuiteExplorer;