import React from 'react';
import Postal from 'postal';

import { Grid, Row } from 'react-bootstrap';
import SpecResultHeader from './../editing/header/spec-result-header';

function ResultsView({spec, single}){
  const loader = require('./../editing/component-loader').results;
  const components = spec.buildResults(loader, false);
  
  var goback = (
    <small style={{marginLeft: '25px'}}><a href="#/">  back to summary</a></small>
  );

  if (single){
    goback = null;
  }

  return (
    <div className="results-view">
      <h4 id="spec-title">{spec.title} ({spec.last_result.results.attempts} attempts) {goback}</h4>
      <hr />
      <SpecResultHeader spec={spec} />
      {components}
    </div>
  );
}

module.exports = ResultsView;
