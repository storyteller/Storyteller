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

	describe('Cell display/editing state transitions', function(){
		it('should display cell values in initial state', function(){

			driver.cellShouldBeReadonlyWithText('0.4', 'y', '2');
			driver.cellShouldBeReadonlyWithText('0.4', 'result', '3');
			driver.cellShouldBeReadonlyWithText('3.0', 'y', '2');
		});

		it('moves a cell back to readonly after another cell receives focus', function(){
			cellFor('0.2', 'x').click();

			cellFor('0.4', 'y').click();

			expect(cellFor('0.2', 'x').isReadonly()).to.be.true;
			expect(cellFor('0.2', 'x').hasFocus()).to.be.false;

			expect(cellFor('0.4', 'y').isTextbox()).to.be.true;
			expect(cellFor('0.4', 'y').hasFocus()).to.be.true;

		});

		it('changes a cell to editor mode after clicking on it', function(){
			cellFor('0.2', 'x').click();

			var cell = cellFor('0.2', 'x');
			expect(cell.isTextbox()).to.be.true;
			expect(cell.value()).to.equal('2');

		});

		it('should make a cell in edit mode be focused', function(){
			cellFor('0.3', 'x').click();

			expect(cellFor('0.3', 'x').hasFocus()).to.be.true;
		});
	});


	describe('Editing in a single cell', function(){
		it('should record the change to the spec and be reflected into the view', function(){
			cellFor('0.0', 'x').click();

			expect(cellFor('0.0', 'x').isTextbox()).to.be.true;

			cellFor('0.0', 'x').typeText('13');

			// move off
			cellFor('0.1', 'x').click();

			expect(driver.spec.findByPath('0.0.x').value).to.equal('13');	

			driver.cellShouldBeReadonlyWithText('0.0', 'x', '13');
		});
	});

	var editCell = driver.editCell.bind(driver);
	var cellShouldBeReadonlyWithText = driver.cellShouldBeReadonlyWithText;

	describe('Editing several cells at a time', function(){
		it('should apply edits to all the fields', function(){
			editCell('0.3', 'x', '13');
			editCell('3.0', 'x', '17');
			editCell('3.0', 'result', '19');

			// move off
			cellFor('0.0', 'x').click();

			cellShouldBeReadonlyWithText('0.3', 'x', '13');
			cellShouldBeReadonlyWithText('3.0', 'x', '17');
			cellShouldBeReadonlyWithText('3.0', 'result', '19');
		});
	});

	it('Can delete a step', function(){
		var id = spec.findByPath('0.0').id;

		expect(spec.find(id)).to.not.be.null;

		driver.click('#' + id + ' a.delete')

		expect(spec.find(id)).to.be.null;

		driver.assertElementDoesNotExist('#' + id);
	});

	it('Can delete a section', function(){
		var id = spec.findByPath('0').id;

		expect(spec.find(id)).to.not.be.null;

		driver.click('#' + id + ' a.delete');

		expect(spec.find(id)).to.be.null;

		driver.assertElementDoesNotExist('#' + id);

	});

	it('Undo/Redo mechanics MEGA TEST', function(){
		var undoButton = driver.element('#undo');
		var redoButton = driver.element('#redo');

		var redoIsEnabled = function(){
			return !redoButton.disabled;
		}

		var undoIsEnabled = function(){
			return !undoButton.disabled;
		}

		// Initial state
		expect(undoIsEnabled()).to.be.false;
		expect(redoIsEnabled()).to.be.false;

		editCell('4.4', 'x', '13');
		editCell('4.4', 'y', '17');
		editCell('4.4', 'result', '30');

		// move off
		cellFor('0.0', 'x').click();	

		expect(undoIsEnabled()).to.be.true;
		expect(redoIsEnabled()).to.be.false;

		undoButton.click();
		undoButton.click();

		// Both should be enabled
		expect(undoIsEnabled()).to.be.true;
		expect(redoIsEnabled()).to.be.true;

		// original values
		driver.assertCellValue('4.4.result', '3');
		driver.assertCellValue('4.4.y', '2');

		// still the changed value
		driver.assertCellValue('4.4.x', '13');

		// apply a redo
		redoButton.click();

		// reapplies the change
		driver.assertCellValue('4.4.y', '17');

		// make a new edit, then click off
		driver.editCell('4.4', 'result', '31');

		cellFor('0.0', 'x').click();	

		// Redo state should be thrown away
		expect(undoIsEnabled()).to.be.true;
		expect(redoIsEnabled()).to.be.false;
		
	});



});



