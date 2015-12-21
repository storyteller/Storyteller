var expect = require('chai').expect;
var ObjectMother = require('./../lib-tests/object-mother');

var IntegrationDriver = require('./spec-editor-harness');



describe('Comment Editing', function(){
	var driver = new IntegrationDriver(ObjectMother.fixtureData());
	var cellFor = driver.cellFor.bind(driver);
	var spec;

	beforeEach(function(){
		driver.loadSpecData(ObjectMother.specData());
		spec = driver.spec;
	});

	describe('When editing a comment', function(){
		it('can render a comment', function(){
			var id = spec.findByPath('1').id;

			expect(driver.html('#' + id + ' .comment-text')).to.equal('foo');
		});

		it('can activate a comment for editing', function(){
			var id = spec.findByPath('1').id;
			
			driver.click('#' + id + ' span.comment-text');
			var search = '#' + id + ' textarea';

			driver.assertElementExists(search);
			expect(driver.value(search)).to.equal('foo');
		});



		it('can delete a comment', function(){
			var id = spec.findByPath('1').id;

			driver.click('#' + id + ' .delete');

			expect(spec.find(id)).to.be.falsey;

			driver.assertElementDoesNotExist('#' + id);
		});
	});

	var idFor = driver.idFor;


});




