// This is the data store for all information regarding the collection
// of specifications in a Storyteller.js project
var Postal = require('postal');
var Suite = require('./suite');
var _ = require('lodash');
var Counts = require('./counts');
var QueueState = require('./queue-state');
var ResultCache = require('./result-cache');
var FixtureLibrary = require('./../fixture-library');
var Specification = require('./../specification');


var specs = {};
var top = new Suite({});
var results = {}; // stores the final result of spec-execution-completion
var lifecycle = 'any';
var status = 'any';


var queue = [];


function publishHierarchyChanged(){
	Postal.publish({
		channel: 'explorer',
		topic: 'hierarchy-updated',
		data: {}
	});
}

function publishQueueChanged(){
	Postal.publish({
		channel: 'explorer',
		topic: 'queue-updated',
		data: {}
	});
}

var recordResult = function(data){
	var spec = specs[data.spec];
	var step = spec.find(data.id);

	if (!step){
		throw new Error('Unable to find a step with id ' + data.id + ' for spec ' + data.spec);
	}

	step.logResult(data);

	Postal.publish({
		channel: 'editor',
		topic: 'spec-changed',
		data: {id: data.spec}
	});
}

var handlers = {};

handlers['step-result'] = recordResult;
handlers['set-verification-result'] = recordResult;

var library = null;
var systemRecycled = null;
var setLibrary = function(lib){
	library = lib;

	for (var key in specs){
		var old = specs[key];

		if (old.mode == 'full'){
			var specData = old.write();
			var newSpec = new Specification(specData, library);
			specs[key] = newSpec;
			Postal.publish({
				channel: 'editor',
				topic: 'spec-changed',
				data: {id: key}
			});
		}
	}

	Postal.publish({
		channel: 'explorer',
		topic: 'fixtures-loaded',
		data: {}
	});
}

handlers['system-recycled'] = function(data){
	systemRecycled = data;
	setLibrary(new FixtureLibrary(data.fixtures));
}


var storeSpec = function(spec){
	specs[spec.id] = spec;

	var parent = _.find(top.allSuites(), x => x.hasSpec(spec.id));
	if (parent){
		parent.replaceSpec(spec);
	}

	Postal.publish({
		channel: 'editor',
		topic: 'spec-changed',
		data: {id: spec.id}
	});
}

handlers['spec-data'] = function(data){
	var spec = new Specification(data.data, library);
	spec.id = data.id;
	specs[spec.id] = spec;
	ResultCache.replaceResults(spec.id, data.results);

	storeSpec(spec);
}

function findSuite(names){
	var suite = top;

	if (names && !(names instanceof Array)){
		names = names.split('/');
	}

	names.forEach(x => {
		if (suite == null) return null;
		suite = suite.childSuite(x);
	});

	if (suite == undefined) return null;

	return suite;
}

handlers['spec-added'] = function(data){
	var spec = new Specification(data.data, library);
	specs[spec.id] = spec;

	var parent = findSuite(data.suite);
	if (parent){
		parent.addSpec(spec);
	}

	publishHierarchyChanged();

	Postal.publish({
		channel: 'explorer',
		topic: 'go-to-spec',
		data: {id: spec.id}
	});
}

handlers['suite-added'] = function(data){
	var names = data.path.split('/');
	if (names.length == 1){
		top.addChildSuite(names[0]);
	}
	else {
		var parent = top;
		for (var i = 0; i < names.length - 1; i++){
			parent = parent.childSuite(names[i]);
		}

		var name = _.last(names);
		parent.addChildSuite(name);

		parent.suites.forEach(x => console.log('child: ' + x.name));
	}

	publishHierarchyChanged();
}

handlers['spec-deleted'] = function(data){
	delete specs[data.id];
	var parent = _.find(top.allSuites(), x => x.hasSpec(data.id));
	if (parent){
		parent.removeSpec(data.id);
	}

	publishHierarchyChanged();

}

handlers['hierarchy-loaded'] = function(data){
	top = new Suite(data.hierarchy);
	specs = {};

	top.allSpecs().forEach(x => specs[x.id] = x);


	publishHierarchyChanged();
}

handlers['spec-canceled'] = function(data){
	var spec = specs[data.id];

	spec.clearResults();

	publishHierarchyChanged();
}

handlers['spec-progress'] = function(data){
	var spec = specs[data.id];
	var counts = new Counts(data.counts);

	QueueState.markRunning(data.id, counts);

	var outgoing = {
		spec: spec,
		counts: counts,
		step: data.step,
		total: data.total,
		running: true
	};

	Postal.publish({
		channel: 'explorer',
		topic: 'spec-execution-state',
		data: outgoing
	})

	publishHierarchyChanged();
}

handlers['spec-execution-completed'] = function(data){
	ResultCache.record(data);

	specs[data.id].clearResults();

	publishHierarchyChanged();
	publishQueueChanged();
}

handlers['queue-state'] = data => {
	QueueState.store(data);

	queue = data.queued.map(id => specs[id]);

	publishQueueChanged();

	if (!data.running){
		Postal.publish({
			channel: 'explorer',
			topic: 'spec-execution-state',
			data: {
				running: false
			}
		})
	}
}



function resetSubscriptions(){
	Postal.subscribe({
		channel: 'engine',
		topic: '*',
		callback: function(data, envelope){
			var topic = envelope.topic;
			if (handlers.hasOwnProperty(topic)){
				handlers[topic](data);
			}
		}
	});

	Postal.subscribe({
		channel: 'explorer',
		topic: 'spec-status-filter-changed',
		callback: function(data){
			status = data.status;
			publishHierarchyChanged();
		}
	});

	Postal.subscribe({
		channel: 'explorer',
		topic: 'lifecycle-filter-changed',
		callback: function(data){
			lifecycle = data.lifecycle;
			publishHierarchyChanged();
		}
	});
}

var alwaysTrue = function(x){
	return true;
}

function toLifecycleFilter(){
	if (lifecycle == 'any') return alwaysTrue;

	if (lifecycle == 'Regression'){
		return spec => spec.lifecycle == 'Regression';
	}

	if (lifecycle == 'Acceptance'){
		return spec => spec.lifecycle == 'Acceptance';
	}
}

function toStatusFilter(){
	if (status == 'any') return alwaysTrue;

	return spec => spec.status() == status;
}

module.exports = {
	lifecycleFilter: function(){
		return lifecycle;
	},

	statusFilter: function(){
		return status;
	},

	hasFilter: function(){
		return (status != 'any' || lifecycle != 'any');
	},

	currentFilter(){
		if (status == 'any' && lifecycle == 'any') return spec => true;
	
		var lifecycleFilter = toLifecycleFilter();
		var statusFilter = toStatusFilter();

		return spec => lifecycleFilter(spec) && statusFilter(spec);
	},

	filteredHierarchy: function(){
		var filter = this.currentFilter();
		return top.filter(filter);
	},

	top: function(){
		return top;
	},

	allSpecs: function(){
		if (top == null) return [];

		return top.allSpecs();
	},

	summary: function(){
		return top.summary();
	},

	queuedSpecs: function(){
		return queue;
	},

	hasData: function(id){
		return specs.hasOwnProperty(id);
	},

	reset: function(){
		QueueState.clear();
		ResultCache.clear();

		specs = {};
		top = new Suite({});
		results = {};
		queue = [];
		lifecycle = 'any';
		status = 'any';
		library = null;
		systemRecycled = null;

		resetSubscriptions();
	},

	clearData: function(){
		specs = {};
	},

	findSpec: function(id){
		if (specs.hasOwnProperty(id)) return specs[id];

		return null;
	},

	findSuite: function(names){
		return findSuite(names);
	},


	errorCount: function(){
		if (library == null) return 0;

		return library.errorCount();
	},

	errorReport: function(){
		if (library == null) return [];

		return library.errorReport();
	},

	fixtures: function(){
		return library;
	},

	storeData: function(id, data){
		var spec = new Specification(data, library);
		spec.id = id;
		storeSpec(spec);
	},

	readResults: function(id, results){
		if (this.hasData(id)){
			var spec = this.findSpec(id);
			spec.readResults(results);
			Postal.publish({
				channel: 'editor',
				topic: 'spec-changed',
				data: {id: id}
			});
		}
	},

	requestData: function(id){
		Postal.publish({
			channel: 'engine-request',
			topic: 'spec-data-requested',
			data: {
				type: 'spec-data-requested',
				id: id
			}
		})

	},

	setLibrary: function(lib){
		setLibrary(lib);
	},

	systemRecycled: function(){
		return systemRecycled;
	},

	recordResult: function(data){
		if (this.hasData(data.spec)){
			var spec = this.findSpec(data.spec);
			var step = spec.find(data.id);

			if (!step){
				throw new Error('Unable to find a step with id ' + data.id + ' for spec ' + data.spec);
			}

			step.logResult(data);

			Postal.publish({
				channel: 'editor',
				topic: 'spec-results-changed',
				data: {id: data.spec}
			});
		}
	}
}