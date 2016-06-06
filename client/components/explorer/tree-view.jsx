var React = require("react");


var SuitePath = require('./suite-path');
var icons = require('./../icons');

var LifecycleFilter = require('./lifecycle-filter');
var StatusFilter = require('./status-filter');
var SuiteNode = require('./suite-node');
var CommandButtons = require('./command-buttons');

var CommandWithNameEntryLink = require('./command-with-name-entry-link');



function SuiteHeader({suite, dispatch, }){
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
            <small key="child-suite"><CommandWithNameEntryLink 
                title="Add a new Child Suite" 
                text="new suite" 
                commandText="Create" 
                toMessage={buildChildSuiteMessage}/></small>
        );

        links.push(childSuiteLink);
    }
    else {
        title = (<SuitePath suite={suite.path} linkToLeaf={false}/>)
    }

    if (suite.suites.length > 0){
        var expandAll = () => dispatch({type: 'expand-all'});

        var collapseAll = () => {
            dispatch({type: 'collapse-all'});
        };

        var expandLink = (<small key="expand"><a id="expand-all" className="explorer-command" title="Expand All Suite nodes in the Tree View" onClick={expandAll}>expand all</a></small> );
        links.push(expandLink);

        var collapseLink = (<small key="collapse"><a id="collapse-all" className="explorer-command" title="Collapse All Suite nodes in the Tree View" onClick={collapseAll}>collapse all</a></small>);
        links.push(collapseLink);	
    }

    return(
        <h4><span id="spec-editor-header">{title}</span> 
            {links}
        </h4>
    );
}

var filterSuite = require('./../../lib/filter-suite');

module.exports = function TreeView(props){
    var suite = props.suite;
    var top = suite;

    suite = filterSuite(top, props.specs, props.status, props.lifecycle);
    
    var summary = top.summary(props.specs);

    var suites = null;
    if (suite.isHierarchy){
        suites = suite.suites.map(s => {
            return (
                <SuiteNode suite={s} key={s.path} specs={props.specs} treeState={props.treeState} dispatch={props.dispatch} running={props.running} queued={props.queued} progress={props.progress} />
            );
        });
    }
    else {
        suites = [(<SuiteNode suite={suite} key={suite.path} specs={props.specs} treeState={props.treeState} dispatch={props.dispatch} running={props.running} queued={props.queued} progress={props.progress}/>)];
    }

    if (suites.length == 0){
        suites = (
            <div id="no-matching-specs">No matching specifications.</div>
        );
    }



    
    return (
        
        <div className="row">
            <div className="col-md-2 explorer-controls">
                <CommandButtons hierarchy={props.suite}/>
                <br />
                <br />
                <h5>Filter by Status</h5>
                <StatusFilter summary={summary} status={props.status} dispatch={props.dispatch}/>
                <br />
                <br />
                <h5>Filter by Lifecycle</h5>
                <LifecycleFilter summary={summary} lifecycle={props.lifecycle} dispatch={props.dispatch}/>

            </div>
            <div className="col-md-10">
                <SuiteHeader suite={suite} dispatch={props.dispatch} {...props}/>
                {suites}
            </div>
        </div>
        
    );
}
