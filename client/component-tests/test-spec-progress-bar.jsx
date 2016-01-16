var React = require('react');
var expect = require('chai').expect;
var ComponentHarness = require('./component-harness');
var SpecProgressBar = require('./../components/header/spec-progress-bar');
var $ = require('jquery');


describe('The SpecProgressBar', function(){
	var component, harness;

	beforeEach(function(){
		harness = new ComponentHarness();
		component = (<SpecProgressBar />);
        
        harness.render(component);
	});

	it('shows nothing in the initial state', function(){
        var element = harness.element();
		expect(element.tagName).to.equal('SPAN');
        expect(element.innerHTML).to.equal('');
	});

	it('shows the progress bar with no results with the initial steps but no counts', function(){
        harness.store.dispatch({
            type: 'spec-progress',
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 0, wrongs: 0, errors: 0, invalids: 0}
		});

		var progressBar = harness.element().children[1];

		var span = $('span', progressBar).get(0);

		expect(progressBar.tagName).to.equal('DIV');
		expect($(progressBar.firstChild).attr('role')).to.equal('progressbar');

		expect(span.getAttribute('min')).to.equal('0');
		expect(span.getAttribute('max')).to.equal('10');
        expect(progressBar.firstChild.className).to.equal('progress-bar progress-bar-info');
	});

	it('shows as succeeding if non-zero success counts with no wrongs or errors', function(){
        harness.store.dispatch({
            type: 'spec-progress',
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 3, wrongs: 0, errors: 0, invalids: 0}
		});

		var progressBar = harness.element().children[1];

		expect(progressBar.tagName).to.equal('DIV');
		expect(progressBar.firstChild.className).to.equal('progress-bar progress-bar-success');

	});

	it('shows as failing if non-zero failures or errors', function(){
        harness.store.dispatch({
            type: 'spec-progress',
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 3, wrongs: 2, errors: 0, invalids: 0}
		});

		var progressBar = harness.element().children[1];

		expect(progressBar.tagName).to.equal('DIV');
		expect(progressBar.firstChild.className).to.equal('progress-bar progress-bar-danger');

	});

	it('hides the progress bar after spec completion', function(){
        harness.store.dispatch({
            type: 'spec-progress',
			id: 'embeds',
			step: 3,
			total: 10,
			counts: {rights: 3, wrongs: 2, errors: 0, invalids: 0}
		});

		var results = {
			counts: {rights: 0, wrongs: 0, errors: 1, invalids: 0}
		}

		expect(harness.element().firstChild).to.not.be.null;

        harness.store.dispatch({
            type: 'queue-state',
            running: null, 
            queued: []
        });
        
        var element = harness.element();
		expect(element.tagName).to.equal('SPAN');
        expect(element.innerHTML).to.equal('');
	});
    
});
