import React from 'react';
import builders from './../editors/builders';

module.exports = function({cell, value}){
  const builder = builders.get(cell.editor);
  const text = builder.display(cell, value);
  return (
    <span className="preview-cell" title={cell.description}>{text}</span>
  );
}
