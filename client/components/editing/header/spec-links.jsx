/** @jsx React.DOM */

var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');

var LinkButton = React.createClass({
	render: function(){
		var onclick = e => {
			window.location = this.props.href;
			e.stopPropagation();
		}

		return (<Button onClick={onclick}>{this.props.text}</Button>);
	}
});

var SpecLinks = React.createClass({
	buildLinks(){
		var links = [];
		if (this.props.mode != 'editing'){
			var elem = (<LinkButton href={'#/spec/editing/' + this.props.id} text="Editor"/>);
			links.push(elem);
		}

		if (this.props.mode != 'preview'){
			var elem = (<LinkButton href={'#/spec/preview/' + this.props.id} text="Preview"/>);
			links.push(elem);
		}

		if (this.props.mode != 'results'){
			var elem = (<LinkButton href={'#/spec/results/' + this.props.id} text="Results" />);
			links.push(elem);
		}

		return links;
	},

	render(){
		var links = this.buildLinks();

		return (
			<ButtonGroup>
				{links}
			</ButtonGroup>
		);
	}
});

module.exports = SpecLinks;