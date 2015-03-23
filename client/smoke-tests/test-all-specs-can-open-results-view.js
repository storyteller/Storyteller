var expect = require('chai').expect;
var IntegrationDriver = require('./../component-tests/spec-editor-harness');
var AllSpecData = require('./../all-spec-data');
var _ = require('lodash');

function createSpecTest(spec){
	it('can open Results to ' + spec.id, function(){
		var driver = new IntegrationDriver(AllSpecData.fixtures, 'results', AllSpecData.results[spec.id]);
		driver.loadSpecData(spec);
	});
}

describe('Big Bang Smoke Test on the Results Controls', function(){
	

	var specs = _.values(AllSpecData.specs);

	//createSpecTest(AllSpecData.specs.set3);


	for (var i = 0; i < specs.length; i++){
		var spec = specs[i];

		createSpecTest(spec);
	}


});