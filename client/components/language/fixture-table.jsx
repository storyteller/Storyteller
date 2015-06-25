/** @jsx React.DOM */

var React = require("react");
var Router = require('react-router');
var Hierarchy = require('./../../lib/stores/hierarchy');
var Postal = require('postal');
var _ = require('lodash');

var GrammarTable = React.createClass({

	render(){
		var grammars = _.sortBy(_.values(this.props.fixture.grammars), x => x.title);

		var rows = grammars.map(x => {
			return (
				<tr>
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
	mixins: [Router.State],

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

	getInitialState(){
		var params = this.getParams();
		var fixtureKey = params.key;

		return {
			fixtureKey: fixtureKey
		}
	},

	render(){
		var fixture = Hierarchy.fixtures().find(this.state.fixtureKey);

		return (
			<div>
				<h2>Fixture '{fixture.title}' ({fixture.implementation})</h2>
				<hr />
				<GrammarTable fixture={fixture} />
			</div>
		);
	}
});

module.exports = FixtureTable;