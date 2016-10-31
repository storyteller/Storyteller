import React from 'react';
import builders from './../editors/builders';

function FailureCell({cell, value, actual}){
  const builder = builders.get(cell.type);
  const text = builder.display(cell, value);

  return (
    <span className="label label-danger">{text} but was <i>{actual}</i></span>
  );
}

module.exports = FailureCell;
