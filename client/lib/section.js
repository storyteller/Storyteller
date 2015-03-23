var uuid = require('node-uuid');
var StepHolder = require('./step-holder');
var _ = require('lodash');

class Section{
	constructor(data, fixture){
		if (data == undefined || data == null){
			throw new Error('NULL data going into Section');
		}

		StepHolder.call(this, data.id, fixture);

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

		this.readSteps(data);
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


		if (this.results.setup){
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

		if (this.results.teardown){
			elements.push(loader.errorBox({title: 'TearDown Error', error: this.results.teardown.error}));
		}

		return loader.container({title: this.fixture.title, components: elements});
	}

	children(){
		return this.steps;
	}

	// for persistence
	write(){
		return {
			key: this.key,
			type: 'section',
			steps: this.writeSteps(),
			id: this.id
		}
	}

	// for execution
	pack(){
		return {
			key: this.key,
			id: this.id,
			type: 'section',
			steps: this.packSteps()
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

		return loader.container({title: this.fixture.title, components: components, subject: this, deleteSubject: deleteSubject});
	}

	grammars(){
		return _.sortBy(this.fixture.grammars, x => {
			return x.title;
		});
	}

}



module.exports = Section;