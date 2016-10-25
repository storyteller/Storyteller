import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';


function GrammarTable({fixture}){
    const grammars = _.sortBy(_.values(fixture.grammars), x => x.title);

    const rows = grammars.map((x, i) => {
      return (
        <tr key={i+1}>
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

function FixtureTable({fixture}){
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
