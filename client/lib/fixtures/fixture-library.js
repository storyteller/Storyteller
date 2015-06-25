var Fixture = require('./fixture');
var Comment = require('./../model/comment');
var _ = require('lodash');
var InvalidFixture = require('./invalid-fixture');


class FixtureLibrary{
	constructor(data){
		this.fixtures = {};

		for (var i = 0; i < data.length; i++){
			var fixture = new Fixture(data[i]);
			this.fixtures[fixture.key] = fixture;
		}

		this.key = 'FixtureLibrary';
	}

	contextualControl(spec, loader){
		return loader.stepAdder({holder: spec});
	}

	find(key){
		if (!this.fixtures.hasOwnProperty(key)){
			console.log('RETURNING an InvalidFixture for ' + key);
			return new InvalidFixture(key);
		}

		return this.fixtures[key];
	}

	errorCount(){
		var sum = 0;

		for (var key in this.fixtures){
			sum = sum + this.fixtures[key].errorCount();
		}

		return sum;
	}

	errorReport(){
		var fixtures = _.values(this.fixtures);

		return fixtures.filter(f => f.errorCount() > 0)
			.map(f => f.errorReport());

	}

	addAndSelect(location){
		return {holder: location.holder, step: location.holder.adder, cell: null};
	}

}




module.exports = FixtureLibrary;

