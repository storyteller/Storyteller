var React = require("react");
var {Modal, ModalTrigger, OverlayMixin, Button} = require('react-bootstrap');
var Icons = require('./../icons');
var SpecAndSuiteLookup = require('./spec-and-suite-lookup');
var Postal = require('postal');

var Search = React.createClass({
	mixins: [OverlayMixin],

	componentDidMount(){
		Postal.subscribe({
			channel: 'explorer',
			topic: 'find',
			callback: data => {
				if (!this.state.isModalOpen){
					this.handleToggle();
				}
			}
		})
	},


	getInitialState() {
		return {
	    	isModalOpen: false
	    };
	},

	handleToggle(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},

	renderOverlay() {	
		if (!this.state.isModalOpen) {
		  	return (<span/>);
		}

		return (
		    <Modal title="Search for Specifications or Suites" onRequestHide={this.handleToggle}>
		      <div className="modal-body">
		      	<SpecAndSuiteLookup  close={this.handleToggle}/>
		      </div>
		      <div className="modal-footer">
		        <Button onClick={this.handleToggle}>Close</Button>
		      </div>
		    </Modal>
		  );
	},

	render: function(){
		var SearchIcon = Icons['search'];


		return (
			<Button bsStyle="link" onClick={this.handleToggle} title="Click to search for a specification or suite"><SearchIcon /> Search</Button>
		);
	}
});

module.exports = Search;