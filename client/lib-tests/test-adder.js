var expect = require('chai').expect;
var Adder = require('./../lib/adder');
var StubLoader = require('./stub-loader');

describe('Adder', function(){
	var loader = new StubLoader();
	loader.add('stepAdderLookup');
	loader.add('stepAdderPlaceholder');

	var holder = {};
	var adder = new Adder(holder, 'add steps...');

	it('is not active by default', function(){
		expect(adder.active).to.be.false;
	});

	it('renders a placeholder when not active', function(){
		adder.active = false;

		expect(adder.editor(loader)).to.deep.equal({
			type: 'stepAdderPlaceholder',
			props: {holder: holder, text: 'add steps...'}
		});
	});

	it('renders the lookup when active', function(){
		adder.active = true;

		expect(adder.editor(loader)).to.deep.equal({
			type: 'stepAdderLookup',
			props: {holder: holder}
		});
	});
});