var specData = {
	id: 'test-spec',
	title: 'My first specification',
	steps: [
		{
			id: 'first-section',
			type: 'section',
			key: 'Math', 
			steps: [
				{key: 'StartWith', cells: {x: 1}, id: 'first-step'},
				{key: 'Add', cells: {x: 5}},
				{key: 'Subtract', cells: {x: 2}},
				{key: 'TheResultShouldBe', cells: {x: 4}},
				{key: 'Adding', cells:{x:1, y:2, result:3}},
				{key: 'Tabulating', collections: [


					{key: 'steps', id: 'tabulating-section', steps: [
						{key: 'Enter', cells: {x: 1}},
						{key: 'Press', cells: {button: 'add'}},
						{key: 'Enter', cells: {x: 2}},
						{key: 'ValueShouldBe', cells: {value: '3'}}
					]}



				]}
			]
		},
		{type: 'comment', text: 'foo'},
		{type: 'comment', text: 'bar'},
		{
			type: 'section',
			key: 'Math', 
			steps: [
				{key: 'Adding', cells:{x:1, y:2, result:3}}
			]
		},
		{
			type: 'section',
			key: 'Math', 
			steps: [
				{key: 'StartWith', cells: {x: 1}},
				{key: 'Add', cells: {x: 5}},
				{key: 'Subtract', cells: {x: 2}},
				{key: 'TheResultShouldBe', cells: {x: 4}},
				{key: 'Adding', cells:{x:1, y:2, result:3}}
			]
		}
	]
}

var hierarchy = {
	suites: [
		{name: 'All', path: 'All', specs: [
			{id: 'test-spec', name: 'My first specification'}
		]}

	]

}

var fixtureData = [require('./math-fixture-data'), require('./zork-fixture-data')];
var Specification = require('./../lib/model/specification');
var FixtureLibrary = require('./../lib/fixtures/fixture-library');

module.exports = {
	library: function(){
		return new FixtureLibrary(fixtureData);
	},

	specData: function(){
		return specData;
	},

	fixtureData: function(){
		return fixtureData;
	},

	hierarchy: function(){
		return hierarchy;
	},

	specification: function(){
		var lib = this.library();

		return new Specification(specData, lib);
	}
}