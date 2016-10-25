import React from 'react';
import Postal from 'postal';

import { Button, Modal } from 'react-bootstrap';

module.exports = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  handleToggle(){
    this.setState({
      showModal: !this.state.showModal
    });
  },

  open() {
    this.setState({ showModal: true });
  },

  render(){
    const deleteSpec = e => {
      this.handleToggle();

      Postal.publish({
        channel: 'engine-request',
        topic: 'delete-spec',
        data: {id: this.props.spec.id}
      });

      e.preventDefault();
    };

    return (
      <a href="#" onClick={this.handleToggle} className="explorer-command">delete
	      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Delete this Specification?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Okay to delete specification '{this.props.spec.title}'?</p>
          </Modal.Body>
          <Modal.Footer>
	          <Button tabIndex="1001" onClick={deleteSpec}>Delete</Button>
	          <Button onClick={this.handleToggle}>Cancel</Button>
          </Modal.Footer>
	      </Modal>
      </a>
    );
  }
});
