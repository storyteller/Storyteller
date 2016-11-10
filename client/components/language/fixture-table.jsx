import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
const Specification = require('../../lib/model/specification');
import { preview as loader } from './../editing/component-loader';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function GrammarTable({fixture, spec}){
    const grammars = _.sortBy(_.values(fixture.grammars), x => x.title);

    loader.reset();
    const components = spec.previews(loader);

    return (
      <Grid>
        <Row>
          {components}
        </Row>
      </Grid>
    );

/*
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
    */
}

function FixtureTable({fixture, spec}){
  return (
    <div>
      <h2>Fixture '{fixture.title}' ({fixture.implementation})</h2>
      <hr />
      <GrammarTable fixture={fixture} spec={spec} />
    </div>
  );
}

function getFixture(state, ownProps){
  var fixtures = state.get('fixtures');
  var fixture = fixtures.find(ownProps.params.key);

  var spec = new Specification(fixture.sample, fixtures);

  return {fixture: fixture, spec: spec};
}

module.exports = connect(getFixture)(FixtureTable);
