import React from 'react';

module.exports = function({spec, children}){
  return (
    <div>
      <h4>{spec.title}</h4>
      {children}
    </div>
  )
}
