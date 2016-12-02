import React from 'react';
import ReactDOM from 'react-dom';
import Postal from 'postal';


import {Router, Route, IndexRoute, Link, RouteHandler, browserHistory} from 'react-router';
import { Provider } from 'react-redux'


import SpecExplorer from './explorer/spec-explorer';
import Language from './language/language';
import Documentation from './documentation';
import QueuePage from './queue/queue-page';
import Header from './header/header';
import GrammarErrors from './grammars/grammar-errors';
import SpecEditor from './editing/spec-editor';
import SpecPreview from './editing/spec-preview';
import SpecResults from './editing/spec-results';
import SpecStepthrough from './editing/spec-stepthrough';
import SuiteExplorer from './explorer/suite-explorer';
import ResultsPane from './results/results-pane';


import FixtureTable from './language/fixture-table';
import uuid from 'node-uuid';

import $ from 'jquery';

import Reducer  from './../lib/state/reducer';

import { createStore } from 'redux';

import disconnect from './../components/disconnected';

export default function(initialization, register) {
  // activate keyboard shortcuts
  require('./../lib/presentation/keyboard-shortcuts').register();

  if (window){
    window.$ = $;
    window.jQuery = $;
  }

  require('./../lib/presentation/typeahead.jquery.js');

  var store = createStore(Reducer);
  store.dispatch(initialization);

  if (register){
      register(store);
  }

  return () => {
    ReactDOM.render(
        <Provider store={store}>
        <div>

            <Header />
            <div className="container">

            <Router>
                <Route name="app" path="/" >
                    <Route name="language" path="/language" component={Language}/>
                    <Route name="documentation" path="/docs" component={Documentation}/>
                    <Route name="queue" path="/queue" component={QueuePage} />
                    <Route name="grammar-errors" path="/grammar-errors" component={GrammarErrors} />
                    <Route name="spec-preview" path="/spec/preview/:id" component={SpecPreview} />
                    <Route name="spec-editor" path="/spec/editing/:id" component={SpecEditor} />
                    <Route name="spec-results" path="/spec/results/:id" component={SpecResults} />
                    <Route name="spec-stepthrough" path="/spec/stepthrough/:id" component={SpecStepthrough} />
                    <Route name="fixture" path="/fixture/:key" component={FixtureTable} />
                    <Route name="suite-explorer" path="/suite/*" component={SuiteExplorer} />
                    <Route name="results" path="/results" component={ResultsPane} />
                    <IndexRoute component={SpecExplorer}/>
                </Route>
            </Router>

            </div>

        </div>
        </Provider>


    , document.getElementById('main'));

    register(store);
  };

}
