/** @jsx React.DOM */

var React = require("react");

var Button = require('react-bootstrap/Button');
var ButtonGroup = require('react-bootstrap/ButtonGroup');
var Postal = require('postal');
var Hierarchy = require('./../../lib/stores/hierarchy');
var changes = require('./../../lib/model/change-commands');


var CommandButton = React.createClass({
	render: function(){
		var onclick = e => {
			var specs = this.props.hierarchy.filter(Hierarchy.currentFilter()).allSpecs();

			var heads = _.filter(specs, x => x.mode == 'header');
			var fulls = _.filter(specs, x => x.mode == 'full')

			if (this.props.topic == 'run-specs'){
				fulls.forEach(spec => {
					Hierarchy.runSpec(spec);
				});

				Postal.publish({
					channel: 'engine-request',
					topic: 'run-specs',
					data: {
						list: heads.map(x => x.id)
					}
				});
			}
			else if (this.props.topic == 'mark-as-acceptance'){
				_.filter(fulls, x => x.lifecycle == 'Regression').forEach(spec => {
					spec.apply(changes.toggleLifecycle());
				});

				var ids = _.filter(heads, x => x.lifecycle == 'Regression')
					.map(x => x.id);

				if (ids.length > 0){
					Postal.publish({
						channel: 'engine-request',
						topic: 'mark-as-acceptance',
						data: {list: ids}
					});
				}

				Postal.publish({
					channel: 'explorer',
					topic: 'hierarchy-updated',
					data: {}
				});
			}
			else if (this.props.topic == 'mark-as-regression'){
				_.filter(fulls, x => x.lifecycle == 'Acceptance').forEach(spec => {
					spec.apply(changes.toggleLifecycle());
				});

				var ids = _.filter(heads, x => x.lifecycle == 'Acceptance')
					.map(x => x.id);

				if (ids.length > 0){
					Postal.publish({
						channel: 'engine-request',
						topic: 'mark-as-regression',
						data: {list: ids}
					});
				}

				Postal.publish({
					channel: 'explorer',
					topic: 'hierarchy-updated',
					data: {}
				});
			}


			e.preventDefault();
		}

		return (
			<Button onClick={onclick}>{this.props.children}</Button>
		);
	}
});

var CommandButtons = React.createClass({
	render: function(){
		var hierarchy = this.props.hierarchy;

		return (
		    <ButtonGroup vertical>
		      <CommandButton hierarchy={this.props.hierarchy} topic="run-specs">Run All</CommandButton>
		      <CommandButton hierarchy={this.props.hierarchy} topic="mark-as-acceptance">Mark as Acceptance</CommandButton>
		      <CommandButton hierarchy={this.props.hierarchy} topic="mark-as-regression">Mark as Regression</CommandButton>
		    </ButtonGroup>
		);
	}
});

module.exports = CommandButtons;