import React from 'react';
import StepAdderPlaceHolder from './../adders/step-adder-placeholder';
import StepAdder from './../adders/step-adder';
import DeleteGlyph from './../delete-glyph';
import ReorderGlyph from './../reorder-glyph';
import uuid from 'node-uuid';
import Postal from 'postal';

module.exports = function({subject, deleteSubject, title, components, adder}){
  let onclick = () => {}
  let panelClass = 'panel panel-default';
  if (subject.active){
    panelClass = 'panel panel-primary';
  }
  else {
    onclick = e => {
      Postal.publish({
        channel: 'editor',
        topic: 'select-holder',
        data: {holder: subject.id}
      });

      e.stopPropagation();
    }
  }

  const sub = deleteSubject || subject;

  return (
    <div className={panelClass} id={subject.id}>
      <div className="panel-heading">
      <h3 onClick={onclick} className="panel-title">
        <DeleteGlyph step={sub}/>
        {title}
        <ReorderGlyph step={sub}/>
      </h3>
      </div>
      <div className="panel-body">
      {components}
      <hr />
      {adder}
      </div>
    </div>
  );
}
