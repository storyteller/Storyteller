'use strict';

var React = require('react');
var SpecLeaf = require('./spec-leaf');

var icons = require('./../icons');

var CommandLink = require('./command-link');

var FolderOpen = icons['folder-open'];
var FolderClosed = icons['folder-closed'];
var CommandWithNameEntryLink = require('./command-with-name-entry-link');
var SuitePath = require('./suite-path');

function NewSpecLink(props){
    var toMessage = function(name){
        return {
            type: 'add-spec',
            name: name,
            parent: props.suite.path
        };
    };

    var title = 'Add a new Specification to ' + props.suite.path;

    return (
        <CommandWithNameEntryLink
            title={title}
            text='new spec'
            commandText='Create'
            toMessage={toMessage}/>
    );
}

function NewSuiteLink(props){
    var toMessage = name => {
        return {
            type: 'add-suite',
            name: name,
            parent: props.suite.path
        };
    };

    var title = 'Add a new Child Suite to ' + props.suite.path;

    return (
        <CommandWithNameEntryLink
            title={title}
            text='new child suite'
            commandText='Create'
            toMessage={toMessage}/>
    );
}

function SuiteHeader(props){
    var suite = props.suite;

    var buildMessage = function(){
        var list = suite.allSpecs();

        return {type: 'run-specs', list: list};
    };

    var count = suite.allSpecs().length;

    var href = '#/suite/' + suite.path;
    

    var openClosed = props.expanded ? <FolderOpen /> : <FolderClosed />;
    var openClass = props.expanded ? 'open' : 'closed';

    var Icon = icons[suite.icon(props.specs, props.running, props.queued, props.progress)];
    var icon = (<Icon />);
    
    var toggle = e => {
        props.dispatch({type:'toggle-tree-state', path: suite.path});
        e.preventDefault();
    }

    return (
        <div key={suite.path} className={openClass + ' suite-header'}>
            <a href='#' onClick={toggle}>
                {openClosed}
            </a>
            {icon}
            <a href={href} className='suite-name'>{props.suite.name}</a> ({count}) 
            <CommandLink createMessage={buildMessage} text='run all' />
            <NewSpecLink {...props} />
            <NewSuiteLink {...props} />
        </div>

    );
}

function SuiteBody(props){
    var suites = _.sortBy(props.suite.suites, x => x.name);
    var childSuites = suites.map(suite => (<SuiteNode suite={suite} key={suite.path} specs={props.specs} treeState={props.treeState} dispatch={props.dispatch} />) );
    
    var specs = props.suite.specs.map(x => props.specs.get(x));
    
    
    var specLeaves = _.sortBy(specs, x => x.title).map(x => (<SpecLeaf spec={x} key={x.id} />) );

    return (
        <div id={props.suite.path} className='suite-body' >
            {childSuites}
            {specLeaves}
        </div>
    );
}

function isExpanded(props){
    if (!props.treeState.has(props.suite.path)) return true;
    
    return props.treeState.get(props.suite.path);
}

function SuiteNode(props){
    var body = null;


    var expanded = false;
    if (isExpanded(props)){
        body = (<SuiteBody {...props} />);
        expanded = true;
    }

    var toggle = e => props.dispatch({type: 'toggle-tree-state', path: props.suite.path});

    return (
        <div className='suite-node'>
            <SuiteHeader {...props} toggle={toggle} expanded={expanded} />
            {body}
        </div>
    );
}



module.exports = SuiteNode;
