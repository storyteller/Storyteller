import React from 'react';
import Postal from 'postal';
import Icons from './../icons';

const Up = Icons['up-arrow'];
const Down = Icons['down-arrow'];

module.exports = React.createClass({
  propTypes: {
    step: React.PropTypes.object.isRequired
  },

  render: function(){
    const location = {holder: this.props.step.parent, step: this.props.step};
    const onreorderup = e => {
      Postal.publish({
        channel: 'editor',
        topic: 'reorder-up',
        data: location
      });

      e.preventDefault();
    }

    const onreorderdown = e => {
      Postal.publish({
        channel: 'editor',
        topic: 'reorder-down',
        data: location
      });

      e.preventDefault();
    }

    return (
      <span style={{marginLeft: '10px'}}>
        <a
          style={{color: 'inherit'}}
          title="Move this step or section up in order (ctrl+alt+up or ctrl+pageup)"
          onClick={onreorderup}>
            <Up />
        </a>
        <a
          style={{color: 'inherit'}}
          title="Move this step or section down in order (ctrl+alt+down or ctrl+pagedown)"
          onClick={onreorderdown}>
            <Down />
        </a>
      </span>
    );
  }
});
