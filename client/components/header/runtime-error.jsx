var React = require("react");
var {Button, Modal, ModalTrigger, OverlayMixin} = require('react-bootstrap');
var Postal = require('postal');

var RuntimeError = React.createClass({
	mixins: [OverlayMixin],

	getInitialState: function () {
		return {
	    	isModalOpen: false,
	    	error: null
	    };
	},

	componentDidMount: function(){
		Postal.subscribe({
			channel: 'engine',
			topic: 'runtime-error',
			callback: data => {
				this.setState({
					error: data.error,
					isModalOpen: true
				});
			}
		});

		Postal.subscribe({
			channel: 'engine',
			topic: 'system-recycled',
			callback: () => {
				this.setState({
					isModalOpen: false,
					error: null
				});
			}
		})
	},

	handleToggle: function(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},

	renderOverlay: function () {	
		if (!this.state.isModalOpen) {
		  	return (<span/>);
		}

		return (
		    <Modal style={{width: '80%'}} title="Runtime Error!" onRequestHide={this.handleToggle}>
		      <div className="modal-body">
		        
		      <pre style={{width: '100%', overflow: 'auto'}}>
		      	{this.state.error}
		      </pre>

		      </div>
		      <div className="modal-footer">
		        <Button onClick={this.handleToggle}>Close</Button>
		      </div>
		    </Modal>
		  );
	},

	render: function(){
		if (this.state.error == null){
			return (<span/>);
		}
		
		return (
			<Button onClick={this.handleToggle} bsStyle="danger">Runtime Error!</Button>
		);
	}
});

module.exports = RuntimeError;