var React = require("react");
var BigText = require('./../editors/big-text');
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');
var Postal = require('postal');


module.exports = function({arg, step}){
	if (arg.active){
		var editor = ( <BigText arg={arg} classes='form-control' />);

		return (
			<div id={step.id} className="comment">{editor}</div>
		);

		
	}
	else {
		var identifier = {step: step.id, cell: 'text'};
		var editCell = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'select-cell',
				data: identifier
			});

			e.preventDefault();

		}

		return (
			<div 
				id={step.id} 
				className="comment" 
					>
					<DeleteGlyph step={step} />
					<span className="comment-text" tabIndex="0" role="button" onClick={editCell} onFocus={editCell}>{arg.value}</span>
			
					<ReorderGlyph step={step} />
			</div>
		);
	}
}
