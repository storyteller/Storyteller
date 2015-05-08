var React = require('react');
var Postal = require('postal');
var $ = require('jquery');
var uuid = require('node-uuid');
var expect = require('chai').expect;

var loader = require('./../components/editing/component-loader').editing;


var SpecEditor = require('../components/editing/spec-editor');
var Hierarchy = require('../lib/specs/hierarchy');
var FixtureLibrary = require('../lib/fixture-library');
var CellDriver = require('./cell-driver');
var ResultCache = require('./../lib/specs/result-cache');

function IntegrationDriver(fixtureData, mode, results){
	this.library = new FixtureLibrary(fixtureData);

	Hierarchy.setLibrary(this.library);

	var self = this;

	this.loadSpecData = function(data){
	    if (window){
		    window.$ = $;
		    window.jQuery = $;
	    }
	    
		require('./../lib/typeahead.jquery.js');



		// derive the spec header and publish that too

		if (!data.hasOwnProperty('id')){
			data.id = uuid.v4();
		}

		var header = {id: data.id, name: data.name};
		var hierarchy = {
			suites: [
				{name: 'All', path: 'All', specs: [header]}
			]
		};


		Postal.reset();

		Hierarchy.reset();

		Postal.publish({
			channel: 'engine',
			topic: 'hierarchy-loaded',
			data: {hierarchy: hierarchy}
		})


		Hierarchy.setLibrary(this.library);
		Hierarchy.storeData(data.id, data);

		if (results){
			ResultCache.record(results);
		}


		var div = document.createElement('div');
		document.documentElement.appendChild(div);
		this.editor = React.render(SpecEditor({id: data.id, mode: mode || 'editing'}), div);
		this.getNode = () => this.editor.getDOMNode();
		this.presenter = this.editor.presenter;
		this.spec = this.presenter.spec;
		this.div = div;

	}

	this.idFor = function(search){
		return self.spec.findByPath(search).id;
	}

	this.assertElementExists = function(search){
		expect($(search, self.getNode()).length).to.equal(1);
	}

	this.assertElementDoesNotExist = function(search){
		expect($(search, self.getNode()).length).to.equal(0);
	}

	this.cellFor = function(search, cell){
		var step = self.spec.findByPath(search);
		var css = '#' + step.id + " .cell[data-cell='" + cell + "']";

		return new CellDriver(this.element.bind(this, css));
	}

	this.cellById = function(id, cell){
		var css = '#' + id + " .cell[data-cell='" + cell + "']";

		return new CellDriver(this.element.bind(this, css));
	}

	this.editCell = function(search, cell, value){
		self.cellFor(search, cell).click();
		self.cellFor(search, cell).typeText(value);
	}

	this.cellShouldBeReadonlyWithText = function(search, cell, expected){
		var cell = self.cellFor(search, cell);
		expect(cell.isReadonly()).to.be.true;
		expect(cell.value()).to.equal(expected);
	}

	this.assertCellValue = function(search, expected){
		var arg = this.spec.findByPath(search);
		expect(arg.value.toString()).to.equal(expected);
	}

	this.element = function(css){
		return $(css, self.getNode()).get(0);
	}

	this.click = function(css){
		var node = self.element(css);
		TestUtils.Simulate.click(node);
	}

	this.html = function(css){
		return $(css, self.getNode()).html();
	}

	this.value = function(css, value){
		if (arguments.length == 1){
			return $(css, self.getNode()).val();
		}
		else {
			var e = $(css, self.getNode());
			if (e.length > 0) {
			    TestUtils.Simulate.change(e[0], {target: {value: value}});
			}
		}
	}
}

module.exports = IntegrationDriver;
