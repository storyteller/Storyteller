var React = require('react');
var ArrayList = require('./../../lib/array-list');
var uuid = require('node-uuid');

function SuiteLink(props){
    var href = "#/suite/" + props.path;
    

    return (<a href={href}>{props.name}</a>);
}


function SuitePath(props){
    // path == spec path
    // linkToLeaf = {true}
    
    var parts = [];
    if (props.suite){
        parts = props.suite.split('/');
    }
    else if (props.path){
        parts = props.path.split('/');
        parts = parts.slice(0, parts.length - 1);
    }
    
    var leafName = parts[parts.length - 1];
    parts = parts.slice(0, parts.length - 1);

    var items = [];
    for (var i = 0; i < parts.length; i++){
        var path = parts.slice(0, i + 1).join('/');
        var name = parts[i];
        
        var item = (<SuiteLink path={path} name={name} key={i}/>);
        items.push(item);
        
        var spacer = (<span key={'spacer:' + i}> / </span>);
	    items.push(spacer);
    }
    
    if (props.linkToLeaf){
        var path = parts.join('/') + '/' + leafName;
        var item = (<SuiteLink path={path} name={leafName} key="leaf"/>);
        items.push(item);
    }
    else {
        items.push(<span key="leaf">{leafName}</span>);
    }
    
    return (<span>{items}</span>);
}



module.exports = SuitePath;