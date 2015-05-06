/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');

var {Button, Modal, ModalTrigger, OverlayMixin} = require('react-bootstrap');

module.exports = React.createClass({
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

		var deleteSpec = e => {
			this.handleToggle();

			Postal.publish({
				channel: 'engine-request',
				topic: 'delete-spec',
				data: {id: this.props.spec.id}
			});

			e.preventDefault();
		};

		return (
		    <Modal title="Delete this Specification?" onRequestHide={this.handleToggle}>
		      <div className="modal-body">
		        
		      	<p>Okay to delete specification '{this.props.spec.title}'?</p>

		      </div>
		      <div className="modal-footer">

		      	<Button tabIndex="1001" onClick={deleteSpec}>Delete</Button>
		        <Button onClick={this.handleToggle}>Cancel</Button>
		      </div>
		    </Modal>
		  );
	},

	render: function(){
		return (
			<a href="#" onClick={this.handleToggle} className="explorer-command">delete</a>
		);
	}
});
