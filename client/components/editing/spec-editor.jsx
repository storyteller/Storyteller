/** @jsx React.DOM */

var React = require("react");
var StepAdderPlaceHolder = require('./step-adder-placeholder');
var StepAdder = require('./step-adder');
var Icons = require('./../icons');


var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');

var EditorPresenter = require('./../../lib/editor-presenter');
var ResultsPresenter = require('./../../lib/results-presenter');
var loader = require('./component-loader');

var SpecOutline = require('./spec-outline');



var Running = Icons['running'];
var Persisting = require('./persisting');
var SpecResultHeader = require('./spec-result-header');
var RetryCount = require('./retry-count');




var EditorLoading = require('./editor-loading');
var SpecHeader = require('./header/spec-header');





var modes = {
	results: {
		buildComponents: spec => spec.buildResults(loader.results),
		noResults: loader.results.noResults
	},

	editing: {
		buildComponents: spec => spec.editors(loader.editing)
	},

	preview: {
		buildComponents: spec => spec.previews(loader.preview)
	}
}

var ContextualPane = React.createClass({
	buildContext: function(){
		if (this.props.activeContainer){
			return this.props.activeContainer.contextualControl(this.props.loader.editing);
		}
		else {
			return null;
		}
	},

	render: function(){
		var contextualControl = this.buildContext();


		return (
			<Col xs={4} md={4}>
				<RetryCount count={this.props.spec['max-retries']}/>
				<h4>Outline</h4>
				<SpecOutline outline={this.props.outline} />
				<br />
				<br />
				{contextualControl}
			</Col>
		);
	}
});

module.exports = React.createClass({
	// smelly, but oh well
	gotoResults: function(){
		if (this.props.mode != 'results'){
			window.location = '#/spec/results/' + this.props.id;
		}
	},

	gotoPreview: function(){
		if (this.props.mode != 'preview'){
			window.location = '#/spec/preview/' + this.props.id;
		}
	},

	gotoEditor: function(){
		if (this.props.mode != 'editing'){
			window.location = '#/spec/editing/' + this.props.id;
		}
	},

	getInitialState: function(){
		return {
			components: [],
			outline: {title: 'placeholder', active: true, children: []},
			loading: true,
			spec: {name: 'temp'},
			persisting: false,
			lastSaved: null,
			contextualControl: null,
		}
	},

	componentDidMount: function(){
		if (this.props.mode == 'results'){
			this.presenter = new ResultsPresenter(this.props.id);
		}
		else {
			this.presenter = new EditorPresenter(this.props.id);
		}

		
		this.presenter.activate(modes[this.props.mode], this);
	},

	componentWillUnmount: function(){
		this.presenter.deactivate();
	},




	render: function(){
		if (this.state.loading){
			return ( <EditorLoading spec={this.state.spec} /> );
		}

		if (this.props.mode != 'editing'){
			return (
			<Grid>
				<SpecHeader spec={this.state.spec} mode={this.props.mode} />
				<Row>
				    <SpecResultHeader spec={this.state.spec} />

				    <Persisting spec={this.state.spec} lastSaved={this.state.lastSaved} persisting={this.state.persisting}/>

				    {this.state.components}
				</Row>
			</Grid>
			);
		}

		return (
			<Grid>
				<SpecHeader spec={this.state.spec} mode={this.props.mode} />
				<Row>
					
					<ContextualPane 
						spec={this.state.spec} 
						loader={loader} 
						activeContainer={this.state.activeContainer}
						outline={this.state.outline}/>
					
					<Col xs={8} md={8}>
					    <SpecResultHeader spec={this.state.spec} />

					    <Persisting spec={this.state.spec} lastSaved={this.state.lastSaved} persisting={this.state.persisting}/>

					    {this.state.components}
					</Col>
				</Row>
			</Grid>
		);
	}
});