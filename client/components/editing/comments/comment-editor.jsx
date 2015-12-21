var React = require("react");
var BigText = require('./../editors/big-text');
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');
var Postal = require('postal');

module.exports = React.createClass({
	render: function(){
		if (this.props.arg.active){
			var editor = BigText({arg: this.props.arg, classes: 'form-control'});

			return (
				<div id={this.props.step.id} className="comment">{editor}</div>
			);

			
		}
		else {
			var identifier = {step: this.props.step.id, cell: 'text'};
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
					id={this.props.step.id} 
					className="comment" 
					 >
						<DeleteGlyph step={this.props.step} />
						<span className="comment-text" tabIndex="0" role="button" onClick={editCell} onFocus={editCell}>{this.props.arg.value}</span>
				
						<ReorderGlyph step={this.props.step} />
				</div>
			);
		}

	}
});