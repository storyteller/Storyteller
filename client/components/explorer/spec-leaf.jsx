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

function CloneLink(props){
    var toMessage = name => {return {type: 'clone-spec', id: props.spec.id, name: name}};
    var defaultValue = toCloneText(props.spec.title);

    return (
        <CommandWithNameEntryLink 
            title="Clone a Specification" 
            text="clone" 
            commandText="Clone" 
            toMessage={toMessage}
            value={defaultValue} />
    );
}

function SpecLeaf(props){
    var onclick = e => {

        e.preventDefault();
    }

    var iconName = props.spec.icon(props.running, props.queued, props.progress);
    var Icon = icons[iconName];
    var icon = (<Icon />);

    var clazz = 'spec-name spec-state-' + props.spec.state;

    var spec = props.spec;

    var link = null;
    if (iconName != 'queued' && !iconName.includes('running')){
        var buildMessage = () => {return {type: 'run-spec', id: spec.id}};

        link = (<CommandLink identifier="run" createMessage={buildMessage} text="run" />);
    }

    var href = '#/spec/editing/' + spec.id;
    if (spec.hasResults()){
        href = '#/spec/results/' + spec.id;
    }

    

    return (
        <div className="spec-leaf" data-path={props.spec.spec.path}>
            {icon}
            <a href={href} className={clazz}>{props.spec.title}</a>
            {link}<CloneLink {...props} />
            <DeleteLink spec={props.spec}/>
        </div>
    );
}


module.exports = SpecLeaf;
