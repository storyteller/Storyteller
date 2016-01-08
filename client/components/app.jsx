var React = require('react');
var ReactDOM = require('react-dom');
var Postal = require('postal');


var {Router, Route, IndexRoute, Link, RouteHandler} = require('react-router');
var { Provider } = require('react-redux');


var SpecExplorer = require('./explorer/spec-explorer');
var Language = require('./language/language');
var Documentation = require('./documentation');
var QueuePage = require('./queue/queue-page');
var Header = require('./header/header');
var GrammarErrors = require('./grammars/grammar-errors');
var SpecEditorWrapper = require('./editing/spec-editor-wrapper');
var SpecPreview = require('./editing/spec-preview');
var SuiteExplorer = require('./explorer/suite-explorer');
var ResultsTable = require('./results/results-table');

var FixtureTable = require('./language/fixture-table');
var uuid = require('node-uuid');

var $ = require('jquery');

var Reducer  = require('./../lib/state/reducer');
var Communicator = require('./../communicator');

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
  
  // TODO -- use this someday very soon
  //var communicator = new Communicator(store, Storyteller.wsAddress, () => startRouting(store), disconnect);


/*

              <Route name="language" path="/language" component={Language}/>
              <Route name="documentation" path="/docs" component={Documentation}/>
              <Route name="queue" path="/queue" component={QueuePage} />
              <Route name="grammar-errors" path="/grammar-errors" component={GrammarErrors} />
              <Route name="spec-editor" path="/spec/:mode/:id" component={SpecEditorWrapper} />
              <Route name="suite-explorer" path="/suite/*" component={SuiteExplorer} />
              <Route name="fixture" path="/fixture/:key" component={FixtureTable} />
              <Route name="results" path="/results" component={ResultsTable} />
              <IndexRoute component={SpecExplorer}/>
*/


  ReactDOM.render(
      <Provider store={store}>
      <div>
        
        <Header />
        <div className="container">
          
          <Router>
            <Route name="app" path="/" >
                <Route name="language" path="/language" component={Language}/>
                <Route name="documentation" path="/docs" component={Documentation}/>
                <Route name="grammar-errors" path="/grammar-errors" component={GrammarErrors} />
                <Route name="spec-preview" path="/spec/preview/:id" component={SpecPreview} />
                <Route name="suite-explorer" path="/suite/*" component={SuiteExplorer} />
                <IndexRoute component={SpecExplorer}/>
            </Route>
          </Router>
          
        </div>
        
      </div>
      </Provider>


  , document.getElementById("main"));;
}



