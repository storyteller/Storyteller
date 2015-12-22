var React = require('react');
var ArrayList = require('./../../lib/array-list');
var uuid = require('node-uuid');

var SuiteLink = React.createClass({
	render(){
		var href = "#/suite/" + this.props.suite.path;

		return (<a key={this.props.suite.path} href={href}>{this.props.suite.name}</a>);
	}
});

var SuitePath = React.createClass({
	render(){
		var suite = this.props.suite;
		if (!suite){
			return null;
		}

		if (suite.isHierarchy){
			return null;
		}

		var items = new ArrayList();
		if (this.props.linkToLeaf){
			var link = (<SuiteLink key={suite.path} suite={suite} />);
			items.insertFirst(link);
		}
		else {
			var span = (<span key={suite.path}>{suite.name}</span>)
			items.insertFirst(span);
		}

		var s = suite.parent;
		while (s && !s.isHierarchy){
			var spacer = (<span key={uuid.v4()}> / </span>);
			items.insertFirst(spacer);

			var link = (<SuiteLink key={suite.path} suite={s} />);
			items.insertFirst(link);

			s = s.parent;


		}


		return (<span>{items}</span>);
	}
});

module.exports = SuitePath;