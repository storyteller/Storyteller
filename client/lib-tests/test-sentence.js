var expect = require('chai').expect;
var Sentence = require('./../lib/sentence');
var Step = require('./../lib/step');

describe('Sentence', function(){
	var sentence = null;
	var metadata = null;

	beforeEach(function(){
		sentence = null;
	});

	var build = function(metadata){
		metadata.key = metadata.key || 'foo';
		metadata.cells = metadata.cells || [];

		// not worried about the builder quite yet
		sentence = new Sentence(metadata, null);
	}

	function partShouldBeText(index, text){
		var part = sentence.parts[index];
		expect(part.text).to.equal(text);
		expect(part.type).to.equal('Text');
		
	}

	function partShouldBeCell(index, key){
		var part = sentence.parts[index];
		expect(part.key).to.equal(key);	
		expect(part.type).to.equal('Cell');
			
	}

	describe('when building out a Sentence from metadata', function(){
		it('captures basic properties', function(){
			build({
				format: 'the foo is afoot',
				description: 'does something',
				key: 'foo'
			});

			expect(sentence.key).to.equal('foo');
			expect(sentence.description).to.equal('does something');
		});

		it('should copy the format to the title', function(){
			build({
				format: 'the foo is afoot',
				key: 'foo'
			});

			expect(sentence.title).to.equal('the foo is afoot');
		});

		it('no cells', function(){
			build({
				format: 'the foo is afoot'
			});

			expect(sentence.parts.length).to.equal(1);
			partShouldBeText(0, 'the foo is afoot');
		});

		it('only one cell', function(){
			build({
				format: '{go}'
			});

			expect(sentence.parts.length).to.equal(1);
			partShouldBeCell(0, 'go');
		});

		it('one cell at the end', function(){
			build({
				format: 'go to {dest}',
				cells: []
			});

			expect(sentence.parts.length).to.equal(2);
			partShouldBeText(0, 'go to ');
			partShouldBeCell(1, 'dest');
		});

		it('one cell at the beginning', function(){
			build({
				format: '{dest} is the location'
			});

			expect(sentence.parts.length).to.equal(2);
			partShouldBeCell(0, 'dest');
			partShouldBeText(1, ' is the location');

		});

		it('has one cell in the middle', function(){
			build({
				format: 'go {miles} miles'
			});

			expect(sentence.parts.length).to.equal(3);
			partShouldBeText(0, 'go ');
			partShouldBeCell(1, 'miles');
			partShouldBeText(2, ' miles');
		});

		it('has one cell in the middle #2', function(){
			build({
				format: "go '{miles}'"
			});

			expect(sentence.parts.length).to.equal(3);
			partShouldBeText(0, "go '");
			partShouldBeCell(1, 'miles');
			partShouldBeText(2, "'");
		});

		it('has multiple cells', function(){
			build({
				format: 'Add {x} to {y}'
			});

			expect(sentence.parts.length).to.equal(4);
			partShouldBeText(0, 'Add ');
			partShouldBeCell(1, 'x');
			partShouldBeText(2, ' to ');
			partShouldBeCell(3, 'y');
		});

		it('matches cell data to the parts', function(){
			build({
				format: 'Add {x} to {y}',
				cells: [
					{key: 'x', description: 'the x'},
					{key: 'y', description: 'the y'}
				]
			});

			expect(sentence.parts[1].cell.description).to.equal('the x');
			expect(sentence.parts[3].cell.description).to.equal('the y');
		});

		it('can fill in missing cells', function(){
			build({
				format: 'Add {x} to {y}',
				cells: [
					{key: 'x', description: 'the x'}
				]
			});

			expect(sentence.parts[1].cell.description).to.equal('the x');
			expect(sentence.parts[3].cell.key).to.equal('y');
		});


		it('gets mad when brackets are misaligned', function(){
			build({
				format: 'Add {x to something'
			});

			expect(sentence.errors.length).to.equal(1);
		});
	});

	describe('when choosing the first cell', function(){
		it('should be null if there are no cells', function(){
			build({format: 'Do something'});
			expect(sentence.firstCell({})).to.be.null;
		});

		it('should choose the first cell in order if one exists', function(){
			build({
				format: 'Add {x} to {y} then multiply by {z}'
			});

			var step = sentence.newStep();

			var arg = sentence.firstCell(step);

			expect(arg.cell.key).to.equal('x');
		});
	});

	describe('when choosing the last cell', function(){
		it('should be null if there are no cells', function(){
			build({format: 'Do something'});
			expect(sentence.lastCell({})).to.be.null;
		});		

		it('should choose the last cell in order if one exists', function(){
			build({
				format: 'Add {x} to {y} then multiply by {z}'
			});

			var step = sentence.newStep();

			var arg = sentence.lastCell(step);

			expect(arg.cell.key).to.equal('z');
		});
	});

	describe('when choosing the next cell', function(){
		it('should be null if there are no cells', function(){
			build({format: 'Do something'});
			expect(sentence.nextCell(null, {})).to.be.null;
		});

		it('should choose the next cell by position', function(){
			build({
				format: 'Add {x} to {y} then multiply by {z}'
			});

			var step = sentence.newStep();
			var x = step.args.find('x');
			var y = step.args.find('y');
			var z = step.args.find('z');

			expect(sentence.nextCell(x, step)).to.equal(y);
			expect(sentence.nextCell(y, step)).to.equal(z);
		});

		it('should return null if it is on the last arg already', function(){
			build({
				format: 'Add {x} to {y} then multiply by {z}'
			});

			var step = sentence.newStep();
			var z = step.args.find('z');

			expect(sentence.nextCell(z, step)).to.be.null;
		});
	});

	describe('when choosing the previous cell', function(){
		it('should be null if there are no cells', function(){
			build({format: 'Do something'});
			expect(sentence.previousCell(null, {})).to.be.null;
		});

		it('should choose the previous cell by position', function(){
			build({
				format: 'Add {x} to {y} then multiply by {z}'
			});

			var step = sentence.newStep();
			var x = step.args.find('x');
			var y = step.args.find('y');
			var z = step.args.find('z');

			expect(sentence.previousCell(x, step)).to.be.null;
			expect(sentence.previousCell(z, step)).to.equal(y);
			expect(sentence.previousCell(y, step)).to.equal(x);
		});


	});

	describe('when building the preview controls', function(){
		it('should create all the right controls for text and cells', function(){
			var StubLoader = require('./stub-loader');
			var loader = new StubLoader();
			var sentence = new Sentence({key: 'Adding', format: 'Add {x} to {y} should be {sum}'});
			var step = sentence.buildStep({cells: {x: 1, y: 2, sum: 3}});

			var preview = sentence.preview(step, loader);

			expect(preview).to.deep.equal({
				type: 'line',
				props: {
					components: [
						loader.span('Add '),
						loader.cell({cell: {key: 'x', editor: 'text'}, value: 1}),
						loader.span(' to '),
						loader.cell({cell: {key: 'y', editor: 'text'}, value: 2}),
						loader.span(' should be '),
						loader.cell({cell: {key: 'sum', editor: 'text'}, value: 3})
					]
				}

			});
		});
	});

	describe('when building the result controls', function(){
		it('should create all the right controls for text and cells', function(){
			var StubLoader = require('./stub-loader');
			var loader = new StubLoader();
			var sentence = new Sentence({key: 'Adding', format: 'Add {x} to {y} should be {sum}'});
			var step = sentence.buildStep({cells: {x: 1, y: 2, sum: 3}});

			step.logResult({status: 'error', error: 'bad!'});

			var preview = sentence.buildResults(step, loader);

			expect(preview[0]).to.deep.equal({
				type: 'line',
				props: {
					status: 'error',
					components: [
						loader.span('Add '),
						loader.cell({cell: {key: 'x', editor: 'text'}, value: 1}),
						loader.span(' to '),
						loader.cell({cell: {key: 'y', editor: 'text'}, value: 2}),
						loader.span(' should be '),
						loader.cell({cell: {key: 'sum', editor: 'text'}, value: 3})
					]
				}

			});
		});
	});

	describe('when building the edit controls', function(){
		it('should create all the right controls for text and cells', function(){
			var StubLoader = require('./stub-loader');
			var loader = new StubLoader();
			var sentence = new Sentence({key: 'Adding', format: 'Add {x} to {y} should be {sum}'});
			var step = sentence.buildStep({cells: {x: 1, y: 2, sum: 3}});

			var editor = sentence.editor(step, loader);

			expect(editor).to.deep.equal({
				type: 'line',
				props: {
					step: step,
					components: [
						loader.span('Add '),
						loader.cell(step.args.find('x')),
						loader.span(' to '),
						loader.cell(step.args.find('y')),
						loader.span(' should be '),
						loader.cell(step.args.find('sum'))
					]
				}

			});
		});
	});

	describe('when building a Step from raw data', function(){
		it('creates a new step with the data and the cells', function(){
			var sentence = new Sentence({key: 'Adding', format: 'Add {x} to {y}'});
			var data = {key: 'Adding', cells: {x: 1, y: 2}};

			var step = sentence.buildStep(data);

			expect(step instanceof Step).to.equal.true;
			expect(step.args.find('x').value).to.equal(1);
			expect(step.args.find('y').value).to.equal(2);

		});

		it('can create a new step', function(){
			var sentence = new Sentence(
				{key: 'Adding', 
				format: 'Add {x} to {y}', 
				cells: [
					{key: 'x', default: 1},
					{key: 'y', default: 2}
				]
				});

			var step = sentence.newStep();

			expect(step instanceof Step).to.equal.true;
			expect(step.args.find('x').value).to.equal(1);
			expect(step.args.find('y').value).to.equal(2);
		});
	});
});