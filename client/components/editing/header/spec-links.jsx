var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');
var StepthroughControls = require('./../stepthrough-controls');
var Postal = require('postal');

function LinkButton({href, title, active, text}){
  var onclick = e => {
    window.location = href;
    e.stopPropagation();
  }

  return (<Button title={title} onClick={onclick} active={active}>{text}</Button>);
}

function SpecLinks({mode, spec, id}){
  if (mode == 'stepthrough'){
    return (<StepthroughControls spec={spec}/>);
  }

  return (
    <ButtonGroup>
      <LinkButton title="Read only view of the current spec (ctrl+1)" href={'#/spec/preview/' + id} text="Preview" active={mode === 'preview'} />
      <LinkButton title="Edit the current spec (ctrl+2)" href={'#/spec/editing/' + id} text="Editor" active={mode === 'editing'} />
      <LinkButton title="Review the latest results (ctrl+3)" href={'#/spec/results/' + id} text="Results" active={mode === 'results'} />
    </ButtonGroup>
  );
}


module.exports = SpecLinks;
