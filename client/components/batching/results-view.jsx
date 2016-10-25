import React from 'react';
import Postal from 'postal';

import { Grid, Row } from 'react-bootstrap';
import SpecResultHeader from './../editing/header/spec-result-header';

function ResultsView(props){
    var loader = require('./../editing/component-loader').results;
    var components = props.spec.buildResults(loader, false);
    
    return (
        <div className="results-view">
            <h4 id="spec-title">{props.spec.title} ({props.spec.last_result.results.attempts} attempts) <small style={{marginLeft: '25px'}}><a href="#/">  back to summary</a></small></h4>
            <hr />
            <SpecResultHeader spec={props.spec} />
            {components}
        </div>
    );
}

module.exports = ResultsView;
