var React = require('react');
var ReactDOM = require('react-dom');
var Postal = require('postal');


var {Router, Route, IndexRoute, Link, RouteHandler, browserHistory} = require('react-router');
var { Provider } = require('react-redux');


var SpecExplorer = require('./explorer/spec-explorer');
var Language = require('./language/language');
var Documentation = require('./documentation');
var QueuePage = require('./queue/queue-page');
var Header = require('./header/header');
var GrammarErrors = require('./grammars/grammar-errors');
var SpecEditor = require('./editing/spec-editor');
var SpecPreview = require('./editing/spec-preview');
var SpecResults = require('./editing/spec-results');
var SuiteExplorer = require('./explorer/suite-explorer');
var ResultsPane = require('./results/results-pane');


var FixtureTable = require('./language/fixture-table');
var uuid = require('node-uuid');

var $ = require('jquery');

var Reducer  = require('./../lib/state/reducer');

var { createStore } = require('redux');



var disconnect = require('./../components/disconnected');

module.exports = function(initialization, register){
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
                    <Route name="fixture" path="/fixture/:key" component={FixtureTable} />
                    <Route name="suite-explorer" path="/suite/*" component={SuiteExplorer} />
                    <Route name="results" path="/results" component={ResultsPane} />
                    <IndexRoute component={SpecExplorer}/>
                </Route>
            </Router>
            
            </div>
            
        </div>
        </Provider>


    , document.getElementById("main"));;
    
    register(store);
  };




}



