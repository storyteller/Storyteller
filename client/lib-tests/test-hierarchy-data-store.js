var expect = require('chai').expect;
var _ = require('lodash');

var data = require('./hierarchy-data');
var Hierarchy = require('./../lib/specs/hierarchy');
var Postal = require('postal');
var Counts = require('./../lib/specs/counts');
var Suite = require('./../lib/specs/suite');

var QueueState = require('./../lib/specs/queue-state');
var ResultCache = require('./../lib/specs/result-cache');

function publishEngineMessage(topic, data){
	Postal.publish({
		channel: 'engine',
		topic: topic,
		data: data
	});
}

function hierarchyIsPublishedFromEngine(){
	var cloned = JSON.parse(JSON.stringify(data));

	publishEngineMessage('hierarchy-loaded', {hierarchy: cloned});
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

		Postal.subscribe({
			channel: 'editor',
			topic: '*',
			callback: function(data, env){
				data.topic = env.topic;
				data.channel = 'editor';
				listener.append(data);
			}
		});
	});

	describe('responding to spec-deleted message', () => {
		beforeEach(() => {
			hierarchyIsPublishedFromEngine();

			Postal.publish({
				channel: 'engine',
				topic: 'spec-deleted',
				data: {id: 'embeds'}
			})
		});

		it('should remove the spec from the Hierarchy', () => {
			expect(Hierarchy.findSpec('embeds')).to.be.null;
			expect(Hierarchy.findSuite('Embedded').hasSpec('embeds'))
				.to.be.false;
		});
	});

	describe('responding to a spec added to top level suite', () => {
		beforeEach(() => {
			hierarchyIsPublishedFromEngine();

			Postal.publish({
				channel: 'engine',
				topic: 'spec-added',
				data: {data: {id: 'foo'}, suite: 'Embedded'}
			});
		});

		it('should have the new spec', () => {
			expect(Hierarchy.findSpec('foo')).to.not.be.null;
		});

		it('should add the new spec to the right suite', () => {
			var suite = Hierarchy.findSuite('Embedded');
			expect(suite.hasSpec('foo')).to.be.true;
		});

		it('should broadcast a hierarchy update message', () => {
			assertHierarchyUpdatedWasPublished();
		});
	});

	describe('responding to a spec added to a sub level suite', () => {
		beforeEach(() => {
			hierarchyIsPublishedFromEngine();

			Hierarchy.findSuite('Embedded').addChildSuite('folder1');

			Postal.publish({
				channel: 'engine',
				topic: 'spec-added',
				data: {data: {id: 'foo'}, suite: 'Embedded/folder1'}
			});
		});

		it('should have the new spec', () => {
			expect(Hierarchy.findSpec('foo')).to.not.be.null;
		});

		it('should add the new spec to the right suite', () => {
			var suite = Hierarchy.findSuite('Embedded/folder1');
			expect(suite.hasSpec('foo')).to.be.true;
		});

		it('should broadcast a hierarchy update message', () => {
			assertHierarchyUpdatedWasPublished();
		});
	});

	describe('responding to a spec-data message', () => {
		var data = null;

		beforeEach(() => {
			hierarchyIsPublishedFromEngine();

			data = {
				id: 'sentence1',
				data: {},
				results: [{}, {}, {}]
			};

			Postal.publish({
				channel: 'engine',
				topic: 'spec-data',
				data: data
			});
		});


		it('should publish a spec-changed message', () => {
			var message = findPublishedMessage('spec-changed');

			expect(message).to.not.be.null;
			expect(message).to.not.be.undefined;
			expect(message).to.deep.equal({
				id: 'sentence1',
				topic: 'spec-changed',
				channel: 'editor'
			});
		});

		it('should store the new data', () => {
			expect(Hierarchy.findSpec('sentence1')).to.not.be.null;
		});

		it('should replace the results for that spec', () => {
			var allResults = ResultCache.resultsFor('sentence1');

			expect(allResults[0]).to.equal(data.results[0]);
			expect(allResults[1]).to.equal(data.results[1]);
			expect(allResults[2]).to.equal(data.results[2]);
		});

	});

	it('can find a suite by path', function(){
		hierarchyIsPublishedFromEngine();

		var suite = Hierarchy.findSuite(['Sentences']);
		expect(suite.name).to.equal('Sentences');

		var child = new Suite({name: 'Child1'}, suite);
		suite.suites.push(new Suite({name: 'Child1'}, suite));

		expect(Hierarchy.findSuite(['Sentences', 'Child1']).name).to.equal(child.name);
	
		expect(Hierarchy.findSuite(['Sentences', 'Nonsense'])).to.be.null;
	});

	it('initially has no filters', function(){
		expect(Hierarchy.statusFilter()).to.equal('any');
		expect(Hierarchy.lifecycleFilter()).to.equal('any');
	});

	it('can tell you if it has any filter', function(){
		expect(Hierarchy.hasFilter()).to.be.false;

		changeStatusFilter('failed');
		expect(Hierarchy.hasFilter()).to.be.true;

		changeStatusFilter('any');
		changeLifecyleFilter('Acceptance');

		expect(Hierarchy.hasFilter()).to.be.true;
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


	it('tracks the state in the queue-state message', function(){
		hierarchyIsPublishedFromEngine();

		publishEngineMessage('queue-state', {queued: ['embeds', 'set1', 'set2']});

		expect(Hierarchy.findSpec('embeds').state).to.equal('queued');
		expect(Hierarchy.findSpec('set1').state).to.equal('queued');
		expect(Hierarchy.findSpec('sentence1').state).to.equal('none');
		expect(Hierarchy.findSpec('sentence2').state).to.equal('none');


		publishEngineMessage('queue-state', {queued: ['sentence1'], running: 'sentence2'});

		expect(Hierarchy.findSpec('embeds').state).to.equal('none');
		expect(Hierarchy.findSpec('set1').state).to.equal('none');
		expect(Hierarchy.findSpec('sentence1').state).to.equal('queued');
		expect(Hierarchy.findSpec('sentence2').state).to.equal('running');
		

	});

	it('can handle suite-added at the root level', () => {
		hierarchyIsPublishedFromEngine();

		Postal.publish({
			channel: 'engine',
			topic: 'suite-added',
			data: {path: 'Suite1'}
		});

		var s = Hierarchy.findSuite('Suite1');

		expect(s).to.not.be.null;
		expect(s.name).to.equal('Suite1');
		expect(s.path).to.equal('Suite1');

		assertHierarchyUpdatedWasPublished();
	});

	it('can handle suite-added at a child level', () => {
		hierarchyIsPublishedFromEngine();

		Postal.publish({
			channel: 'engine',
			topic: 'suite-added',
			data: {path: 'Embedded/Suite1'}
		});

		var s = Hierarchy.findSuite('Embedded/Suite1');

		expect(s).to.not.be.null;
		expect(s.name).to.equal('Suite1');
		expect(s.path).to.equal('Embedded/Suite1');

		assertHierarchyUpdatedWasPublished();
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

		var counts = QueueState.runningCounts();

		expect(counts.rights).to.equal(1);
		expect(counts.wrongs).to.equal(2);
		expect(counts.errors).to.equal(3);
		expect(counts.invalids).to.equal(4);

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

		var lastResults = ResultCache.lastResultFor(spec.id);

		expect(lastResults.counts.rights).to.equal(1);
		expect(lastResults.counts.wrongs).to.equal(2);
		expect(lastResults.counts.errors).to.equal(3);
		expect(lastResults.counts.invalids).to.equal(4);

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
			expect(summary.acceptance).to.equal(21);
		});

		it('counts the Regression specs', function(){
			expect(summary.regression).to.equal(3);
		});

		it('has the total', function(){
			expect(summary.total).to.equal(24);
		});

	});
});