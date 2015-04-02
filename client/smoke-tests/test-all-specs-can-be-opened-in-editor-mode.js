var expect = require('chai').expect;
var IntegrationDriver = require('./../component-tests/spec-editor-harness');
var AllSpecData = require('./../all-spec-data');
var _ = require('lodash');

describe('Big Bang Smoke Test on the Editor Controls', function(){
	

	var specs = _.values(AllSpecData.specs);

	for (var i = 0; i < specs.length; i++){
		var spec = specs[i];

		it('can open Editor to ' + spec.id, function(){
			var driver = new IntegrationDriver(AllSpecData.fixtures, 'editing');
			driver.loadSpecData(spec);
		});

		it('can navigate from top to bottom - ' + spec.id, function(){
			var driver = new IntegrationDriver(AllSpecData.fixtures, 'editing');
			driver.loadSpecData(spec);

			var presenter = driver.presenter;
			presenter.moveFirst();

			while (presenter.moveNext()){

			}
		});
/*
		it('can navigate from bottom to top - ' + spec.id, function(){
			var driver = new IntegrationDriver(AllSpecData.fixtures, 'editing');
			driver.loadSpecData(spec);

			var presenter = driver.presenter;
			presenter.moveLast();

			while (presenter.movePrevious()){

			}
		});
*/
	}

	
});