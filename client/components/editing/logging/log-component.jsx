var React = require("react");

module.exports = function({title, html}){
	return (
		<div>
			<h3>{title}</h3>
			<div dangerouslySetInnerHTML={{__html: html}}></div>
			<hr />
		</div>
	);
}