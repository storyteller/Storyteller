import React from 'react';
import Postal from 'postal';
import cn from 'classnames';

function CommandLink({createMessage, identifier, text}){
  const onclick = e => {
    const data = createMessage();

    Postal.publish({
      channel: 'engine-request',
      topic: data.type,
      data: data
    });

    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <a href="#" onClick={onclick} className={cn('explorer-command', identifier)}>{text}</a>
  );
}


module.exports = CommandLink;
