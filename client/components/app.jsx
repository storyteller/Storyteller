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
var SuiteExplorer = require('./explorer/suite-explorer');
var ResultsTable = require('./results/results-table');

var FixtureTable = require('./language/fixture-table');
var uuid = require('node-uuid');

var $ = require('jquery');

var Reducer  = require('./../lib/state/reducer');

var { createStore } = require('redux');


function Communicator(store, address, continuation, disconnect){
	this.socket = new WebSocket(address);

	this.socket.onclose = function(){
		console.log('The socket closed');
		disconnect();
	};

	this.socket.onerror = function(evt){
		console.log(JSON.stringify(evt));
	}

	this.socket.onmessage = function(evt){
		var message = JSON.parse(evt.data);
		console.log('Got: ' + JSON.stringify(message) + ' with topic ' + message.type);
	
		if (message.type == 'refresh-page'){
			location.reload();
			
			return;
		}
	
		store.dispatch(evt);
	};
	
	
	
	this.socket.onopen = function(){
		console.log('Opened a socket at ' + address);
		continuation();
	}

	this.send = function(message){
		if (this.socket.readyState != 1){
			disconnect();
		}
		else {
			this.socket.send(JSON.stringify(message));
		}
	}
	
	var self = this;
	
	Postal.subscribe({
		channel: 'engine-request',
		topic: '*',
		callback: function(data, envelope){
			data.type = envelope.topic;
			
			console.log("Sending message to server: " + JSON.stringify(data));
			
			self.send(data);
		}
	});
}

var disconnect = require('./../components/disconnected');

module.exports = function(initialization){
  // activate keyboard shortcuts
  require('./../lib/presentation/keyboard-shortcuts').register();

  if (window){
    window.$ = $;
    window.jQuery = $;
  }

  require('./../lib/presentation/typeahead.jquery.js');
  
  var store = createStore(Reducer);
  store.dispatch(initialization);
  
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

var Standin = function(props){
    return (<div><h1>Stand in!</h1></div>);
}


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
                <IndexRoute component={Standin}/>
            </Route>
          </Router>
          
        </div>
        
      </div>
      </Provider>


  , document.getElementById("main"));

}



