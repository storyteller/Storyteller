import React from 'react';

import Postal from 'postal';
import { Modal, Button } from 'react-bootstrap';
import Icons from './../icons';
import KeyboardShortcuts from './../../lib/presentation/keyboard-shortcuts';

function ShortcutRow({shortcut}){
  var shortcut = shortcut;
  var text = shortcut.keys.toString();
  if (shortcut.keys instanceof Array){
    text = shortcut.keys.join(' or ');
  }

  return (
    <tr key={shortcut.topic}>
      <td>{shortcut.description}</td>
      <td>{text}</td>
    </tr>
  );
}

function Help(props){
  var shortcuts = KeyboardShortcuts.shortcuts().map((x, i) => {
    return (<ShortcutRow key={i} shortcut={x} />);
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Keystrokes</th>
        </tr>
      </thead>
      <tbody>
        {shortcuts}
      </tbody>
    </table>
  );
}



const HelpButton = React.createClass({
  componentDidMount(){
    Postal.subscribe({
      channel: 'explorer',
      topic: 'shortcut-help',
      callback: data => {
        if (!this.state.isModalOpen){
          this.handleToggle();
        }
      }
    })
  },

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
    const HelpIcon = Icons['help'];

    return (
      <Button id="help-icon" bsStyle="link" onClick={this.handleToggle} title="Keyboard Shortcuts and Help (ctrl+/)"><HelpIcon />Help
	      <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Keyboard Shortcuts and Help</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Help />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
	      </Modal>
      </Button>
    );
  }
});



module.exports = HelpButton;
