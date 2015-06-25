/** @jsx React.DOM */

var React = require("react");

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
  Link=Router.Link, RouteHandler = Router.RouteHandler;


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


var App = React.createClass({
  mixins: [Router.State],

  getHandlerKey: function () {
    // leave this here. Force the router to actually
    // do routing things
    return uuid.v4();
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
    <Route name="fixture" path="/fixture/:key" handler={FixtureTable} />
    <Route name="results" path="/results" handler={ResultsTable} />
    <DefaultRoute handler={SpecExplorer}/>
  </Route>
);

module.exports = function(){
  // activate keyboard shortcuts
  require('./../lib/presentation/keyboard-shortcuts').register();

  if (window){
    window.$ = $;
    window.jQuery = $;
  }

  require('./../lib/presentation/typeahead.jquery.js');

	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.body);
	});
}


