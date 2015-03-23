/** @jsx React.DOM */

var React = require("react");
var Button = require('react-bootstrap/Button');
var Modal = require('react-bootstrap/Modal');
var ModalTrigger = require('react-bootstrap/ModalTrigger');
var OverlayMixin = require('react-bootstrap/OverlayMixin');
var Icons = require('./../icons');

var SystemProperties = React.createClass({
	render: function(){
		var propDefs = [];
		var properties = this.props.recycled.properties;
		for (key in properties){
			var dt = ( <dt>{key}</dt> );
			var dd = ( <dd>{properties[key]}</dd> );

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

		return (
		    <Modal title="System State" onRequestHide={this.handleToggle}>
		      <div className="modal-body">
		        
		      <SystemProperties recycled={this.props.recycled} />
		      <SystemError recycled={this.props.recycled} />

		      </div>
		      <div className="modal-footer">
		        <Button onClick={this.handleToggle}>Close</Button>
		      </div>
		    </Modal>
		  );
	},

	render: function(){
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
			<Button onClick={this.handleToggle} bsStyle={bsStyle}>{text}</Button>
		);
	}
});

module.exports = RecycleState;