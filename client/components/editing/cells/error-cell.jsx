var React = require("react");

var {Button, Modal, ModalTrigger, OverlayMixin} = require('react-bootstrap');

var ErrorBox = require('./../lines/error-box');

var ErrorCell = React.createClass({
	mixins: [OverlayMixin],

	getInitialState: function () {
		return {
	    	isModalOpen: false
	    };
	},

	handleToggle: function(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},

	renderOverlay: function () {	
		if (!this.state.isModalOpen) {
		  	return <span/>;
		}

		var title = "Cell Error in '" + this.props.cell.key + "'";

		return (
		    <Modal title={title} onRequestHide={this.handleToggle}>
		      <div className="modal-body">
		        
		      	<ErrorBox error={this.props.error} />

		      </div>
		    </Modal>
		  );
	},

	render: function(){
		return (
			<Button bsSize="xsmall" onClick={this.handleToggle} bsStyle="warning">{this.props.value} (Error!)</Button>
		);
	}
});

module.exports = ErrorCell;