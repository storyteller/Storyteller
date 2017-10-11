var React = require("react");
var ErrorBox = require('./../lines/error-box');

module.exports = function({width, error}){
	return (
		<tr className="error-row">
			<td colSpan={width}>
				<ErrorBox error={error} />
			</td>
		</tr>
	);
}