var React = require("react");
var uuid = require('node-uuid');

var statusClass = {
	success: 'bg-success',
	failed: 'bg-danger',
	error: 'bg-warning',
    primary: 'bg-primary'
}

function Line(props){
    var clazz = "sentence";
    var icon = '';

    if (props.status){
        clazz += ' ' + statusClass[props.status] + ' fact';
    }

    return (
        <div className={clazz}>{props.components}</div>
    );
}

module.exports = Line;