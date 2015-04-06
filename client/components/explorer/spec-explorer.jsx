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

var fetchData = function(){
	return {
		status: Hierarchy.statusFilter(), 
		lifecycle: Hierarchy.lifecycleFilter(),
		top: Hierarchy.filteredHierarchy()
	};
}



module.exports = React.createClass({
	getInitialState: function(){
		return fetchData();
	},

	componentDidMount: function(){
		var explorer = this;

		this.subscription = Postal.subscribe({
			channel: 'explorer',
			topic: 'hierarchy-updated',
			callback: () => explorer.setState(fetchData())
		});
	},

	componentWillUnmount: function(){
		this.subscription.unsubscribe();
	},

	render: function(){
		var summary = this.state.top.summary();

		var suites = this.state.top.suites.map(s => {
			return (
				<SuiteNode suite={s} />
			);
		});

		if (suites.length == 0){
			suites = (
				<div>No matching specifications.</div>
			);
		}

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

		return (

			<div className="row">
				<div className="col-md-2 explorer-controls">
					<CommandButtons hierarchy={this.state.top}/>
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
					<h4>All Specifications <small>{childSuiteLink}</small></h4>
					{suites}
				</div>
			</div>

		);
	}

});