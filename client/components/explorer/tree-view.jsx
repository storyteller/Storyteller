var React = require("react");


var SuitePath = require('./suite-path');
var icons = require('./../icons');

var LifecycleFilter = require('./lifecycle-filter');
var StatusFilter = require('./status-filter');
var SuiteNode = require('./suite-node');
var CommandButtons = require('./command-buttons');

var CommandWithNameEntryLink = require('./command-with-name-entry-link');

var alwaysTrue = x => true;

function toLifecycleFilter(lifecycle){
  if (lifecycle == 'any') return alwaysTrue;

  if (lifecycle == 'Regression'){
    return spec => spec.lifecycle == 'Regression';
  }

  if (lifecycle == 'Acceptance'){
    return spec => spec.lifecycle == 'Acceptance';
  }
}

function toStatusFilter(status){
  if (status == 'any') {
    return alwaysTrue;
  }
  
  return spec => spec.status == status;
}


function SuiteHeader(props){
    var suite = props.suite;

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
        title = (<SuitePath suite={suite} />)
    }

    if (suite.suites.length > 0){
        var expandAll = () => props.dispatch({type: 'expand-all'});

        var collapseAll = () => props.dispatch({type: 'collapse-all'});

        var expandLink = (<small key="expand"><a className="explorer-command" title="Expand All Suite nodes in the Tree View" onClick={expandAll}>expand all</a></small> );
        links.push(expandLink);

        var collapseLink = (<small key="collapse"><a className="explorer-command" title="Collapse All Suite nodes in the Tree View" onClick={collapseAll}>collapse all</a></small>);
        links.push(collapseLink);	
    }

    return(
        <h4><span id="spec-editor-header">{title}</span> 
            {links}
        </h4>
    );
}

module.exports = function TreeView(props){
    var suite = props.suite;
    var top = suite;
    
    if (props.status != 'any' || props.lifecycle != 'any'){
        var lifecycleFilter = toLifecycleFilter(props.lifecycle);
        var statusFilter = toStatusFilter(props.status);

        var filter = spec => lifecycleFilter(spec) && statusFilter(spec);
        suite = suite.filter(filter, props.specs);
    }
    
    var summary = top.summary(props.specs);

    var suites = null;

    // TODO -- pull this out.
    if (suite.isHierarchy){
        suites = suite.suites.map(s => {
            return (
                <SuiteNode suite={s} key={s.path} specs={props.specs} treeState={props.treeState} dispatch={props.dispatch} />
            );
        });
    }
    else {
        suites = [(<SuiteNode suite={suite} key={suite.path} specs={props.specs} treeState={props.treeState} dispatch={props.dispatch} />)];
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
                <SuiteHeader suite={suite} dispatch={props.dispatch}/>
                {suites}
            </div>
        </div>
        
    );
}
