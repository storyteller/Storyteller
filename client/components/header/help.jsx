/** @jsx React.DOM */

var React = require("react");

var Postal = require('postal');
var {Modal, ModalTrigger, OverlayMixin, Button} = require('react-bootstrap');
var Icons = require('./../icons');
var KeyboardShortcuts = require('./../../lib/keyboard-shortcuts');


var ShortcutRow = React.createClass({
	render(){
		var shortcut = this.props.shortcut;
		var text = shortcut.keys.toString();
		if (shortcut.keys instanceof Array){
			text = shortcut.keys.join(' or ');
		}

		return (
			<tr key={shortcut.topic}>
				<td>{shortcut.description}</td>
				<td>{text}</td>
			</tr>
		);
	}
});

var Help = React.createClass({
	render(){
		var shortcuts = KeyboardShortcuts.shortcuts().map(x => {
			return (<ShortcutRow shortcut={x} />);
		});

		return ( 
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Description</th>
						<th>Keystrokes</th>
					</tr>
				</thead>
				<tbody>
					{shortcuts}
				</tbody>
			</table>
		);
	}
});

var HelpIcon = React.createClass({
	mixins: [OverlayMixin],

	componentDidMount(){
		Postal.subscribe({
			channel: 'explorer',
			topic: 'shortcut-help',
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
		    <Modal title="Keyboard Shortcuts and Help" onRequestHide={this.handleToggle}>
		      <div className="modal-body">
		      	<Help />
		      </div>
		      <div className="modal-footer">
		        <Button onClick={this.handleToggle}>Close</Button>
		      </div>
		    </Modal>
		  );
	},

	render: function(){
		var Help = Icons['help'];


		return (
			<Button bsStyle="link" onClick={this.handleToggle} title="Click for help and a list of the available keyboard shortcuts"><Help />Help</Button>
		);
	}
});

module.exports = HelpIcon;