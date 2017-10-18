import React from 'react';

import { Button, Modal, ModalTrigger } from 'react-bootstrap';

import ErrorBox from './../lines/error-box';

class ErrorCell extends React.Component {
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  handleToggle(){
    this.setState({
      showModal: !this.state.showModal
    });
  }

  open() {
    this.setState({ showModal: true });
  }

  render(){
    const title = "Cell Error in '" + this.props.cell.key + "'";

    return (
      <Button bsSize="xsmall" onClick={this.handleToggle} bsStyle="warning"><i className="fa fa-exclamation-circle" style={{paddingRight: '5px'}}></i>{this.props.value} (Error!)
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ErrorBox error={this.props.error} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>
      </Button>
    );
  }
}


module.exports = ErrorCell;
