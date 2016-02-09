"use strict";

var uuid = require('node-uuid');
var StepHolder = require('./step-holder');
var _ = require('lodash');

class Section{
	constructor(data, fixture){
		if (data == undefined || data == null){
			throw new Error('NULL data going into Section');
		}

		StepHolder.call(this, data.id, fixture, 'add steps or comments...');

		if (fixture == null){
			fixture = library.find(data.key);
		}

		if (fixture == null){
			throw new Error('Unknown Fixture ' + data.key);
		}

		this.key = fixture.key;
		this.type = 'section';
		this.fixture = fixture;
		this.title = this.fixture.title;
		this.results = {};

		var activeCells = data.activeCells || {};
		this.activeCells = {};
		for (var key in activeCells){
			var raw = activeCells[key];
			if (raw == true || raw.toString().toLowerCase() == 'true'){
				this.activeCells[key] = true;
			}
			else {
				this.activeCells[key] = false;
			}
		}

		this.readSteps(data);
	}

	toggleColumn(key){
		this.activeCells[key] = !this.isCellActive(key);
	}

	isCellActive(key){
		if (this.activeCells.hasOwnProperty(key)){
			return this.activeCells[key];
		}
		else {
			return true;
		}
	}

	clearResults(){
		this.results = {};
		this.steps.forEach(s => s.clearResults());
	}

	allErrors(){
		return _.values(this.results).filter(x => {
			return x != null && x.hasOwnProperty('status') && x.status == 'error'
		}).map(x => x.error);
	}

	logStepResult(result){
		var position = result.position || 'root';

		this.results[position] = result;
	}

	logSetVerificationResult(result){
		this.results.extras = result.extras;
		this.results.wrongOrders = result.wrongOrdered;
		
		var steps = {};
		this.steps.forEach(s => steps[s.id] = s);
		
		result.matches.forEach(id => steps[id].setStatus('success'));
		result.missing.forEach(id => steps[id].setStatus('missing'));
	}

	logResult(result){
		if (result.type == 'step-result'){
			this.logStepResult(result);
		}

		if (result.type == 'set-verification-result'){
			this.logSetVerificationResult(result);
		}
	}

	buildResults(loader){
		var elements = [];

		if (this.results.before){
			elements.push(loader.errorBox({title: 'Error before the Section', error: this.results.before.error}));
		}


		if (this.results.setup && this.results.setup.status != 'ok'){
			elements.push(loader.errorBox({title: 'SetUp Error', error: this.results.setup.error}));
		}

		// TODO -- if you ever have time, do this with _.flatten instead
		this.steps.forEach(step => {
			var element = step.buildResults(loader);
			if (element instanceof Array){
				elements = elements.concat(element);
			}
			else{
				elements.push(element);
			}
		});

		if (this.results.teardown && this.results.teardown.status != 'ok'){
			elements.push(loader.errorBox({title: 'TearDown Error', error: this.results.teardown.error}));
		}

		return loader.container({title: this.fixture.title, components: elements});
	}

	children(){
		return this.steps;
	}

	write(){
		var steps = this.writeSteps();
		for (var key in this.activeCells){
			if (this.activeCells[key] == false){
				steps.forEach(step => {
					delete step.cells[key];
				});
			}
		}

		return {
			key: this.key,
			type: 'section',
			steps: steps,
			id: this.id,
			activeCells: this.activeCells
		}
	}

	preview(loader){
		var components = this.buildComponents(x => {
			return x.preview(loader);
		});

		return loader.container({title: this.fixture.title, components: components});
	}

	editor(loader, deleteSubject){
		var components = this.buildComponents(x => {
			return x.editor(loader);
		});

		if (!deleteSubject){
			deleteSubject = this;
		}

		var adder = this.adder.editor(loader);

		return loader.container({adder: adder, title: this.fixture.title, components: components, subject: this, deleteSubject: deleteSubject});
	}

	grammars(){
		return _.sortBy(this.fixture.grammars, x => {
			return x.title;
		});
	}

}



module.exports = Section;