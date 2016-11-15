import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import uuid from 'node-uuid';
import Postal from 'postal';
import ReactDOM from 'react-dom';

class CreateFixture extends React.Component{
    constructor(props){
        super(props);
        this.state = {showModal: false};
    }

    componentDidUpdate(){
        if (this.state.showModal){
        const element = ReactDOM.findDOMNode(this);
        $('#modal-name').focus();
        }
    }

    render(){
        const handleToggle = () => {
            this.setState({
                showModal: !this.state.showModal
            });
        }

        const close = () => this.setState({showModal: false});

        const onTextEntry = e => {
            const value = e.target.value;
            const canDo = (value && value.length > 0);
            this.setState({
                buttonDisabled: !canDo,
                name: value
            });
        }

        const apply = e => {
            const name = this.state.name;
            const message = {type: 'create-fixture', key: name};

            Postal.publish({
                channel: 'engine-request',
                topic: 'create-fixture',
                data: message
            });

            handleToggle(e);
        }

        const onKeyDown = e => {
            if (e.key.toString() == 'Enter'){
                if (this.state.name){
                    apply(e);
                }
            }
        }


        let bsStyle = 'link';


        return (
            <Button onClick={handleToggle} bsStyle={bsStyle}>New Fixture
            <Modal show={this.state.showModal} onHide={close}>
                <Modal.Header closeButton>
                <Modal.Title>Add a new Fixture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                <label forHtml="modal-name">Name:</label>
                <input
                    onKeyPress={onKeyDown}
                    tabIndex="1000"
                    onChange={onTextEntry}
                    type="text"
                    className="form-control"
                    id="modal-name"
                    placeholder="FixtureKey (no spaces) or the fixture title"
                    value={this.state.name} />
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button tabIndex="1001" disabled={this.state.buttonDisabled} onClick={apply} bsStyle="primary">
                    Add
                </Button>
                <Button onClick={handleToggle}>Close</Button>
                </Modal.Footer>
            </Modal>
            </Button>
        );
    }
}

module.exports = CreateFixture;