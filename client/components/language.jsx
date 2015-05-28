/** @jsx React.DOM */

var React = require("react");
var Hierarchy = require('./../lib/specs/hierarchy');
var Postal = require('postal');


var FixtureTable = React.createClass({
	render(){
		var fixtures = _.sortBy(_.values(this.props.library.fixtures), x => x.title);

		var rows = fixtures.map(x => {
			return (
				<tr>
					<td>{x.title}</td>
					<td>{x.implementation}</td>
				</tr>
			);
		});

		return (
			<table className="table">
				<thead>
					<tr>
						<th>Fixture Title</th>
						<th>Implementation</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
});

module.exports = React.createClass({
	componentDidMount(){
		this.subscription = Postal.subscribe({
			channel: 'explorer',
			topic: 'fixtures-loaded',
			callback: data => {
				this.setState({
					x: 0
				});
			}
		});
	},

	componentWillUnMount(){
		this.subscription.unsubscribe();
	},

	render: function(){
		var library = Hierarchy.fixtures();

		return (
			<div>
				<h2>The Specification Language</h2>
				<hr />
				<FixtureTable library={library} />

			</div>
		);
	}

});