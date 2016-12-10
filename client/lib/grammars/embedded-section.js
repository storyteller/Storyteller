var Section = require('./../model/section');
var Fixture = require('./../fixtures/fixture');
var Step = require('./../model/step');
var CompositeGrammar = require('./composite-grammar');

class EmbeddedSection extends CompositeGrammar{
	constructor(metadata){
		super(metadata);

		this.type = 'embedded-section';
		this.hasBeforeStep = metadata.hasBeforeStep;
		this.hasAfterStep = metadata.hasAfterStep;

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
			var children = [];
			if (this.hasBeforeStep){
				children.push(loader.breakpointLine({
					spec: spec,
					dispatch: dispatch,
					id : section.id,
					position: 'before',
					title: 'Action before the following embedded section'
				}));
			}

			children.push(sectionResults);

			if (this.hasAfterStep){
				children.push(loader.breakpointLine({
					spec: spec,
					dispatch: dispatch,
					id : section.id,
					position: 'after',
					title: 'Action after the embedded section directly above'
				}))
			}

			return loader.div(children);
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