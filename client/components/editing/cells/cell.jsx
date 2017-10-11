import React from 'react';
import builders from './../editors/builders';
import Arg from './../../../lib/model/arg';
import Postal from 'postal';

const labelStatus = {
  ok: 'label-default',
  error: 'label-warning',
  failed: 'label-danger',
  success: 'label-success'
}

function Cell(props){
  if (props.cell.editor == 'display-only'){
    const text = props.value || 'NULL';
    return (<span>{text}</span>);
  }

  if (props.active){
    return builders.toEditor(props);
  }

  const builder = builders.findEditor(props.cell.editor);
  let clazz = 'cell label label-default';
  let text = builder.display(props.cell, props.value);
  if (props.value == null || props.value == undefined){
    clazz = clazz + ' missing';
    text = '[' + props.cell.key + ']';
  }

  const identifier = { step: props.id, cell: props.cell.key };

  const editCell = function(e){
    Postal.publish({
      channel: 'editor',
      topic: 'select-cell',
      data: identifier
    });

    e.preventDefault();
  }


  if (props.changed){
    clazz = clazz + ' changed';
  }

  return (
    <span
      onClick={editCell}
      onFocus={editCell}
      tabIndex="0"
      role="button"
      data-cell={props.cell.key}
      className={clazz}
      title={props.cell.description || props.cell.key}>{text}</span>
  )
}

module.exports = Cell;
