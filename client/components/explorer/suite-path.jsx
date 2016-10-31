import React from 'react';
import ArrayList from './../../lib/array-list';
import uuid from 'node-uuid';

function SuiteLink({path, name}){
  const href = '#/suite/' + path;

  return (<a href={href}>{name}</a>);
}


function SuitePath({suite, path, linkToLeaf}){
    // path == spec path
    // linkToLeaf = {true}

    let parts = [];
    if (suite){
        parts = suite.split('/');
    }
    else if (path){
        parts = path.split('/');
        parts = parts.slice(0, parts.length - 1);
    }

    const leafName = parts[parts.length - 1];
    parts = parts.slice(0, parts.length - 1);

    const items = [];
    for (let i = 0; i < parts.length; i++){
      const path = parts.slice(0, i + 1).join('/');
      const name = parts[i];

      const item = (<SuiteLink path={path} name={name} key={i}/>);
      items.push(item);

      const spacer = (<span key={'spacer:' + i}> / </span>);
	    items.push(spacer);
    }

    if (linkToLeaf){
      const path = parts.join('/') + '/' + leafName;
      const item = (<SuiteLink path={path} name={leafName} key="leaf"/>);
      items.push(item);
    }
    else {
      items.push(<span key="leaf">{leafName}</span>);
    }

    return (<span>{items}</span>);
}



module.exports = SuitePath;
