var React = require("react");
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');
var uuid = require('node-uuid');

module.exports = React.createClass({
	render: function(){
		var clazz = "sentence";
		if (this.props.warning){
			clazz = clazz + " bg-warning";
		}

        var active = null;
		if (this.props.step.active){
			clazz += ' bg-info';
            active = (<i className="fa fa-location-arrow"></i>);
		}

        

		return (
			<div className={clazz} id={this.props.step.id}>
                {active}
				<DeleteGlyph step={this.props.step} />
				{this.props.components}
				<ReorderGlyph step={this.props.step} />
			</div>
		);
	}
});