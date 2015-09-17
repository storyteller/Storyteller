/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var {Button} = require('react-bootstrap');
var changes = require('./../../../lib/model/change-commands');

module.exports = React.createClass({
	render: function(){
		var onclick = e => {
			var topic = 'mark-as-acceptance';
			if (this.props.spec.lifecycle == 'Acceptance'){
				topic = 'mark-as-regression'
			}

			changes.toggleLifecycle();

			e.stopPropagation();
		}

		

		return (
			<Button
				style={{marginLeft: '30px'}}
				title='Toggle the lifecycle for this specification'
				onClick={onclick}
				>{this.props.spec.lifecycle}</Button>
		)
	}
});