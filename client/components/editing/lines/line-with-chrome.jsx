var React = require("react");
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');
var uuid = require('node-uuid');

module.exports = function({warning, step, components}){
	var clazz = "sentence";
	if (warning){
		clazz = clazz + " bg-warning";
	}

	var active = null;
	if (step.active){
		clazz += ' bg-info';
		active = (<i className="fa fa-location-arrow"></i>);
	}

	return (
		<div className={clazz} id={step.id}>
			{active}
			<DeleteGlyph step={step} />
			{components}
			<ReorderGlyph step={step} />
		</div>
	);
}

