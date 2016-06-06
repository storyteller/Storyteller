var React = require("react");
var builders = require("./../editors/builders");

module.exports = function({cell, value}){
	var builder = builders.get(cell.editor);

	var text = builder.display(cell, value);

	return (
		<span className="preview-cell" title={cell.description}>{text}</span>
	);
}
