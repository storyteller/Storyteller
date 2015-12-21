var React = require("react");
var {Badge, Button} = require('react-bootstrap');
var Hierarchy = require('./../../lib/stores/hierarchy');
var Postal = require('postal');



var getCount = function(){
	return Hierarchy.queuedSpecs().length;
}

var QueueCount = React.createClass({
	getInitialState: function(){
		return {count: getCount()};
	},

	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'explorer',
			topic: 'queue-updated',
			callback: function(data, envelope){
				self.setState({
					count: getCount()
				});
			}
		});

	},

	render: function(){
		if (this.state.count == 0){
			return ( <span></span> );
		}

		var onclick = function(){
			window.location = '#/queue';
		}

		return (
			<Button bsStyle="link" onClick={onclick}><Badge>{this.state.count}</Badge> Specs queued</Button>
		);
	}
});

module.exports = QueueCount;