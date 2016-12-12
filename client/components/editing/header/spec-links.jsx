var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');
var StepthroughControls = require('./../stepthrough-controls');

var LinkButton = React.createClass({
  render: function(){
    var onclick = e => {
      window.location = this.props.href;
      e.stopPropagation();
    }

    return (<Button onClick={onclick} active={this.props.active}>{this.props.text}</Button>);
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
        <LinkButton href={'#/spec/preview/' + this.props.id} text="Preview" active={this.props.mode === 'preview'} />
        <LinkButton href={'#/spec/editing/' + this.props.id} text="Editor" active={this.props.mode === 'editing'} />
        <LinkButton href={'#/spec/results/' + this.props.id} text="Results" active={this.props.mode === 'results'} />
      </ButtonGroup>
    );
  }
});

module.exports = SpecLinks;
