var expect = require('chai').expect;
var ObjectMother = require('./../lib-tests/object-mother');

var IntegrationDriver = require('./spec-editor-harness');



describe('Editing a Specification Integration tests', function(){
	var driver = new IntegrationDriver(ObjectMother.fixtureData());
	var cellFor = driver.cellFor.bind(driver);
	var spec;

	beforeEach(function(){
		driver.loadSpecData(ObjectMother.specData());
		spec = driver.spec;
	});

	var editCell = driver.editCell;
	var cellShouldBeReadonlyWithText = driver.cellShouldBeReadonlyWithText;



	var idFor = driver.idFor;

	describe('Editing with EmbeddedSections', function(){

		it('can render an embedded section', function(){
			var id = idFor('0.5.steps');

			driver.assertElementExists('#' + id);
		});

		it('can delete an embedded section', function(){
			var stepId = idFor('0.5');
			var sectionId = idFor('0.5.steps');

			driver.click('#' + sectionId + ' .delete');

			driver.assertElementDoesNotExist('#' + sectionId);

			expect(spec.find(stepId)).to.equal(undefined);
		});



		it('can delete a step from within the embedded section', function(){
			var stepId = idFor('0.5.steps.0');
			driver.assertElementExists('#' + stepId);
			expect(spec.find(stepId)).to.not.equal(undefined);

			driver.click('#' + stepId + ' .delete');

			driver.assertElementDoesNotExist('#' + stepId);
			expect(spec.find(stepId)).to.equal(undefined);
		});

		it('can edit a cell from within an embedded section', function(){
			cellFor('0.5.steps.0', 'x').click();
			cellFor('0.5.steps.0', 'x').typeText('12');

			cellFor('0.0', 'x').click();

			expect(spec.findByPath('0.5.steps.0.x').value).to.equal('12');
		});
	});

});



