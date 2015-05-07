/** @jsx React.DOM */

var React = require("react");
var StepAdderPlaceHolder = require('./step-adder-placeholder');
var StepAdder = require('./step-adder');



var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');

var EditorPresenter = require('./../../lib/editor-presenter');
var loader = require('./component-loader');

var SpecOutline = require('./spec-outline');

var Icons = require('./../icons');

var Running = Icons['running'];
var Persisting = require('./persisting');
var SpecResultHeader = require('./spec-result-header');
var RetryCount = require('./retry-count');
var SpecTitle = require('./spec-title');
var SpecLinks = require('./header/spec-links');

var LifecycleButton = require('./lifecycle-button');



var EditorLoading = React.createClass({
	render: function(){
		return (
			<Grid>
				<Row>
					<div className="center-block">
						<br />
						<br />
						<br />
						<h3><i className="fa fa-spinner fa-2x fa-spin"></i> Loading {this.props.spec.title}...</h3>
					</div>
				</Row>
			</Grid>
		);
	}
});


var CommandButton = React.createClass({
	render: function(){
		var self = this;

		var presenter = this.props.presenter;

		var onclick = presenter[this.props.method].bind(presenter);

		var Icon = Icons[this.props.icon];

		return (
			<Button 
				id={this.props.id}
				title={this.props.title} 
				disabled={this.props.disabled} 
				onClick={onclick}><Icon /></Button>

		);
	}
});

var modes = {
	results: {
		buildComponents: spec => spec.buildResults(loader.results)
	},

	editing: {
		buildComponents: spec => spec.editors(loader.editing)
	},

	preview: {
		buildComponents: spec => spec.previews(loader.preview)
	}
}



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
			undoEnabled: false, 
			redoEnabled: false,
			loading: true,
			spec: {name: 'temp'},
			persisting: false,
			lastSaved: null,
			contextualControl: null,
			retryCount: 0,
			header: {hasResults: function(){
				return false;
			}}

		}
	},

	componentDidMount: function(){
		this.presenter = new EditorPresenter(this.props.id);
		this.presenter.activate(modes[this.props.mode], this);
	},

	componentWillUnmount: function(){
		this.presenter.deactivate();
	},

	buildContext: function(){
		if (this.props.mode != 'editing') return null;

		if (this.state.activeContainer){
			return this.state.activeContainer.contextualControl(loader.editing);
		}
		else {
			return null;
		}
	},


	render: function(){
		if (this.state.loading){
			return ( <EditorLoading spec={this.state.spec} /> );
		}

		var headerClass = "";
		if (this.state.spec.active){
			headerClass = "text-primary";
		}

		var resultsHeader = null;
		if (this.state.header.hasResults()){
			resultsHeader = (<SpecResultHeader spec={this.state.spec} />);
		}

		var contextualControl = this.buildContext();

		return (
			<Grid>
				<Row>
					<Col xs={12} md={12}>
					    <h3 ref="header" className={headerClass}>
							<SpecTitle spec={this.state.spec} />
							<span className="pull-right">
								<ButtonGroup style={{marginRight: '30px'}}>
									<CommandButton title="Run the specification" presenter={this.presenter} icon="run" method="run" disabled={false}></CommandButton>
									<CommandButton title="Save outstanding changes to the spec" presenter={this.presenter} icon="save" method="save" disabled={!this.state.undoEnabled}></CommandButton>
									<CommandButton title="Undo the last change" id='undo' presenter={this.presenter} icon="undo" method="undo" disabled={!this.state.undoEnabled}></CommandButton>
									<CommandButton title="Redo the previous change" id='redo' presenter={this.presenter} icon="redo" method="redo" disabled={!this.state.redoEnabled}></CommandButton>
								</ButtonGroup>

								<SpecLinks id={this.state.spec.id} mode={this.props.mode} />

								<LifecycleButton spec={this.state.spec} />
							</span>
						</h3>

						<hr />
					</Col>
				</Row>
				<Row>
					<Col xs={4} md={4}>
						<RetryCount count={this.state.retryCount}/>
						<h4>Outline</h4>
						<SpecOutline outline={this.state.outline} />
						<br />
						<br />
						{contextualControl}
					</Col>
					
					<Col xs={8} md={8}>
					    {resultsHeader}

					    <Persisting spec={this.state.spec} lastSaved={this.state.lastSaved} persisting={this.state.persisting}/>

					    {this.state.components}
					</Col>
				</Row>
			</Grid>
		);
	}
});