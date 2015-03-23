/** @jsx React.DOM */

var React = require("react");
var SpecLeaf = require('./spec-leaf');

var icons = require('./../icons');

var CommandLink = require('./command-link');

var FolderOpen = icons['folder-open'];
var FolderClosed = icons['folder-closed'];
var CommandWithNameEntryLink = require('./command-with-name-entry-link');

var SuiteHeader = React.createClass({
	makeNewSuiteLink: function(){
		var self = this;

		var toMessage = name => {
			return {
				type: 'add-suite',
				name: name,
				parent: self.props.suite.path
			};
		}

		var title = "Add a new Child Suite to " + self.props.suite.path;

		return (
			<CommandWithNameEntryLink 
				title={title}
				text="new child suite" 
				commandText="Create" 
				toMessage={toMessage}/>
		);
	},

	makeNewSpecLink: function(){
		var self = this;

		var toMessage = function(name){
			return {
				type: 'add-spec',
				name: name,
				parent: self.props.suite.path
			};
		}

		var title = "Add a new Specification to " + self.props.suite.path;

		return (
			<CommandWithNameEntryLink 
				title={title}
				text="new spec" 
				commandText="Create" 
				toMessage={toMessage}/>
		);
	},

	render: function(){
		var suite = this.props.suite;

		var buildMessage = function(){
			var list = suite.allSpecs().map(spec => spec.id);

			return {type: 'run-specs', list: list};
		}

		return (
			<div className="suite-header">
				<FolderOpen />
				{this.props.suite.name}
				<CommandLink createMessage={buildMessage} text="run all" />
				{this.makeNewSpecLink()}
				{this.makeNewSuiteLink()}
			</div>

		);
	}
});

var SuiteBody = React.createClass({
	render: function(){

		var childSuites = this.props.suite.suites.map(suite => (<SuiteNode suite={suite} />) );

		var specs = this.props.suite.specs.map(spec => (<SpecLeaf spec={spec} />) );

		return (
			<div className="suite-body">
				{childSuites}
				{specs}
			</div>
		);


	}
});

var SuiteNode = React.createClass({
	render: function(){
		return (
			<div>
				<SuiteHeader suite={this.props.suite} />
				<SuiteBody suite={this.props.suite} />
			</div>
		);
	}
});

module.exports = SuiteNode;