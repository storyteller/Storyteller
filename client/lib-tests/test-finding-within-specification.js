var expect = require('chai').expect;
var ObjectMother = require('./object-mother');

describe('Finding children within Specification by path', function(){
	var spec = ObjectMother.specification();

	it('can find a section from the parent', function(){
		expect(spec.findByPath('3').key).to.equal('Math');
	});

	it('throws an exception if the initial index is out of bounds', function(){
		expect(function(){
			spec.findByPath('10');
		}).to.throw(RangeError);

		expect(function(){
			spec.findByPath('100');
		}).to.throw(RangeError);
	});

	it('can find a step from within a child section', function(){
		expect(spec.findByPath('0.2').key).to.equal('Subtract');
		expect(spec.findByPath('3.0').key).to.equal('Adding');
	});

	it('can find a cell from within a step', function(){
		expect(spec.findByPath('0.2.x').value).to.equal(2);
	});

	it('throws an exception if cell does not exist', function(){
		expect(function(){
			spec.findByPath('0.2.z').to.throw(RangeError);
		})
	});
});