var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var Hierarchy = require('./../lib/specs/hierarchy');
var $ = require('jquery');


var QueueCount = require('./../components/queue/queue-count');

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

describe('QueueCount', function(){
	var component;

	beforeEach(function(){
		Postal.reset();
		Hierarchy.reset();

		hierarchyIsPublishedFromEngine();

		component = TestUtils.renderIntoDocument(
		  <QueueCount />
		);
	});

	it('is just a blank span', function(){
		var element = component.getDOMNode();
		expect(element.nodeName).to.equal('SPAN');
		expect(element.innerText).to.equal('');
	});

	it('displays the updated counts after some specs are queued', function(){
		Postal.publish({
			channel: 'engine',
			topic: 'queue-state',
			data: {queued: ['embeds', 'sentence1', 'sentence3']}
		});

		var element = component.getDOMNode();
		expect(element.nodeName).to.equal('BUTTON');
		expect(element.firstChild.innerText).to.equal('3');
	});

	it('displays the updated counts after some are canceled', function(){
		Postal.publish({
			channel: 'engine',
			topic: 'queue-state',
			data: {queued: ['embeds', 'sentence1', 'sentence3']}
		});

		Postal.publish({
			channel: 'engine',
			topic: 'queue-state',
			data: {queued: ['embeds']}
		});

		var element = component.getDOMNode();

		expect(element.nodeName).to.equal('BUTTON');
		expect(element.firstChild.innerText).to.equal('1');
	});

	it('goes back to hiding when the queue is empty', function(){
		Postal.publish({
			channel: 'engine',
			topic: 'spec-queued',
			data: {id: 'sentence1'}
		});

		Postal.publish({
			channel: 'engine',
			topic: 'spec-canceled',
			data: {id: 'sentence1'}
		});

		var element = component.getDOMNode();

		expect(element.nodeName).to.equal('SPAN');
		expect(element.innerText).to.equal('');
	});
});
