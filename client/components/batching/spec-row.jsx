var React = require("react");
var Postal = require("postal");
var Counts = require('./../../lib/model/counts');


var SpecRow = React.createClass({
	render: function(){
		var bsStyle = 'bg-danger';


		var counts = new Counts(this.props.counts);
		if (counts.success()){
			bsStyle = 'bg-success'
		}

		var id = this.props.id;
		var navigate = e => {
			Postal.publish({
				channel: 'batch',
				topic: 'show-spec',
				data: {id: id}
			});

			e.preventDefault();
		}

		return (
			<tr className={bsStyle}>
				<td><a onClick={navigate}>{this.props.path}</a></td>
				<td>{this.props.lifecycle}</td>
				<td>{counts.toString()}</td>
				<td className="number-cell">{this.props.duration}</td>
				<td className="number-cell">{this.props.attempts}</td>
			</tr>
		);
	}
});

module.exports = SpecRow;