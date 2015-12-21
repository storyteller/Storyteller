var React = require('react');
var ArrayList = require('./../../lib/array-list');

var SuiteLink = React.createClass({
	render(){
		var href = "#/suite/" + this.props.suite.path;

		return (<a href={href}>{this.props.suite.name}</a>);
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
			var link = (<SuiteLink suite={suite} />);
			items.insertFirst(link);
		}
		else {
			var span = (<span>{suite.name}</span>)
			items.insertFirst(span);
		}

		var s = suite.parent;
		while (s && !s.isHierarchy){
			var spacer = (<span> / </span>);
			items.insertFirst(spacer);

			var link = (<SuiteLink suite={s} />);
			items.insertFirst(link);

			s = s.parent;


		}


		return (<span>{items}</span>);
	}
});

module.exports = SuitePath;