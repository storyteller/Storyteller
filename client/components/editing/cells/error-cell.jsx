var React = require("react");

var {Button, Modal, ModalTrigger} = require('react-bootstrap');

var ErrorBox = require('./../lines/error-box');

var ErrorCell = React.createClass({
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
		var title = "Cell Error in '" + this.props.cell.key + "'";



		return (
			<Button bsSize="xsmall" onClick={this.handleToggle} bsStyle="warning">{this.props.value} (Error!)
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
});


module.exports = ErrorCell;