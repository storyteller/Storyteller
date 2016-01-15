var React = require("react");
var StepAdderPlaceHolder = require('./../adders/step-adder-placeholder');
var StepAdder = require('./../adders/step-adder');
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');
var uuid = require('node-uuid');

module.exports = React.createClass({
	render: function(){

		var panelClass = "panel panel-default";
		if (this.props.subject.active){
			panelClass = "panel panel-primary";
		}

		var deleteSubject = this.props.deleteSubject || this.props.subject;

		return (
			<div className={panelClass} id={this.props.subject.id}>
			  <div className="panel-heading">
			    <h3 className="panel-title">
			    	<DeleteGlyph step={deleteSubject}/>
			    	{this.props.title}
			    	<ReorderGlyph step={deleteSubject}/>
			    </h3>
			  </div>
			  <div className="panel-body">
			    {this.props.components}
			    <hr />
			    {this.props.adder}
			  </div>
			</div>
		);
	}
});