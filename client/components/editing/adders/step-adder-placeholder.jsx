import React from 'react';
import Postal from 'postal';

module.exports = function({holder, text}){
  var onclick = e => {
    Postal.publish({
      channel: 'editor',
      topic: 'select-holder',
      data: {holder: holder.id}
    });

    e.preventDefault();
  }

  return (
    <a
      className="step-adder-placeholder"
      data-holder={holder.id}
      onClick={onclick}>{text}</a>
  );
}
