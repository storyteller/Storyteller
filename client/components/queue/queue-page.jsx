/** @jsx React.DOM */

var React = require("react");
var Button = require('react-bootstrap/Button');

var Hierarchy = require('./../../lib/specs/hierarchy');
var Postal = require('postal');

var CommandLink = require('./../explorer/command-link');
var icons = require('./../icons');
var SuitePath = require('./../explorer/suite-path');


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
		var divId = 'queued-spec-' + id;

		return (
			<div id={divId}>
				{icon}
				<SuitePath suite={this.props.spec.suite} linkToLeaf={true} />
				<span> / </span>
				<span className="queued-spec-name">{this.props.spec.title}</span>
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
				<h3>Execution Queue <Button id="cancel-all-specs" onClick={cancelAll}>Cancel All</Button></h3>
				{items}
			</div>

		);
	}
});

module.exports = QueuePage;