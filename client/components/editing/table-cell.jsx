var React = require("react");
var builders = require("./builders");
var Arg = require('./../../lib/arg');
var Postal = require('postal');


module.exports = React.createClass({

	render: function(){
		var clazz = 'table-cell';


		if (this.props.active){
			var editor = builders.toEditor(this.props);
			return (
				<td>{editor}</td>
			);
		}

		var builder = builders.findEditor(this.props.cell.editor);

		var text = builder.display(this.props.cell, this.props.value);
		if (this.props.value == null || this.props.value == undefined){
			clazz = clazz + " missing";
			text = '[' + this.props.cell.key + ']';
		}

		var identifier = {step: this.props.id, cell: this.props.cell.key};

		var editCell = function(e){
			Postal.publish({
				channel: 'editor',
				topic: 'select-cell',
				data: identifier
			});

			e.preventDefault();

		}

		
		if (this.props.changed){
			clazz = clazz + " changed";
		}

		return (
			<td 
				key={this.props.cell.key}
				onClick={editCell}
				onFocus={editCell}
				tabIndex="0" 
				role="button"
				data-cell={this.props.cell.key}
				className={clazz}
				title={this.props.cell.description || this.props.cell.key}>{text}</td>
		)
	}
});
