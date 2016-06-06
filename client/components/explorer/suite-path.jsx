var React = require('react');
var ArrayList = require('./../../lib/array-list');
var uuid = require('node-uuid');

function SuiteLink({path, name}){
    var href = "#/suite/" + path;

    return (<a href={href}>{name}</a>);
}


function SuitePath({suite, path, linkToLeaf}){
    // path == spec path
    // linkToLeaf = {true}
    
    var parts = [];
    if (suite){
        parts = suite.split('/');
    }
    else if (path){
        parts = path.split('/');
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
    
    if (linkToLeaf){
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