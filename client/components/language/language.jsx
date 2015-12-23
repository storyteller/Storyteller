var React = require("react");
var Hierarchy = require('./../../lib/stores/hierarchy');
var Postal = require('postal');
var _ = require('lodash');
var uuid = require('node-uuid');


var FixtureTable = React.createClass({
	render(){
		var fixtures = _.sortBy(_.values(this.props.library.fixtures), x => x.title);

		var rows = fixtures.map(x => {
			var href = '#/fixture/' + x.key;
			var clazz = '';
			if (x.errorCount() > 0){
				clazz = 'warning';
			}


			return (
				<tr key={uuid.v4()} className={clazz}>
					<td><a href={href}>{x.title}</a></td>
					<td>{x.implementation}</td>
					<td style={{textAlign: 'right'}}>{x.errorCount()}</td>
				</tr>
			);
		});

		return (
			<table className="table">
				<thead>
					<tr>
						<th>Fixture Title</th>
						<th>Implementation</th>
						<th>Errors</th>
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