var React = require('react');
var expect = require('chai').expect;
var ComponentHarness = require('./component-harness');
var QueuePage = require('./../components/queue/queue-page');


describe('The Queue Page', function(){
	var component, harness;

	beforeEach(function(){
        component = (<QueuePage />);
        harness = new ComponentHarness();
        harness.render(component);
	});

	it('should show all the currently queued specs', function(){
        harness.store.dispatch({type: 'queue-state', running: null, queued: ['general1', 'general2', 'general3']});

		var displayedNames = [];
        
        harness.$('span.queued-spec-name').each((i, elem) => {
			displayedNames.push(elem.innerHTML);
		});


		expect(displayedNames).to.deep.equal(["Check properties","Selection List Values","Services"]);
	});

	it('can cancel a single spec', function(){
        harness.store.dispatch(
            {type: 'queue-state', 
            running: null, 
            queued: ['general1', 'general2', 'general3']
        });


		harness.click('#queued-spec-general2 a.explorer-command');

		var message = harness.engineMessages.findPublishedMessage('cancel-spec');
		expect(message).to.not.be.null;
        expect(message.id).to.equal('general2');

	});

	it('can cancel all the specs', function(){
        harness.click('#cancel-all-specs');

		var message = harness.engineMessages.findPublishedMessage('cancel-all-specs');
		expect(message).to.not.be.null;
	});
    
});