var React = require("react");
var {Modal, ModalTrigger, OverlayMixin, Button, NavItem} = require('react-bootstrap');
var Icons = require('./../icons');
var SpecAndSuiteLookup = require('./spec-and-suite-lookup');
var Postal = require('postal');


var Search = React.createClass({
	componentDidMount(){
		Postal.subscribe({
			channel: 'explorer',
			topic: 'find',
			callback: data => {
				if (!this.state.showModal){
					this.open();
				}
			}
		});
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
		var SearchIcon = Icons['search'];


		return (
			<Button bsStyle="link" onClick={this.handleToggle} title="Click to search for a specification or suite"><SearchIcon /> Search
			<Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>Search for Specifications or Suites</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	          	<SpecAndSuiteLookup  close={this.handleToggle}/>
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button onClick={this.close}>Close</Button>
	          </Modal.Footer>
			</Modal>
			</Button>


		);
	}
});



module.exports = Search;