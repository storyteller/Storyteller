var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var $ = require('jquery');

var AllSpecData = require('./../all-spec-data');
var FixtureLibrary = require('./../lib/fixtures/fixture-library');

var library = new FixtureLibrary(AllSpecData.fixtures);

var GrammarErrors = require('./../components/grammars/grammar-errors');
var Hierarchy = require('./../lib/stores/hierarchy');

describe('GrammarError rendering', () => {
	var div = null;
	var html = null;

	before(() => {
		Hierarchy.setLibrary(library);

		var instance = TestUtils.renderIntoDocument(<GrammarErrors />);

		div = instance.getDOMNode();
		html = $(div).html();
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
