import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import uuid from 'node-uuid';
import Icons from './../icons';

const SystemProperties = function({system}){
    const propDefs = [];
    const properties = system.get('properties');

    let i = 0;

    const entries = properties.toJS();
    for (let key in entries){
      const dt = ( <dt key={++i}>{key}</dt> );
      const dd = ( <dd key={++i}>{entries[key]}</dd> );

      propDefs.push(dt);
      propDefs.push(dd);
    }

    return (
      <dl className="dl-horizontal">
          <dt>System Name</dt>
          <dd>{system.get('system_name')}</dd>
          {propDefs}
      </dl>
    );
}

const SystemError = function({system}){
    if (system.get('success')){
        return (
            <div></div>
        );
    }

    return (
        <div className="recycle-error bg-danger">{system.get('error')}</div>
    );
}

class RecycleState extends React.Component{
    constructor(props){
        super(props);
        this.state = {showModal: false};
    }

    render(){
      const handleToggle = () => {
          this.setState({
              showModal: !this.state.showModal
          });
      }

      const close = () => this.setState({showModal: false});

      if (this.props.system.get('recycling')){
        const Running = Icons['running'];

        return (
          <Button bsStyle="link"><Running />Recycling...</Button>
        );
      }

      let bsStyle = 'link';
      const date = this.props.system.get('time');
      let text = 'Recycled at ' + date;

      if (!this.props.system.get('success')){
        bsStyle = 'danger';
        text = 'Recycle Failure!';
      }

      return (
        <Button onClick={handleToggle} bsStyle={bsStyle}>{text}
          <Modal show={this.state.showModal} onHide={close}>
            <Modal.Header closeButton>
              <Modal.Title>System State</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <SystemProperties system={this.props.system} />
            <SystemError system={this.props.system} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Button>
      );
    }
}

module.exports = RecycleState;
