var Section = require('./../model/section');
var Fixture = require('./../fixtures/fixture');
var Step = require('./../model/step');
var CompositeGrammar = require('./composite-grammar');

class EmbeddedSection extends CompositeGrammar{
	constructor(metadata){
		super(metadata);

		this.type = 'embedded-section';

		this.fixture = new Fixture(metadata.fixture);
		if (!this.title)
		{
			this.title = this.fixture.title;
		}
	}

	buildStep(data){
		var step = new Step(data, [], this);

		var section = this.readRawData(data || {collections: []});

		this.writeSection(step, section);

		return step;
	}


	newStep(){
		var step = new Step({}, [], this);
		var section = new Section({steps: []}, this.fixture);
		this.writeSection(step, section);

		return step;
	}

	preview(step, loader){
		var section = this.readSection(step);
		return section.preview(loader.chromed(), step);
	}

	editor(step, loader){
		var section = this.readSection(step);
		return section.editor(loader.chromed(), step);
	}

	buildResults(step, loader, isStepthrough, dispatch, spec){
		var section = this.readSection(step);
		var sectionResults = section.buildResults(loader.chromed(), isStepthrough, dispatch, spec);
	
		if (isStepthrough){
			var beforeLine = loader.breakpointLine({
				spec: spec,
				dispatch: dispatch,
				id : this.id,
				position: 'before',
				title: 'Action before the embedded section'
			});

			var afterLine = loader.breakpointLine({
				spec: spec,
				dispatch: dispatch,
				id : this.id,
				position: 'after',
				title: 'Action after the embedded section'
			});

			return loader.div([beforeLine, sectionResults, afterLine]);
		}

		return sectionResults;
	}

	selectNext(location){
		return null;
	}

	selectPrevious(location){
		return null;

	}

	selectLast(step){
		var section = this.readSection(step);
		return section.selectLast(step);
	}

}

module.exports = EmbeddedSection;