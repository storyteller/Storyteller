var React = require("react");
var StepAdderPlaceHolder = require('./../adders/step-adder-placeholder');
var StepAdder = require('./../adders/step-adder');
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');
var uuid = require('node-uuid');
var Postal = require('postal');

module.exports = function({subject, deleteSubject, title, components, adder}){
	var onclick = () => {}
	var panelClass = "panel panel-default";
	if (subject.active){
		panelClass = "panel panel-primary";
	}
	else {
		onclick = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'select-holder',
				data: {holder: subject.id}
			});
			
			e.stopPropagation();
		}
	}

	var deleteSubject = deleteSubject || subject;

	

	return (
		<div className={panelClass} id={subject.id}>
			<div className="panel-heading">
			<h3 onClick={onclick} className="panel-title">
				<DeleteGlyph step={deleteSubject}/>
				{title}
				<ReorderGlyph step={deleteSubject}/>
			</h3>
			</div>
			<div className="panel-body">
			{components}
			<hr />
			{adder}
			</div>
		</div>
	);
}

