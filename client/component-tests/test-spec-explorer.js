var expect = require('chai').expect;
var AllSpecData = require('./../all-spec-data');
var SpecExplorer = require('./../components/explorer/spec-explorer');
var Postal = require('postal');
var React = require('react');
var $ = require('jquery');
var Hierarchy = require('./../lib/specs/hierarchy');

describe('Spec Explorer', function(){
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



});