/** @jsx React.DOM */

var React = require("react");



var icons = require('./../icons');
var Hierarchy = require('./../../lib/specs/hierarchy');
var Postal = require('postal');

var LifecycleFilter = require('./lifecycle-filter');
var StatusFilter = require('./status-filter');
var SuiteNode = require('./suite-node');
var CommandButtons = require('./command-buttons');

var CommandWithNameEntryLink = require('./command-with-name-entry-link');




module.exports = React.createClass({

	getInitialState: function(){
		// Going to change

		return {
			suite: this.props.suite || Hierarchy.top(),
			status: Hierarchy.statusFilter(), 
			lifecycle: Hierarchy.lifecycleFilter()
		}
	},

	componentDidMount: function(){
		var explorer = this;

		this.subscription = Postal.subscribe({
			channel: 'explorer',
			topic: 'hierarchy-updated',
			callback: () => explorer.setState(this.getInitialState())
		});
	},

	componentWillUnmount: function(){
		this.subscription.unsubscribe();
	},

	buildAllSpecificationHeader: function(){
		var buildChildSuiteMessage = name => {
			return {
				type: 'add-suite',
				name: name,
				parent: ''
			};
		};

		var childSuiteLink = (
			<CommandWithNameEntryLink 
				title="Add a new Child Suite" 
				text="new suite" 
				commandText="Create" 
				toMessage={buildChildSuiteMessage}/>
		);

		return(
			<h4><span id="spec-editor-header">All Specifications</span> <small>{childSuiteLink}</small></h4>
		);
	},

	render: function(){
		var summary = this.state.suite.summary();
		var filter = Hierarchy.currentFilter();
		var suite = this.state.suite.filter(filter);

		
		
		var header = null;
		var suites = null;

		if (suite.isHierarchy){
			header = this.buildAllSpecificationHeader();
			suites = suite.suites.map(s => {
				return (
					<SuiteNode suite={s} />
				);
			});
		}
		else {
			// TODO -- fancier later
			var title = 'Suite: ' + suite.path;

			header = (
				<h4><span id="spec-editor-header">{title}</span></h4>
			);

			suites = [(<SuiteNode suite={suite} />)];
		}

		if (suites.length == 0){
			suites = (
				<div id="no-matching-specs">No matching specifications.</div>
			);
		}



		return (

			<div className="row">
				<div className="col-md-2 explorer-controls">
					<CommandButtons hierarchy={this.state.suite}/>
					<br />
					<br />
					<h5>Filter by Status</h5>
					<StatusFilter summary={summary} status={this.state.status}/>
					<br />
					<br />
					<h5>Filter by Lifecycle</h5>
					<LifecycleFilter summary={summary} lifecycle={this.state.lifecycle}/>

				</div>
				<div className="col-md-10">
					{header}
					{suites}
				</div>
			</div>

		);
	}

});