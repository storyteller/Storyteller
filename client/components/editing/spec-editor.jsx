/** @jsx React.DOM */

var React = require("react");
var StepAdderPlaceHolder = require('./adders/step-adder-placeholder');
var StepAdder = require('./adders/step-adder');
var Icons = require('./../icons');
var SuitePath = require('./../explorer/suite-path');

var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');

var EditorPresenter = require('./../../lib/presentation/editor-presenter');
var ResultsPresenter = require('./../../lib/presentation/results-presenter');
var loader = require('./component-loader');

var SpecOutline = require('./spec-outline');



var Running = Icons['running'];
var Persisting = require('./alerts/persisting');
var SpecResultHeader = require('./header/spec-result-header');
var RetryCount = require('./header/retry-count');
var ExpirationPeriod = require('./header/expiration-period');




var EditorLoading = require('./alerts/editor-loading');
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
				<ExpirationPeriod spec={this.props.spec} disabled={this.props.updatingDate} />
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
      updatingDate: false
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
            outline={this.state.outline}
            updatingDate={this.state.updatingDate}
          />
					
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
