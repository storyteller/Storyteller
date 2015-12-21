var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var $ = require('jquery');
var Hierarchy = require('./../lib/stores/hierarchy');

var SpecProgressBar = require('./../components/header/spec-progress-bar');

var data = require('./../lib-tests/hierarchy-data');

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

describe('The SpecProgressBar', function(){
	var component;

	beforeEach(function(){
		Postal.reset();
		Hierarchy.reset();

		hierarchyIsPublishedFromEngine();

		component = TestUtils.renderIntoDocument(
		  <SpecProgressBar />
		);
	});

	it('shows nothing in the initial state', function(){
		expect(component.getDOMNode()).to.be.null;
	});

	it('shows the progress bar with no results with the initial steps but no counts', function(){
		publishEngineMessage('spec-progress', {
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 0, wrongs: 0, errors: 0, invalids: 0}
		});

		var progressBar = component.getDOMNode().children[1];
		var span = $('span', progressBar).get(0);

		expect(progressBar.tagName).to.equal('DIV');
		expect(progressBar.className).to.equal('progress');
		expect(progressBar.firstChild.className).to.equal('progress-bar');

		expect(span.getAttribute('min')).to.equal('0');
		expect(span.getAttribute('max')).to.equal('10');
	});

	it('shows as succeeding if non-zero success counts with no wrongs or errors', function(){
		publishEngineMessage('spec-progress', {
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 3, wrongs: 0, errors: 0, invalids: 0}
		});

		var progressBar = component.getDOMNode().children[1];

		expect(progressBar.tagName).to.equal('DIV');
		expect(progressBar.firstChild.className).to.equal('progress-bar progress-bar-success');

	});

	it('shows as failing if non-zero failures or errors', function(){
		publishEngineMessage('spec-progress', {
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 3, wrongs: 2, errors: 0, invalids: 0}
		});

		var progressBar = component.getDOMNode().children[1];

		expect(progressBar.tagName).to.equal('DIV');
		expect(progressBar.firstChild.className).to.equal('progress-bar progress-bar-danger');

	});

	it('hides the progress bar after spec completion', function(){
		publishEngineMessage('spec-progress', {
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 3, wrongs: 2, errors: 0, invalids: 0}
		});

		var results = {
			counts: {rights: 0, wrongs: 0, errors: 1, invalids: 0}
		}
		expect(component.getDOMNode()).to.not.be.null;
		publishEngineMessage('queue-state', {running: null, queued: []});
		expect(component.getDOMNode()).to.be.null;
	});
});
