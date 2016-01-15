var React = require("react");
var uuid = require('node-uuid');

var statusClass = {
	success: 'bg-success',
	failed: 'bg-danger',
	error: 'bg-warning'
}

module.exports = React.createClass({
	render: function(){
		var clazz = "sentence";
		var errorIcon = '';

		if (this.props.status){
			clazz += ' ' + statusClass[this.props.status];
		}

		if (statusClass[this.props.status] == statusClass.failed) {
			errorIcon = <i key="error-icon" className="fa fa-exclamation-circle" style={{paddingRight: '5px'}}></i>; 
		}
		
		return (
			<div className={clazz}>{errorIcon}{this.props.components}</div>
		);
	}
});