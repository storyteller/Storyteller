var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');

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
    return (
      <ButtonGroup>
        <LinkButton href={'#/spec/preview/' + this.props.id} text="Preview" active={this.props.mode === 'preview'} />
        <LinkButton href={'#/spec/editing/' + this.props.id} text="Editor" active={this.props.mode === 'editing'} />
        <LinkButton href={'#/spec/results/' + this.props.id} text="Results" active={this.props.mode === 'results'} />
        <LinkButton href={'#/spec/stepthrough/' + this.props.id} text="Stepthrough" active={this.props.mode === 'stepthrough'} />
      </ButtonGroup>
    );
  }
});

module.exports = SpecLinks;
