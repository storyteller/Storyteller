var React = require("react");


var SuitePath = require('./suite-path');
var icons = require('./../icons');
var Hierarchy = require('./../../lib/stores/hierarchy');
var Postal = require('postal');

var LifecycleFilter = require('./lifecycle-filter');
var StatusFilter = require('./status-filter');
var SuiteNode = require('./suite-node');
var CommandButtons = require('./command-buttons');

var CommandWithNameEntryLink = require('./command-with-name-entry-link');




module.exports = React.createClass({

	getInitialState: function(){
		var suite = this.props.suite || Hierarchy.top();

		var total = suite.allSpecs().length;
		suite.isExpanded = true;
		if (total >= 50){
			suite.closeAll();
		}
		else {
			suite.expandAll();
		}

		return {
			suite: suite,
			status: Hierarchy.statusFilter(), 
			lifecycle: Hierarchy.lifecycleFilter()
		};
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


	buildSuiteHeader: function(){
		var suite = this.state.suite;

		var links = [];


		var title = '';
		if (suite.isHierarchy){
			title = 'All Specifications';

			var buildChildSuiteMessage = name => {
				return {
					type: 'add-suite',
					name: name,
					parent: ''
				};
			};

			var childSuiteLink = (
				<small><CommandWithNameEntryLink 
					title="Add a new Child Suite" 
					text="new suite" 
					commandText="Create" 
					toMessage={buildChildSuiteMessage}/></small>
			);

			links.push(childSuiteLink);
		}
		else {
			title = (<SuitePath suite={suite} />)
		}

		if (suite.suites.length > 0){
			var expandAll = () => {
				this.state.suite.expandAll();
				this.setState({foo: 1});
			}

			var collapseAll = () => {
				this.state.suite.closeAll();
				this.setState({foo:2});
			}

			var expandLink = (<small><a className="explorer-command" title="Expand All Suite nodes in the Tree View" onClick={expandAll}>expand all</a></small> );
			links.push(expandLink);

			var collapseLink = (<small><a className="explorer-command" title="Collapse All Suite nodes in the Tree View" onClick={collapseAll}>collapse all</a></small>);
			links.push(collapseLink);	
		}

		return(
			<h4><span id="spec-editor-header">{title}</span> 
				{links}
			</h4>
		);

	},

	render: function(){
		var summary = this.state.suite.summary();
		var filter = Hierarchy.currentFilter();
		var suite = this.state.suite;
		if (Hierarchy.hasFilter()){
			suite = this.state.suite.filter(filter);
		}

		
		var header = this.buildSuiteHeader();
		var suites = null;

		if (suite.isHierarchy){
			suites = suite.suites.map(s => {
				return (
					<SuiteNode suite={s} key={s.path} />
				);
			});
		}
		else {
			suites = [(<SuiteNode suite={suite} key={suite.path} />)];
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
