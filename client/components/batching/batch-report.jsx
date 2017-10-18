import React from 'react';
import ReactDOM from 'react-dom';
import Postal from 'postal';
import _ from 'lodash';

import { Grid, Row, Alert } from 'react-bootstrap';
import ResultsView from './results-view';
import SummaryTable from './../results/summary-table';

import { Router, Route, IndexRoute, Link, RouteHandler, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

function getSpec(state, ownProps){
  return {spec: state.get('specs').get(ownProps.params.id)};
}

const SpecResults = connect(getSpec)(ResultsView);

function BatchReport(props){
  if (props.specs.length == 1){
    return (<ResultsView spec={props.specs[0]} />);
  }

  let headerText = props.system;
  if (props.suite && props.suite != 'All'){
    headerText += ': ' + props.suite;
  }

  let alertStyle = 'danger';
  let alertText = 'Failed ';
  if (props.success){
    alertStyle = 'success';
    alertText = 'Succeeded ';
  }

  return (
    <Grid>
      <Row>
        <Alert id="header-alert" bsStyle={alertStyle}>
          <h3>Storyteller Results for <span id="batch-header-text">{headerText}</span> <small>{alertText} at {props.time}</small></h3>
        </Alert>

        <SummaryTable {...props} />
      </Row>
    </Grid>
  );
}

function getSpecs(state){
  const specs = state.get('specs').toList().toArray();
  return {
    specs: specs,
    success: state.get('success'),
    suite: state.get('suite'),
    system: state.get('system'),
    time: state.get('time'),
    status: state.get('status-filter'),
    lifecycle: state.get('lifecycle-filter')
  };
}

function getDispatch(dispatch){
  return {dispatch: dispatch};
}

const Summary = connect(getSpecs, getDispatch)(BatchReport);


module.exports = function startRouting(data){
  const Reducer  = require('./../../lib/state/reducer');

  const { createStore } = require('redux');
  const store = createStore(Reducer);

  store.dispatch(data);


  if (store.getState().get('specs').size == 1){
    const spec = store.getState().get('specs').toList().toArray()[0];

    ReactDOM.render(
      <Provider store={store}><div className="container"><ResultsView spec={spec} /></div></Provider>,
      document.getElementById('main'));
  }
  else {
    const screen = (
      <Provider store={store}>
      <div>
        <div className="container">

        <Router>
          <Route name="app" path="/" >
            <Route name="spec-results" path="/spec/results/:id" component={SpecResults} />
            <IndexRoute component={Summary}/>
          </Route>
        </Router>

        </div>
      </div>
      </Provider>
    );

    ReactDOM.render(screen, document.getElementById('main'));
  }
};
