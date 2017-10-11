var React = require("react");
var builders = require("./../editors/builders");

module.exports = function({cells, step}){
	var tds = cells.map(cell => {
		var arg = step.args.find(cell.key);
		
		var text = builders.toText(arg);
		
		var key = cell.key;

		return (
			<td nowrap key={key}>{text}</td>
		);
	});

	return (
		<tr>{tds}</tr>
	);
}
