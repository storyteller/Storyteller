var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var $ = require('jquery');

var ComponentHarness = require('./component-harness');
var GrammarErrors = require('./../components/grammars/grammar-errors');


describe('GrammarError rendering', () => {
	var harness, html;

	before(() => {
		var component = (<GrammarErrors />);
        var harness = new ComponentHarness();
        harness.render(component);
        
        html = harness.html();
	});

	it('can render without error', () => {
		expect(html).to.contain('Grammar Errors');
	});

	it('can render fixture titles that have errors', () => {
		expect(html).to.contain('Failure implemented by StoryTeller.Samples.Fixtures.FailureFixture (Failure)');
	});

	it('can render fixture errors', () => {
		expect(html).to.contain('Fixture StoryTeller.Samples.Fixtures.FailureFixture could not be loaded');
		expect(html).to.contain('System.Exception: This fixture ctor blew up');
	});

	it('can render grammar error titles', () => {
		expect(html).to.contain('BadSentence');
	});

	it('can render grammar error messages', () => {
		expect(html).to.contain('Cell(s) name are unaccounted for in the sentence format');
	});
});
