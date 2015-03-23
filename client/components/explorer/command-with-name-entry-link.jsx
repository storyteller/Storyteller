/** @jsx React.DOM */

var React = require("react");
var Postal = require("postal");

var Modal = require('react-bootstrap/Modal');
var ModalTrigger = require('react-bootstrap/ModalTrigger');
var OverlayMixin = require('react-bootstrap/OverlayMixin');
var Button = require('react-bootstrap/Button');
var $ = require('jquery');

var CommandWithNameEntryLink  = React.createClass({
	mixins: [OverlayMixin],

	componentDidUpdate: function(){
		if (this.state.isModalOpen){
			var element = this.getDOMNode();
			$('#modal-name').focus();
		}
	},

	getInitialState: function () {
		return {
	    	isModalOpen: false,
	    	buttonDisabled: true,
	    	name: null
	    };
	},

	handleToggle: function(e){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});

		e.preventDefault();
	},

	renderOverlay: function () {	
		if (!this.state.isModalOpen) {
		  	return <span/>;
		}

		var onTextEntry = e => {
			var value = e.target.value;

			var canDo = (value && value.length > 0);
			this.setState({
				buttonDisabled: false,
				name: value
			});
		}



		var apply = e => {
			var name = this.state.name;
			var message = this.props.toMessage(name);

			Postal.publish({
				channel: 'engine-request',
				topic: message.type,
				data: message
			});

			this.handleToggle(e);
		}

		var onKeyDown = e => {
			if (e.key.toString() == 'Enter'){ 
				if (this.state.name){
					apply(e);
				}
			}
		}

		return (
		    <Modal title={this.props.title} onRequestHide={this.handleToggle}>
		      <div className="modal-body">

		      		<div className="form-group">
    					<label for="modal-name">Name:</label>
    					<input 
    						onKeyPress={onKeyDown}
    						tabIndex="1000" 
    						onChange={onTextEntry}
    						type="text" 
    						className="form-control" 
    						id="modal-name" 
    						placeholder={this.props.placeholder}/>
  					</div>

		      

		      </div>
		      <div className="modal-footer">
		      	<Button tabIndex="1001" disabled={this.state.buttonDisabled} onClick={apply} bsStyle="primary">{this.props.commandText}</Button> 
		        <Button onClick={this.handleToggle}>Cancel</Button>
		        
		      </div>
		    </Modal>
		  );
	},

	render: function(){
		return (
			<a href="#" title={this.props.title} onClick={this.handleToggle} className="explorer-command">{this.props.text}</a>
		);
	}
});

module.exports = CommandWithNameEntryLink;