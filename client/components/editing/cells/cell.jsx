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


module.exports = React.createClass({

  render(){
    if (this.props.cell.editor == 'display-only'){
      const text = this.props.value || 'NULL';
      return (<span>{text}</span>);
    }

    if (this.props.active){
      return builders.toEditor(this.props);
    }

    const builder = builders.findEditor(this.props.cell.editor);
    let clazz = 'cell label label-default';
    let text = builder.display(this.props.cell, this.props.value);
    if (this.props.value == null || this.props.value == undefined){
      clazz = clazz + ' missing';
      text = '[' + this.props.cell.key + ']';
    }

    const identifier = { step: this.props.id, cell: this.props.cell.key };

    const editCell = function(e){
      Postal.publish({
        channel: 'editor',
        topic: 'select-cell',
        data: identifier
      });

      e.preventDefault();
    }


    if (this.props.changed){
      clazz = clazz + ' changed';
    }

    return (
      <span
        onClick={editCell}
        onFocus={editCell}
        tabIndex="0"
        role="button"
        data-cell={this.props.cell.key}
        className={clazz}
        title={this.props.cell.description || this.props.cell.key}>{text}</span>
    )
  }
});
