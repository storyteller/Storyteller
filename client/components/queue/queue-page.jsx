/** @jsx React.DOM */

var React = require("react");
var Button = require('react-bootstrap/Button');

var Hierarchy = require('./../../lib/specs/hierarchy');
var Postal = require('postal');

var CommandLink = require('./../explorer/command-link');
var icons = require('./../icons');


var cancelAll = e => {
	Postal.publish({
		channel: 'engine-request',
		topic: 'cancel-all-specs', 
		data: {type: 'cancel-all-specs'}
	});

	e.preventDefault();
}

var QueueItem = React.createClass({

	render: function(){
		var id = this.props.spec.id;

		var createMessage = function(){
			return {type: 'cancel-spec', id: id};
		}

		var icon = icons[this.props.spec.icon()]({});

		return (
			<div>
				{icon}
				<span>{this.props.spec.name}</span>
				<CommandLink createMessage={createMessage} text="cancel" />
			</div>
		);
	}
});

var QueuePage = React.createClass({
	getInitialState: function(){
		return {queue: Hierarchy.queuedSpecs()};
	},

	componentDidMount: function(){
		var self = this;

		this.subscription = Postal.subscribe({
			channel: 'explorer',
			topic: 'queue-updated',
			callback: function(data, envelope){
				self.setState({
					queue: Hierarchy.queuedSpecs()
				});
			}
		});

	},

	 componentWillUnmount : function(){
		this.subscription.unsubscribe();
	},

	render: function(){
		var items = this.state.queue.map(spec => {
			return (
				<QueueItem spec={spec} />
			);
		});

		return (
			<div>
				<h3>Execution Queue <Button onClick={cancelAll}>Cancel All</Button></h3>
				{items}
			</div>

		);
	}
});

module.exports = QueuePage;