var expect = require('chai').expect;
var OutlineNode = require('./../lib/outline-node');
var AllSpecData = require('./../all-spec-data');
var Specification = require('./../lib/specification');
var FixtureLibrary = require('./../lib/fixture-library');

var library = new FixtureLibrary(AllSpecData.fixtures);

function toOutline(id){
	var data = AllSpecData.specs[id];
	var spec = new Specification(data, library);

	return new OutlineNode(spec);
}

describe('Building Specification outlines', function(){
	it('adds a node for each section', function(){
		var outline = toOutline('embeds');

		expect(outline.children[0].title).to.equal('Embedded');
	});

	it('adds a node for an embedded section inside of a section', function(){
		var outline = toOutline('embeds');
		var section = outline.children[0];

		var embedded = section.children[0];

		expect(embedded).to.not.be.null;
		expect(embedded.title).to.equal('Math');

		expect(section.children.length).to.equal(2);
	});

	it('adds a node for tables', function(){
		var outline = toOutline('table5');
		var section = outline.children[0];

		expect(section.children.length).to.equal(2);
		expect(section.children[0].title).to.equal('Adding numbers together');
		expect(section.children[1].title).to.equal('Subtract numbers');
	});
});