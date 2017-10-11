var React = require("react");
var Postal = require('postal');
var {Button} = require('react-bootstrap');
var changes = require('./../../../lib/model/change-commands');

module.exports = function({spec}){
	var onclick = e => {
		var topic = 'mark-as-acceptance';
		if (spec.lifecycle == 'Acceptance'){
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
			>{spec.lifecycle}</Button>
	)
}
