var React = require("react");


var HeaderCell = React.createClass({
	render: function(){
		var title = this.props.cell.header || this.props.cell.key;

		return (
			<th key={this.props.key}>{title}</th>
		);
	}
});

var HeaderRow = React.createClass({
	render: function(){
        var i = 0;
		var cells = this.props.cells.map(function(x){
			return ( <HeaderCell key={i++} cell={x} /> );
		});

		var actionCell = null;
		if (!this.props.hideActions){
			actionCell = (
				<th>Actions</th>
			);
		}

		return (
			<tr>
				{actionCell}
				{cells}
			</tr>
		);
	}
});


module.exports = HeaderRow;