import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
const Specification = require('../../lib/model/specification');
import { preview, editing } from './../editing/component-loader';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';


function FixtureTable({fixture, spec}){
  const previews = spec.previews(preview);
  const editors = spec.editors(editing);



  return (
    <div>
      <h2>Fixture '{fixture.title}' ({fixture.implementation})</h2>
      <hr />
      <Grid>
        <Row>
          <p>Below is a sample specification for this fixture just to preview its usage</p>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Preview">{previews}</Tab>
            <Tab eventKey={2} title="Editing">{editors}</Tab>
          </Tabs>
        </Row>
      </Grid>
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
