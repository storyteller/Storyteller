var React = require("react");
var uuid = require('node-uuid');

var PerfRow = React.createClass({
	render: function(){
		return (
			<tr>
				<td>{this.props.type}</td>
				<td>{this.props.subject}</td>
				<td className="number-cell">{this.props.start}</td>
				<td className="number-cell">{this.props.end}</td>
				<td className="number-cell">{this.props.duration}</td>
			</tr>

		);
	}
});

var PerfTable = React.createClass({
	render: function(){
        var i = 0;
		var rows = this.props.records.map(function(r){
			return ( <PerfRow key={++i}  {...r} />);
		});

		return (
			<div>

			<hr/>

			<h5>Execution Timing <small>all timings in milliseconds</small></h5>

			<table className="table table-striped">
				<thead>
				<tr>
					<th>Type</th>
					<th>Subject</th>
					<th>Start</th>
					<th>End</th>
					<th>Duration</th>
				</tr>
				</thead>
				<tbody>
				{rows}
				</tbody>
			</table>


			</div>
		);
	}
});

module.exports = PerfTable;