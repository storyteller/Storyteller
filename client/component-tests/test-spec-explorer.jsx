var expect = require('chai').expect;
var AllSpecData = require('./../all-spec-data');
var SpecExplorer = require('./../components/explorer/spec-explorer');
var SuiteExplorer = require('./../components/explorer/suite-explorer');
var Postal = require('postal');
var React = require('react');
var $ = require('jquery');
var Hierarchy = require('./../lib/stores/hierarchy');
var _ = require('lodash');

function publishResults(){
	for (var id in AllSpecData.results){
		var completed = AllSpecData.results[id];


		Postal.publish({
			channel: 'engine',
			topic: completed.type,
			data: completed
		});

	}
}



describe('Spec Explorer', function(){
	var hierarchy = null;
	var component = null;
	var div = null;

	before(() => {
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

		var c = ( <SpecExplorer params={null} /> );

		component = React.render(c, div);
	});

	function badgeText(id){
		return $('#' + id + ' span.badge', div).html()
	}

	function noSpecsAreShown(){
		expect($('#no-matching-specs', div).length).to.equal(1);
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
		specsForSuiteShouldBe('Tables', ['Boolean Results in a Table', 'Decision Table', 'Table with Optional Columns', 'Tables', 'Tables with Errors'])
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

	it('shows the message about no matching specs when none match the filter', function(){
		// No results have been published, so this should hide everything
		$('#status-success', div).click();

		noSpecsAreShown();
	});

	it('shows the right badge numbers for the lifecycles', function(){
		expect(badgeText('any-lifecycle')).to.equal('24');
		expect(badgeText('acceptance-lifecycle')).to.equal('21');
		expect(badgeText('regression-lifecycle')).to.equal('3');
	});

	it('shows the badge numbers for status in the initial state', function(){
		expect(badgeText('status-any')).to.equal('24');
		expect(badgeText('status-success')).to.equal('0');
		expect(badgeText('status-failed')).to.equal('0');
		expect(badgeText('status-none')).to.equal('24');
	});

	it('shows the right badge numbers for the results after all are finished', function(){
		publishResults();

		expect(badgeText('status-any')).to.equal('24');
		expect(badgeText('status-success')).to.equal('5');
		expect(badgeText('status-failed')).to.equal('19');
		expect(badgeText('status-none')).to.equal('0');
	});

	it('filters by success', function(){
		publishResults();

		$('#status-success', div).click();

		suitesShownShouldBe(['General', 'Sets', 'Tables']);
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

describe('Suite Explorer', function(){
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

		var c = ( <SuiteExplorer params={{splat: ['Sentences']}} /> );
		component = React.render(c, div);
	});

	function badgeText(id){
		return $('#' + id + ' span.badge', div).html()
	}

	function noSpecsAreShown(){
		expect($('#no-matching-specs', div).length).to.equal(1);
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


	it('should show only the Sentences suite', function(){
		suitesShownShouldBe(['Sentences']);
	});

	it('should show all the specs for the one suite', function(){
		specsForSuiteShouldBe('Sentences', ['Currying', 'Facts', 'Importing and Currying', 'Sentences']);
	});

	it('opening the explorer to a suite should show the suite name as the title', function(){
		expect($('#spec-editor-header', div).html()).to.contain('Sentences');
	});

	it('shows the right badge numbers for the lifecycles', function(){
		expect(badgeText('any-lifecycle')).to.equal('4');
		expect(badgeText('acceptance-lifecycle')).to.equal('3');
		expect(badgeText('regression-lifecycle')).to.equal('1');
	});

	it('shows the badge numbers for status in the initial state', function(){
		expect(badgeText('status-any')).to.equal('4');
		expect(badgeText('status-success')).to.equal('0');
		expect(badgeText('status-failed')).to.equal('0');
		expect(badgeText('status-none')).to.equal('4');
	});

	it('shows the right badge numbers for the results after all are finished', function(){
		publishResults();

		expect(badgeText('status-any')).to.equal('4');
		expect(badgeText('status-success')).to.equal('0');
		expect(badgeText('status-failed')).to.equal('4');
		expect(badgeText('status-none')).to.equal('0');
	});

});