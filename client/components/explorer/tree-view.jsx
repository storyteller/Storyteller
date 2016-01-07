var React = require("react");


var SuitePath = require('./suite-path');
var icons = require('./../icons');

var LifecycleFilter = require('./lifecycle-filter');
var StatusFilter = require('./status-filter');
var SuiteNode = require('./suite-node');
var CommandButtons = require('./command-buttons');

var CommandWithNameEntryLink = require('./command-with-name-entry-link');

/*
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

*/


module.exports = function TreeView(props){
    /*
                {header}
                {suites}
    */
    var summary = props.suite.summary(props.specs);
    
    return (
        
        <div className="row">
            <div className="col-md-2 explorer-controls">
                <CommandButtons hierarchy={props.suite}/>
                <br />
                <br />
                <h5>Filter by Status</h5>
                <StatusFilter summary={summary} status={props.status}/>
                <br />
                <br />
                <h5>Filter by Lifecycle</h5>
                <LifecycleFilter summary={summary} lifecycle={props.lifecycle}/>

            </div>
            <div className="col-md-10">
                <h1>Nothing yet</h1>
            </div>
        </div>
        
    );
}
