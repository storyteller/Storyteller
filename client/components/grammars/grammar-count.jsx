/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var Hierarchy = require('./../../lib/stores/hierarchy');

var Button = require('react-bootstrap/Button');
var Badge = require('react-bootstrap/Badge');


var getCount = function(){
	return Hierarchy.errorCount();
}


var GrammarCount = React.createClass({
	getInitialState: function(){
		return {
			count: getCount()
		}
	},

	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'explorer',
			topic: 'fixtures-loaded',
			callback: function(data, envelope){
				self.setState({
					count: getCount()
				});
			}
		});
		

	},

	render: function(){
		if (this.state.count == 0)
		{
			return null;
		}

		var onclick = function(){
			window.location = '#/grammar-errors'
		}

		return (
			<Button id="grammar-error-count" bsStyle="link" onClick={onclick}><Badge>{this.state.count}</Badge> grammar errors</Button>

		);
	}
});

module.exports = GrammarCount;