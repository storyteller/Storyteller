import React from 'react';

module.exports = React.createClass({
  render(){
    return (
      <div>
        <h4>{this.props.spec.title}</h4>
        {this.props.children}
      </div>
    )
  }
});
