/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var icons = require('./../icons');

var CommandLink = require('./command-link');
var CommandWithNameEntryLink = require('./command-with-name-entry-link');
var DeleteLink = require('./delete-link');
var _ = require('lodash');

var toCloneText = (text) => {
	if (_.endsWith(text, ' Copy')) {
		return text + ' 1';
	}
	else if (_.contains(text, ' Copy ')) {
		return text.replace(/Copy \d+/, function (attr) { return attr.replace(/\d+/, function(n) { return ++n; }); });
	}
	else {
		return text + ' Copy';
	}
}

var SpecLeaf = React.createClass({
	cloneLink: function(){
		var toMessage = name => {return {type: 'clone-spec', id: this.props.spec.id, name: name}};
		var defaultValue = toCloneText(this.props.spec.title);

		return (
			<CommandWithNameEntryLink 
				title="Clone a Specification" 
				text="clone" 
				commandText="Clone" 
				toMessage={toMessage}
				value={defaultValue} />
		);
	},

	render: function(){
		var onclick = e => {

			e.preventDefault();
		}


		var icon = icons[this.props.spec.icon()]({});

		var clazz = 'spec-name spec-state-' + this.props.spec.state;

		var spec = this.props.spec;



		var link = null;
		if (spec.state == 'none'){
			var buildMessage = () => {return {type: 'run-spec', id: spec.id}};

			link = (<CommandLink identifier="run" createMessage={buildMessage} text="run" />);
		}

		var href = '#/spec/editing/' + spec.id;
		if (spec.hasResults()){
			href = '#/spec/results/' + spec.id;
		}

		return (
			<div className="spec-leaf">
				{icon}
				<a href={href} className={clazz}>{this.props.spec.title}</a>
				{link}{this.cloneLink()}
				<DeleteLink spec={this.props.spec}/>
			</div>
		);
	}
});

module.exports = SpecLeaf;
