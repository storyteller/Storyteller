import React from 'react';
import uuid from 'node-uuid';

module.exports = function({title, components}){
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        {components}
      </div>
    </div>
  );
}
