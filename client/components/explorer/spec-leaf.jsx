/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var icons = require('./../icons');

var CommandLink = require('./command-link');
var CommandWithNameEntryLink = require('./command-with-name-entry-link');

var SpecLeaf = React.createClass({
	cloneLink: function(){
		var toMessage = name => {return {type: 'clone-spec', id: this.props.spec.id, name: name}};

		return (
			<CommandWithNameEntryLink 
				title="Clone a Specification" 
				text="clone" 
				commandText="Clone" 
				toMessage={toMessage}/>
		);
	},

	render: function(){
		var onclick = e => {
			if (e.shiftKey){
				alert('I was shift clicked');
			}

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
				<a href={href} className={clazz}>{this.props.spec.name}</a>
				{link}{this.cloneLink()}
			</div>
		);
	}
});

module.exports = SpecLeaf;