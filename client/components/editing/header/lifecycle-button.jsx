/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var {Button} = require('react-bootstrap');

module.exports = React.createClass({
	render: function(){
		var onclick = e => {
			var topic = 'mark-as-acceptance';
			if (this.props.spec.lifecycle == 'Acceptance'){
				topic = 'mark-as-regression'
			}

			Postal.publish({
				channel: 'engine-request',
				topic: topic,
				data: {list: [this.props.spec.id]}
			});

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