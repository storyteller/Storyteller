var metadata = {
  "children": [
    {
      "format": "The number should start with {starting}",
      "key": null,
      "type": "sentence",
      "cells": [
        {
          "key": "starting",
          "default": "11",
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        }
      ],
      "errors": []
    },
    {
      "format": "+= {operand}",
      "key": null,
      "type": "sentence",
      "cells": [
        {
          "key": "operand",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        }
      ],
      "errors": []
    },
    {
      "format": "*= {multiplier}",
      "key": null,
      "type": "sentence",
      "cells": [
        {
          "key": "multiplier",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        }
      ],
      "errors": []
    },
    {
      "format": "Value should be {expected}",
      "key": null,
      "type": "sentence",
      "cells": [
        {
          "key": "expected",
          "default": null,
          "header": null,
          "output": true,
          "editor": null,
          "options": null
        }
      ],
      "errors": []
    }
  ],
  "title": "Add and Multiply",
  "key": "AddAndMultiply",
  "type": "paragraph",
  "cells": [
    {
      "key": "starting",
      "default": "11",
      "header": null,
      "output": false,
      "editor": null,
      "options": null
    },
    {
      "key": "operand",
      "default": null,
      "header": null,
      "output": false,
      "editor": null,
      "options": null
    },
    {
      "key": "multiplier",
      "default": null,
      "header": null,
      "output": false,
      "editor": null,
      "options": null
    },
    {
      "key": "expected",
      "default": null,
      "header": null,
      "output": true,
      "editor": null,
      "options": null
    }
  ],
  "errors": []
}

var expect = require('chai').expect;
var Paragraph = require('./../lib/paragraph');
var Step = require('./../lib/step');


describe('Paragraph grammar', function(){
	var grammar = null;

	beforeEach(function(){
		grammar = new Paragraph(metadata);
	});

	it('should copy the title', function(){
		expect(grammar.title).to.equal(metadata.title);
	});

	it('should create a child grammar for each in the metadata', function(){
		expect(grammar.children.length).to.equal(4);
	});

	it('should create the position for each child grammar', function(){
		// want the strings, not numbers!
		expect(grammar.children[0].position).to.equal('0'); 
		expect(grammar.children[1].position).to.equal('1'); 
		expect(grammar.children[2].position).to.equal('2'); 
		expect(grammar.children[3].position).to.equal('3'); 

	});

	it('merges the newStep of all the children', function(){
		var step = grammar.newStep();

		var argNames = step.args.allKeys();

		expect(argNames).to.deep.equal(['starting', 'operand', 'multiplier', 'expected']);
	});

	it('merges the buildStep of all the children', function(){
		var data = {cells: {starting: 2, operand: 3, multiplier: 4, expected: 5}};
		var step = grammar.buildStep(data);

		expect(step.findValue('starting')).to.equal(2);
		expect(step.findValue('operand')).to.equal(3);
		expect(step.findValue('multiplier')).to.equal(4);
		expect(step.findValue('expected')).to.equal(5);
	});
});
