var expect = require('chai').expect;
var _ = require('lodash');

var data = require('./hierarchy-data');
var Hierarchy = require('./../lib/specs/hierarchy');
var Postal = require('postal');
var Counts = require('./../lib/specs/counts');

function publishEngineMessage(topic, data){
	Postal.publish({
		channel: 'engine',
		topic: topic,
		data: data
	});
}

function hierarchyIsPublishedFromEngine(){
	publishEngineMessage('hierarchy-loaded', {hierarchy: data});
}

function changeLifecyleFilter(value){
	Postal.publish({
		channel: 'explorer',
		topic: 'lifecycle-filter-changed',
		data: {lifecycle: value}
	});
}

function changeStatusFilter(value){
	Postal.publish({
		channel: 'explorer',
		topic: 'spec-status-filter-changed',
		data: {status: value}
	});
}

var listener = {
	events: [],

	clear: function(){
		this.events = [];
	},

	append: function(data){
		//console.log(JSON.stringify(data));
		this.events.push(data);
		
	}
};



function findPublishedMessage(topic){
	return _.find(listener.events, function(x){
		return x.topic == topic;
	});
}

function assertHierarchyUpdatedWasPublished(){
	var message = findPublishedMessage('hierarchy-updated');
	expect(message).to.not.be.null;
	expect(message).to.not.be.undefined;
}


function assertQueueUpdatedWasPublished(){
	var message = findPublishedMessage('queue-updated');
	expect(message).to.not.be.null;
	expect(message).to.not.be.undefined;
}


describe('Hierarchy data store functions', function(){
	beforeEach(function(){
		Postal.reset();
		Hierarchy.reset();
		listener.clear();

		Postal.subscribe({
		    channel  : "explorer",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		        listener.append(data);
		    }
		});
	});

	it('initially has no filters', function(){
		expect(Hierarchy.statusFilter()).to.equal('any');
		expect(Hierarchy.lifecycleFilter()).to.equal('any');
	});

	it('can change the status filter', function(){
		changeStatusFilter('failed');

		assertHierarchyUpdatedWasPublished();
		expect(Hierarchy.statusFilter()).to.equal('failed');
	});

	it('can change the lifecycle filter', function(){
		changeLifecyleFilter('Acceptance');

		assertHierarchyUpdatedWasPublished();
		expect(Hierarchy.lifecycleFilter()).to.equal('Acceptance');
	});

	it('the initial queue state is empty', function(){
		expect(Hierarchy.queuedSpecs().length).to.equal(0);
	});

	it('can receive the initial hierarchy loaded message', function(){
		hierarchyIsPublishedFromEngine();
		assertHierarchyUpdatedWasPublished();
	});

	it('allSpecs() does not blow chunks', function(){
		hierarchyIsPublishedFromEngine();

		_.each(Hierarchy.allSpecs(), function(x){
			console.log(x.id + ', ' + x.lifecycle);
		});
	});

	it('stores all the specs by id', function(){
		hierarchyIsPublishedFromEngine();

		expect(Hierarchy.findSpec('set1')).to.not.be.null;;
	});


	it('builds the spec queue on demand', function(){
		hierarchyIsPublishedFromEngine();

		publishEngineMessage('queue-state', {queued: ['embeds', 'set1', 'set2']});

		var ids = _.map(Hierarchy.queuedSpecs(), function(x){
			return x.id;
		});

		expect(ids).to.deep.equal(['embeds', 'set1', 'set2']);
	});

	it('handles spec-canceled', function(){
		hierarchyIsPublishedFromEngine();

		listener.clear();

		publishEngineMessage('spec-canceled', {id: 'embeds'});

		assertHierarchyUpdatedWasPublished();

		expect(Hierarchy.findSpec('embeds').state).to.equal('none');
	});

	it('handles spec-progress', function(){
		hierarchyIsPublishedFromEngine();

		listener.clear();
		publishEngineMessage('spec-progress', {id: 'embeds', counts: {rights: 1, wrongs: 2, errors: 3, invalids: 4}});
	
		var spec = Hierarchy.findSpec('embeds');
		expect(spec.state).to.equal('running');

		expect(spec.runningCounts.rights).to.equal(1);
		expect(spec.runningCounts.wrongs).to.equal(2);
		expect(spec.runningCounts.errors).to.equal(3);
		expect(spec.runningCounts.invalids).to.equal(4);

		assertHierarchyUpdatedWasPublished();
	});

	it('receiving spec-progress sends spec-execution-state', function(){
		hierarchyIsPublishedFromEngine();

		listener.clear();
		publishEngineMessage('spec-progress', {id: 'embeds', counts: {rights: 1, wrongs: 2, errors: 3, invalids: 4}, step: 1, total: 10});
	
		var message = findPublishedMessage('spec-execution-state');
		expect(message).to.not.be.null;
		expect(message).to.not.be.undefined;

		expect(message.counts).to.not.be.null;
		expect(message.spec).to.equal(Hierarchy.findSpec('embeds'));
		expect(message.step).to.equal(1);
		expect(message.total).to.equal(10);
	});


	it('handles spec-execution-completed', function(){
		hierarchyIsPublishedFromEngine();
		listener.clear();

		var results = {
			counts: new Counts(1,2,3,4)
		}

		publishEngineMessage('spec-execution-completed', {id: 'embeds', results: results});
	
		var spec = Hierarchy.findSpec('embeds');
		expect(spec.state).to.equal('none');

		expect(spec.results.counts.rights).to.equal(1);
		expect(spec.results.counts.wrongs).to.equal(2);
		expect(spec.results.counts.errors).to.equal(3);
		expect(spec.results.counts.invalids).to.equal(4);

		assertQueueUpdatedWasPublished();
		assertHierarchyUpdatedWasPublished();
	});

	function allFilteredSpecNames(){
		var filtered = Hierarchy.filteredHierarchy();
		return _.map(filtered.allSpecs(), function(x){
			return x.id;
		});
	}


	describe('Hierarchy Filtering by lifecycle only', function(){
		beforeEach(function(){
			hierarchyIsPublishedFromEngine();
		});

		// embeds -> Regression
		// general1 -> Acceptance

		it('default filter has all lifecycles', function(){
			var names = allFilteredSpecNames();

			expect(names.indexOf('embeds') > -1).to.be.true;
			expect(names.indexOf('general1') > -1).to.be.true;
		});

		it('applies only a lifecycle filter to Regression', function(){
			changeLifecyleFilter('Regression');

			var names = allFilteredSpecNames();

			expect(names.indexOf('embeds') > -1).to.be.true;
			expect(names.indexOf('general1') > -1).to.be.false;
		});

		it('applies only a lifecycle filter to Regression', function(){
			changeLifecyleFilter('Acceptance');

			var names = allFilteredSpecNames();

			expect(names.indexOf('embeds') > -1).to.be.false;
			expect(names.indexOf('general1') > -1).to.be.true;
		});
	});

	describe('Hierarchy Filtering by status only', function(){
		// embeds --> success
		// general1 --> failed
		// general2 --> none

		beforeEach(function(){
			hierarchyIsPublishedFromEngine();



			publishEngineMessage('spec-execution-completed', {
				id: 'embeds', 
				results: {
					counts: new Counts(1, 0, 0, 0)
				}
			});

			publishEngineMessage('spec-execution-completed', {
				id: 'general1', 
				results: {
					counts: new Counts(0, 1, 0, 0)
				}
			});


		});

		it('default is any', function(){
			var names = allFilteredSpecNames();

			expect(names.indexOf('embeds') > -1).to.be.true;
			expect(names.indexOf('general1') > -1).to.be.true;
			expect(names.indexOf('general2') > -1).to.be.true;
		});

		it('change to success', function(){
			changeStatusFilter('success');

			var names = allFilteredSpecNames();

			expect(names.indexOf('embeds') > -1).to.be.true;
			expect(names.indexOf('general1') > -1).to.be.false;
			expect(names.indexOf('general2') > -1).to.be.false;
		});

		it('change to success', function(){
			changeStatusFilter('failed');

			var names = allFilteredSpecNames();

			expect(names.indexOf('embeds') > -1).to.be.false;
			expect(names.indexOf('general1') > -1).to.be.true;
			expect(names.indexOf('general2') > -1).to.be.false;
		});

		it('change to none', function(){
			changeStatusFilter('none');

			var names = allFilteredSpecNames();

			expect(names.indexOf('embeds') > -1).to.be.false;
			expect(names.indexOf('general1') > -1).to.be.false;
			expect(names.indexOf('general2') > -1).to.be.true;
		});
	});

	describe('Creating a summary', function(){
		var summary = null;

		beforeEach(function(){
			var data = require('./../all-spec-data');
			Hierarchy.reset();
			Postal.publish({
				channel: 'engine',
				topic: 'hierarchy-loaded',
				data: {hierarchy: data.hierarchy}
			});

			summary = Hierarchy.summary();
		});

		it('counts the Acceptance specs', function(){
			expect(summary.acceptance).to.equal(19);
		});

		it('counts the Regression specs', function(){
			expect(summary.regression).to.equal(3);
		});

		it('has the total', function(){
			expect(summary.total).to.equal(22);
		});

	});
});