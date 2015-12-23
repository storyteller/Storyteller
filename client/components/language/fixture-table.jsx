var React = require("react");
var Hierarchy = require('./../../lib/stores/hierarchy');
var Postal = require('postal');
var _ = require('lodash');
var uuid = require('node-uuid');

var GrammarTable = React.createClass({

	render(){
		var grammars = _.sortBy(_.values(this.props.fixture.grammars), x => x.title);

		var rows = grammars.map(x => {
			return (
				<tr key={uuid.v4()}>
					<td>{x.title}</td>
					<td>{x.type}</td>
				</tr>
			);
		});

		return (
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}

});

var FixtureTable = React.createClass({
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

	render(){
		var fixture = Hierarchy.fixtures().find(this.props.params.key);

		return (
			<div key={uuid.v4()}>
				<h2>Fixture '{fixture.title}' ({fixture.implementation})</h2>
				<hr />
				<GrammarTable fixture={fixture} />
			</div>
		);
	}
});

module.exports = FixtureTable;