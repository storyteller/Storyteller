import React from 'react';

var marked = require('marked');
marked.setOptions({
  gfm: true
});

function Comment({arg, step}){
  var html = marked(arg.value);

  return (
    <div
      id={step.id}
      className="comment" dangerouslySetInnerHTML={{__html: html}}>
    </div>
  );
}

module.exports = Comment;
