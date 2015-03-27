var _ = require('lodash');
var Section = require('./section');

class CompositeGrammar{
	constructor(metadata){
		this.key = metadata.key;
		this.title = metadata.title;
		this.collection = metadata.collection || 'steps';
	}

	writeSection(step, section){
		section.key = this.collection;
		step.collections[this.collection] = section;
	}

	readSection(step){
		return step.collections[this.collection];
	}

	readRawData(data){
		if (data == undefined || data == null){
			return new Section({}, this.fixture);
		}

		var raw = _.find(data.collections, x => {
			return x.key == this.collection;
		});


		var section = new Section(raw || data, this.fixture);
		section.key = this.key;

		return section;
	}
}


module.exports = CompositeGrammar;