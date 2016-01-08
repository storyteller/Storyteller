var React = require("react");
var Hierarchy = require('./../../lib/stores/hierarchy');
var Postal = require('postal');
var _ = require('lodash');
var { connect } = require('react-redux');



function GrammarTable(props){
    var grammars = _.sortBy(_.values(props.fixture.grammars), x => x.title);

    var i = 0;
    var rows = grammars.map(x => {
        return (
            <tr key={++i}>
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

function FixtureTable(props){
    var fixture = props.fixture;

    return (
        <div>
            <h2>Fixture '{fixture.title}' ({fixture.implementation})</h2>
            <hr />
            <GrammarTable fixture={fixture} />
        </div>
    );
}

function getFixture(state, ownProps){
    var fixtures = state.get('fixtures');
    var fixture = fixtures.find(ownProps.params.key);
    
    return {fixture: fixture};
}

module.exports = connect(getFixture)(FixtureTable);