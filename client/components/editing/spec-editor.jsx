/** @jsx React.DOM */

var React = require("react");
var StepAdderPlaceHolder = require('./step-adder-placeholder');
var StepAdder = require('./step-adder');
var Router = require('react-router');


var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');

var EditorPresenter = require('./../../lib/editor-presenter');
var loader = require('./component-loader');

var SpecOutline = require('./spec-outline');

var Icons = require('./../icons');

var Running = Icons['running'];
var Persisting = require('./persisting');
var SpecResultHeader = require('./spec-result-header');


var LifecycleButton = require('./lifecycle-button');

var LinkButton = React.createClass({
	render: function(){
		var onclick = e => {
			window.location = this.props.href;
			e.stopPropagation();
		}

		return (<Button onClick={onclick}>{this.props.text}</Button>);
	}
});

var EditorLoading = React.createClass({
	render: function(){
		return (
			<Grid>
				<Row>
					<div className="center-block">
						<br />
						<br />
						<br />
						<h3><i className="fa fa-spinner fa-2x fa-spin"></i> Loading {this.props.spec.name}...</h3>
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
				onClick={onclick}><Icon />&nbsp;</Button>

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
			window.location = '#/spec/results/' + this.state.id;
		}
	},

	getInitialState: function(){
		// yeah, I know this is an "anti-pattern", but it makes
		// isolated testing much easier.
		var id = this.props.params.id; 
		var mode = this.props.mode || 'editing';

		return {
			components: [],
			outline: {title: 'placeholder', active: true, children: []},
			undoEnabled: false, 
			redoEnabled: false,
			loading: true,
			spec: {name: 'temp'},
			id: id,
			persisting: false,
			lastSaved: null,
			mode: mode,
			contextualControl: null,
			header: {hasResults: function(){
				return false;
			}}

		}
	},

	componentDidMount: function(){
		this.presenter = new EditorPresenter(this.state.id);
		this.presenter.activate(modes[this.state.mode], this);
	},

	componentWillUnmount: function(){
		this.presenter.deactivate();
	},

	buildContext: function(){
		if (this.state.mode != 'editing') return null;

		if (this.state.activeContainer){
			return this.state.activeContainer.contextualControl(loader.editing);
		}
		else {
			return null;
		}
	},

	buildLinks: function(){
		var links = [];
		if (this.state.mode != 'editing'){
			var elem = (<LinkButton href={'#/spec/editing/' + this.state.id} text="Editor"/>);
			links.push(elem);
		}

		if (this.state.mode != 'preview'){
			var elem = (<LinkButton href={'#/spec/preview/' + this.state.id} text="Preview"/>);
			links.push(elem);
		}

		if (this.state.mode != 'results'){
			var elem = (<LinkButton href={'#/spec/results/' + this.state.id} text="Results" />);
			links.push(elem);
		}

		return links;
	},

	render: function(){
		if (this.state.loading){
			return ( <EditorLoading spec={this.state.spec} /> );
		}

		var headerClass = "";
		if (this.state.spec.active){
			headerClass = "text-primary";
		}

		var links = this.buildLinks();

		var resultsHeader = null;
		if (this.state.header.hasResults()){
			resultsHeader = (<SpecResultHeader spec={this.state.header} />);
		}

		var contextualControl = this.buildContext();

		return (
			<Grid>
				<Row>
					<Col xs={12} md={12}>
					    <h3 className={headerClass}>
							{this.state.spec.title}
							<span className="pull-right">
								<ButtonGroup style={{marginRight: '30px'}}>
									<CommandButton title="Run the specification" presenter={this.presenter} icon="run" method="run" disabled={false}></CommandButton>
									<CommandButton title="Save outstanding changes to the spec" presenter={this.presenter} icon="save" method="save" disabled={!this.state.undoEnabled}></CommandButton>
									<CommandButton title="Undo the last change" id='undo' presenter={this.presenter} icon="undo" method="undo" disabled={!this.state.undoEnabled}></CommandButton>
									<CommandButton title="Redo the previous change" id='redo' presenter={this.presenter} icon="redo" method="redo" disabled={!this.state.redoEnabled}></CommandButton>
								</ButtonGroup>

								<ButtonGroup>
									{links}
								</ButtonGroup>

								<LifecycleButton spec={this.state.header} />
							</span>
						</h3>

						<hr />
					</Col>
				</Row>
				<Row>
					<Col xs={4} md={4}>
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