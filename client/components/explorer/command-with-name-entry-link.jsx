var React = require("react");
var ReactDOM = require('react-dom');
var Postal = require("postal");

var {Modal, ModalTrigger, Button} = require('react-bootstrap');
var $ = require('jquery');

var CommandWithNameEntryLink  = React.createClass({
	componentDidUpdate: function(){
		if (this.state.showModal){
			var element = ReactDOM.findDOMNode(this);
			$('#modal-name').focus();
		}
	},

	getInitialState: function () {
		var value = this.props.value;
		return {
	    	showModal: false,
	    	buttonDisabled: !(value && value.length > 0),
	    	name: value 
	    };
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
		var onTextEntry = e => {
			var value = e.target.value;
			var canDo = (value && value.length > 0);
			this.setState({
				buttonDisabled: !canDo,
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
			<a href="#" title={this.props.title} onClick={this.handleToggle} className="explorer-command">{this.props.text}
			<Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>{this.props.title}</Modal.Title>
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
    						placeholder={this.props.placeholder} 
    						value={this.state.name} />
  				</div>
	          </Modal.Body>
	          <Modal.Footer>
		      	<Button tabIndex="1001" disabled={this.state.buttonDisabled} onClick={apply} bsStyle="primary">{this.props.commandText}</Button> 
		        <Button onClick={this.handleToggle}>Cancel</Button>
	          </Modal.Footer>
			</Modal>
			</a>


		);
	}
});



module.exports = CommandWithNameEntryLink;