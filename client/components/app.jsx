/** @jsx React.DOM */

var React = require("react");

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
  Link=Router.Link, RouteHandler = Router.RouteHandler;


var SpecExplorer = require('./explorer/spec-explorer');
var Language = require('./language');
var Documentation = require('./documentation');
var QueuePage = require('./queue/queue-page');
var Header = require('./header/header');
var GrammarErrors = require('./grammars/grammar-errors');
var SpecEditorWrapper = require('./editing/spec-editor-wrapper');
var SuiteExplorer = require('./explorer/suite-explorer');

var $ = require('jquery');


var App = React.createClass({
  mixins: [Router.State],

  getHandlerKey: function () {
    var childDepth = 1; // assuming App is top-level route
    var key = this.getRoutes()[childDepth].name;
    var id = this.getParams().id;
    if (id) { key += id; }

    var mode = this.getParams().mode;
    if (mode){
    	key += ':' + mode;
    }

    return key;
  },

	render: function(){
		return (
			<div>
				<Header />
				<div className="container">
					<RouteHandler key={this.getHandlerKey()}/>
				</div>

			</div>
		);
	}
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="language" path="/language" handler={Language}/>
    <Route name="documentation" path="/docs" handler={Documentation}/>
    <Route name="queue" path="/queue" handler={QueuePage} />
    <Route name="grammar-errors" path="/grammar-errors" handler={GrammarErrors} />
    <Route name="spec-editor" path="/spec/:mode/:id" handler={SpecEditorWrapper} />
    <Route name="suite-explorer" path="/suite/*" handler={SuiteExplorer} />
    <DefaultRoute handler={SpecExplorer}/>
  </Route>
);

module.exports = function(){
  // activate keyboard shortcuts
  require('./../lib/keyboard-shortcuts').register();

  if (window){
    window.$ = $;
    window.jQuery = $;
  }

  require('./../lib/typeahead.jquery.js');

	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.body);
	});
}


