// This is the data store for all information regarding the collection
// of specifications in a Storyteller.js project
var Postal = require('postal');
var Suite = require('./suite');
var _ = require('lodash');
var Counts = require('./counts');

var specs = {};
var top = new Suite({});
var results = {}; // stores the final result of spec-execution-completion
var lifecycle = 'any';
var status = 'any';


var queue = [];

var SpecificationStore = require('./../specification-store');


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

var handlers = {};
handlers['hierarchy-loaded'] = function(data){
	top = new Suite(data.hierarchy);
	specs = {};

	top.allSpecs().forEach(x => specs[x.id] = x);


	publishHierarchyChanged();
}

handlers['spec-canceled'] = function(data){
	var spec = specs[data.id];
	spec.state = 'none';

	if (spec.results){
		SpecificationStore.readResults(spec.id, spec.results);
	}
	else {
		SpecificationStore.clearResults(spec.id);
	}

	publishHierarchyChanged();
}

handlers['spec-progress'] = function(data){
	var spec = specs[data.id];
	var counts = new Counts(data.counts);

	spec.state = 'running';
	spec.recordRunningResults(counts);

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
	var spec = specs[data.id];

	data.results.counts = new Counts(data.results.counts);

	spec.recordResults(data.results);

	SpecificationStore.readResults(data.id, data.results);

	publishHierarchyChanged();
	publishQueueChanged();
}

handlers['queue-state'] = data => {
	_.values(specs).forEach(s => s.state = 'none');

	queue = data.queued.map(id => specs[id]);

	queue.forEach(s => s.state = 'queued');

	if (data.running){
		specs[data.running].state = 'running';
	}

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

	reset: function(){
		specs = {};
		top = new Suite({});
		results = {};
		queue = [];
		lifecycle = 'any';
		status = 'any';

		resetSubscriptions();
	},

	findSpec: function(id){
		if (specs.hasOwnProperty(id)) return specs[id];

		return null;
	},

	findSuite: function(names){
		var suite = top;
		names.forEach(x => {
			if (suite == null) return null;
			suite = suite.childSuite(x);
		});

		if (suite == undefined) return null;

		return suite;
	}
}