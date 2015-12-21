var React = require("react");
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');

// TODO -- also needs to take in the actual Step

module.exports = React.createClass({
	render: function(){
		var clazz = "sentence";
		if (this.props.warning){
			clazz = clazz + " bg-warning";
		}

		if (this.props.step.active){
			clazz += ' active';
		}

		return (
			<div className={clazz} id={this.props.step.id}>
				<DeleteGlyph step={this.props.step} />
				{this.props.components}
				<ReorderGlyph step={this.props.step} />
			</div>
		);
	}
});