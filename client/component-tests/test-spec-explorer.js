var expect = require('chai').expect;
var AllSpecData = require('./../all-spec-data');
var SpecExplorer = require('./../components/explorer/spec-explorer');
var Postal = require('postal');
var React = require('react');
var $ = require('jquery');
var Hierarchy = require('./../lib/specs/hierarchy');
var _ = require('lodash');

function publishResults(){
	for (var id in AllSpecData.results){
		var results = AllSpecData.results[id];
		var completed = _.last(results);


		Postal.publish({
			channel: 'engine',
			topic: completed.type,
			data: completed
		});

	}
}



describe.only('Spec Explorer', function(){
	var hierarchy = null;
	var component = null;
	var div = null;

	beforeEach(() => {
		hierarchy = AllSpecData.hierarchy;

		Postal.reset();

		Hierarchy.reset();

		Postal.publish({
			channel: 'engine',
			topic: 'hierarchy-loaded',
			data: {hierarchy: hierarchy}
		});

		div = document.createElement('div');
		document.documentElement.appendChild(div);

		component = React.render(SpecExplorer({params: null}), div);
	});

	function badgeText(id){
		return $('#' + id + ' span.badge', div).html()
	}

	function noSpecsAreShown(){
		throw new Error('do');
	}

	function suitesShownShouldBe(suites){
		var names = $.makeArray($('.suite-name', div)).map(x => x.innerHTML);
		expect(suites).to.deep.equal(names);
	}

	function specsForSuiteShouldBe(suite, specs){
		var suiteNode = $('#' + suite, div);
		var matches = $('a.spec-name', suiteNode);
		var specNames = $.makeArray(matches).map(x => x.innerHTML);

		expect(specs).to.deep.equal(specNames);
	}

	it('renders all top level specs in initial setting', function(){
		suitesShownShouldBe(['Embedded', 'General', 'Paragraphs', 'Sentences', 'Sets', 'Tables'])
	});

	it('renders all the specs for a suite in initial setting', function(){
		specsForSuiteShouldBe('Tables', ['Boolean Results in a Table', 'Decision Table', 'Table with Optional Columns', 'Tables with Errors', 'Tables'])
	});

	it('filter by acceptance lifecycle', function(){
		$('#acceptance-lifecycle', div).click();

		specsForSuiteShouldBe('Sentences', ['Currying', 'Importing and Currying', 'Sentences']);
	});

	it ('filter by regression lifecycle', function(){
		$('#regression-lifecycle', div).click();

		specsForSuiteShouldBe('Sentences', ['Facts']);

	});

	it('can go back to the any lifecycle filter', function(){
		$('#regression-lifecycle', div).click();
		$('#any-lifecycle', div).click();

		specsForSuiteShouldBe('Sentences', ['Currying', 'Facts', 'Importing and Currying', 'Sentences']);
	});

	it('shows the right badge numbers for the lifecycles', function(){
		expect(badgeText('any-lifecycle')).to.equal('22');
		expect(badgeText('acceptance-lifecycle')).to.equal('19');
		expect(badgeText('regression-lifecycle')).to.equal('3');
	});

	it('shows the badge numbers for status in the initial state', function(){
		expect(badgeText('status-any')).to.equal('22');
		expect(badgeText('status-success')).to.equal('0');
		expect(badgeText('status-failed')).to.equal('0');
		expect(badgeText('status-none')).to.equal('22');
	});

	it('shows the right badge numbers for the results after all are finished', function(){
		publishResults();

		expect(badgeText('status-any')).to.equal('22');
		expect(badgeText('status-success')).to.equal('3');
		expect(badgeText('status-failed')).to.equal('19');
		expect(badgeText('status-none')).to.equal('0');
	});

	it('filters by success', function(){
		publishResults();

		$('#status-success', div).click();

		suitesShownShouldBe(['Sets', 'Tables']);
	});

	it('can remove the status filter', function(){
		publishResults();
		$('#status-success', div).click();
		$('#status-any', div).click();

		suitesShownShouldBe(['Embedded', 'General', 'Paragraphs', 'Sentences', 'Sets', 'Tables']);
	});

	it('opening the explorer to the top should show the All Specifications title', function(){
		expect($('#spec-editor-header', div).html()).to.equal('All Specifications');
	});

});