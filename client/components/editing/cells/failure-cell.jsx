var React = require("react");
var builders = require("./../editors/builders");

function FailureCell({cell, value, actual}){
	var builder = builders.get(cell.type);
	var text = builder.display(cell, value);

	return (
		<span className="label label-danger">{text} but was <i>{actual}</i></span>
	);
}

module.exports = FailureCell;