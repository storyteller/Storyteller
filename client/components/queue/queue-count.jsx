import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const getCount = function(state){
  return {count: state.get('queued').length};
}

function QueueCount({count}){
  if (count == 0){
    return ( <span></span> );
  }

  const onclick = function(){
    window.location = '#/queue';
  }

  return (
    <Button bsStyle="link" onClick={onclick}><Badge>{count}</Badge> Specs queued</Button>
  );
}


module.exports = connect(getCount)(QueueCount);
