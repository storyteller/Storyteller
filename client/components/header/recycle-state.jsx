var React = require("react");
var {Button, Modal} = require('react-bootstrap');
var uuid = require('node-uuid');
var Icons = require('./../icons');

var SystemProperties = React.createClass({
	render: function(){
		var propDefs = [];
		var properties = this.props.recycled.properties;
		for (var key in properties){
			var dt = ( <dt key={uuid.v4()}>{key}</dt> );
			var dd = ( <dd key={uuid.v4()}>{properties[key]}</dd> );

			propDefs.push(dt);
			propDefs.push(dd);
		}

		return (
				<dl className="dl-horizontal">
				  <dt>System Name</dt>
				  <dd>{this.props.recycled.system_name}</dd>
				  {propDefs}
				</dl>
		);

	}
});

var SystemError = React.createClass({
	render: function(){
		if (this.props.recycled.success){
			return (
				<div></div>
			);
		}

		return (
			<div className="recycle-error bg-danger">{this.props.recycled.error}</div>
		);
	}
});

var RecycleState = React.createClass({
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
		if (this.props.recycling){
			var Running = Icons['running'];
		
			return (
				<Button bsStyle="link"><Running />Recycling...</Button>
			);
		}
	
		var bsStyle = 'link';
		var date = this.props.time;
		var text = 'Recycled at ' + date;

		if (!this.props.success){
			bsStyle = "danger";
			text = "Recycle Failure!";
		}


		return (
			<Button onClick={this.handleToggle} bsStyle={bsStyle}>{text}
			<Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>System State</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
			      <SystemProperties recycled={this.props.recycled} />
			      <SystemError recycled={this.props.recycled} />
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button onClick={this.close}>Close</Button>
	          </Modal.Footer>
			</Modal>
			</Button>


		);
	}
});




module.exports = RecycleState;