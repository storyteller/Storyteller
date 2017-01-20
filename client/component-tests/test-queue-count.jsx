var expect = require('chai').expect;
var QueueCount = require('./../components/queue/queue-count');
var ComponentHarness = require('./component-harness');
var React = require('react');

describe('QueueCount', function(){
	var component, harness;

	before(function(){
		component = (<QueueCount />);
		harness = new ComponentHarness();
		harness.render(component);
	});

	it('is just a blank span', function(){
        	var element = harness.element();
		expect(element.nodeName).to.equal('SPAN');
		expect(element.innerText).to.equal('');
	});

	it('displays the updated counts after some specs are queued', function(){
        	harness.store.dispatch({type: 'queue-state', queued: ['embeds', 'sentence1', 'sentence3']})

        	var element = harness.element();
		expect(element.nodeName).to.equal('BUTTON');
		expect(element.firstChild.innerText).to.equal('3');
	});

	it('displays the updated counts after some are canceled', function(){
        	harness.store.dispatch({type: 'queue-state', queued: ['embeds', 'sentence1', 'sentence3']})
        	harness.store.dispatch({type: 'queue-state', queued: ['embeds']})

		var element = harness.element();

		expect(element.nodeName).to.equal('BUTTON');
		expect(element.firstChild.innerText).to.equal('1');
	});

	it('goes back to hiding when the queue is empty', function(){
        	harness.store.dispatch({type: 'queue-state', queued: ['embeds']})
        	harness.store.dispatch({type: 'queue-state', queued: []})

		var element = harness.element();

		expect(element.nodeName).to.equal('SPAN');
		expect(element.innerText).to.equal('');
	});
    
});
