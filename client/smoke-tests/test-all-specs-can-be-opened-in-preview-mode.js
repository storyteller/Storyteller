var expect = require('chai').expect;
var IntegrationDriver = require('./../component-tests/spec-editor-harness');
var AllSpecData = require('./../all-spec-data');
var _ = require('lodash');

function createSpecTest(spec){
	it('can open Preview to ' + spec.id, function(){
		var driver = new IntegrationDriver(AllSpecData.fixtures, 'preview');
		driver.loadSpecData(spec);
	});
}

describe('Big Bang Smoke Test on the Preview Controls', function(){
	

	var specs = _.values(AllSpecData.specs);

	//createSpecTest(AllSpecData.specs.set1);


	for (var i = 0; i < specs.length; i++){
		var spec = specs[i];

		createSpecTest(spec);
	}


});