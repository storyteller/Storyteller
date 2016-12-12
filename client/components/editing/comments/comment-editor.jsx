import React from 'react';
import BigText from './../editors/big-text';
import DeleteGlyph from './../delete-glyph';
import ReorderGlyph from './../reorder-glyph';
import Postal from 'postal';
import Comment from './comment';

var marked = require('marked');
marked.setOptions({
  gfm: true
});

module.exports = function({arg, step}){
  if (arg.active){
    const editor = ( <BigText arg={arg} classes='form-control' />);

    return (
      <div id={step.id} className="comment">{editor}</div>
    );
  }
  else {
    const identifier = {step: step.id, cell: 'text'};
    const editCell = e => {
      Postal.publish({
        channel: 'editor',
        topic: 'select-cell',
        data: identifier
      });

      e.preventDefault();
    }

    return (
      <div tabIndex="0" role="button" onClick={editCell} onFocus={editCell}
        id={step.id}
        className="comment-editor">
        <DeleteGlyph step={step} /><span>Delete this comment</span>
        <ReorderGlyph step={step} /><span>Reorder this comment</span>

        <Comment arg={arg} step={step} />
      </div>
    );
  }
}
