/** @jsx React.DOM */

var React = require("react");
var StepAdderPlaceHolder = require('./step-adder-placeholder');
var StepAdder = require('./step-adder');
var DeleteGlyph = require('./delete-glyph');

module.exports = React.createClass({
	buildSelector: function(){
		if (this.props.subject.active){
			return null;
		}

		return StepAdderPlaceHolder({holder: this.props.subject.id, text: 'add steps...'});
	},

	render: function(){
		var selector = this.buildSelector();

		var panelClass = "panel panel-default";
		if (this.props.subject.active){
			panelClass = "panel panel-primary";
		}

		var deleteSubject = this.props.deleteSubject || this.props.subject;

		return (
			<div className={panelClass} id={this.props.subject.id}>
			  <div className="panel-heading">
			    <h3 className="panel-title"><DeleteGlyph step={deleteSubject}/>{this.props.title}</h3>
			  </div>
			  <div className="panel-body">
			    {this.props.components}
			    {selector}
			  </div>
			</div>
		);
	}
});