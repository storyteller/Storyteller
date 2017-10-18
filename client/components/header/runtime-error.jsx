import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Postal from 'postal';

const RuntimeError = React.createClass({
  componentDidMount: function(){
    Postal.subscribe({
      channel: 'engine',
      topic: 'runtime-error',
      callback: data => {
        this.setState({
          error: data.error,
          showModal: true
        });
      }
    });

    Postal.subscribe({
      channel: 'engine',
      topic: 'system-recycled',
      callback: () => {
        this.setState({
          showModal: false,
          error: null
        });
      }
    })
  },

  getInitialState() {
    return { showModal: false, error: null };
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
    if (this.state.error == null){
      return (<span/>);
    }

    return (
      <Button onClick={this.handleToggle} bsStyle="danger">Runtime Error!
	      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Runtime Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{width: '80%'}} >
          <pre style={{width: '100%', overflow: 'auto'}}>
            {this.state.error}
          </pre>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
	      </Modal>
      </Button>
    );
  }
});



module.exports = RuntimeError;
