var expect = require('chai').expect;
var FixtureLibrary = require('./../lib/fixtures/fixture-library');

var fixtureData = [require('./math-fixture-data'), require('./zork-fixture-data')];

var StubLoader = require('./stub-loader');

var Comment = require('./../lib/model/comment');

describe('The FixtureLibrary', function(){
	var library = new FixtureLibrary(fixtureData);

	var data = {
		type: 'section',
		key: 'Math', 
		steps: [
			{key: 'StartWith', cells: {x: 1}},
			{key: 'Add', cells: {x: 5}},
			{key: 'Subtract', cells: {x: 2}},
			{key: 'TheResultShouldBe', cells: {x: 4}},
			{key: 'Adding', cells:{x:1, y:2, result:3}}
		]
	};

	it('can build its contextualControl', function(){
		var loader = new StubLoader();

		var spec = {};
		var control = library.contextualControl(spec, loader);

		expect(control).to.deep.equal({
			type: 'stepAdder', 
			props: {holder: spec}
		});
	});

	it('can find a fixture by name', function(){
		var math = library.find('Math');
		var zork = library.find('Zork');

		expect(math.key).to.equal('Math');
		expect(zork.key).to.equal('Zork');
	});

	it('returns an invalid fixture if the name does not exist', function(){
		var invalid = library.find('Invalid');

		expect(invalid.key).to.equal('Invalid');
		expect(invalid.invalid).to.be.true;
	});

	it('can addAndSelect for an active section', function(){
		var holder = {adder: {}};
		var newLoc = library.addAndSelect({holder: holder});

		expect(newLoc).to.deep.equal({
			holder: holder,
			step: holder.adder,
			cell: null
		});
	});

});