var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');
var StepthroughControls = require('./../stepthrough-controls');

var LinkButton = React.createClass({
  render: function(){
    var onclick = e => {
      window.location = this.props.href;
      e.stopPropagation();
    }

    return (<Button title={this.props.title} onClick={onclick} active={this.props.active}>{this.props.text}</Button>);
  }
});

var SpecLinks = React.createClass({
  render(){
    if (this.props.mode == 'stepthrough'){
      return (
        <StepthroughControls spec={this.props.spec}/>

      );
    }

    return (
      <ButtonGroup>
        <LinkButton title="Read only view of the current spec (ctrl+1)" href={'#/spec/preview/' + this.props.id} text="Preview" active={this.props.mode === 'preview'} />
        <LinkButton title="Edit the current spec (ctrl+2)" href={'#/spec/editing/' + this.props.id} text="Editor" active={this.props.mode === 'editing'} />
        <LinkButton title="Review the latest results (ctrl+3)" href={'#/spec/results/' + this.props.id} text="Results" active={this.props.mode === 'results'} />
      </ButtonGroup>
    );
  }
});

module.exports = SpecLinks;
