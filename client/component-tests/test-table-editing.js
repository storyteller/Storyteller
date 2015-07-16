var expect = require('chai').expect;
var IntegrationDriver = require('./spec-editor-harness');
var $ = require('jquery');
var Postal = require('postal');

var fixture = {
  "title": "Table",
  "key": "Table",
  "implementation": "StoryTeller.Samples.Fixtures.TableFixture",
  "grammars": [
    {
      "cells": [
        {
          "key": "FirstName",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "LastName",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "FullName",
          "default": null,
          "header": null,
          "output": true,
          "editor": null,
          "options": null
        },
        {
          "key": "LastNameFirst",
          "default": null,
          "header": null,
          "output": true,
          "editor": null,
          "options": null
        }
      ],
      "collection": "table",
      "title": "decisions",
      "key": "decisions",
      "type": "table",
      "errors": []
    },
    {
      "cells": [
        {
          "key": "x",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "y",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "sum",
          "default": null,
          "header": null,
          "output": true,
          "editor": null,
          "options": null
        }
      ],
      "collection": "sum",
      "title": "Adding numbers together",
      "key": "Sum",
      "type": "table",
      "errors": []
    },
    {
      "cells": [
        {
          "key": "x",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "y",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "product",
          "default": null,
          "header": null,
          "output": true,
          "editor": null,
          "options": null
        }
      ],
      "collection": "Rows",
      "title": "Subtract numbers",
      "key": "Divide",
      "type": "table",
      "errors": []
    },
    {
      "cells": [
        {
          "key": "x",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        }
      ],
      "collection": "Rows",
      "title": "Throw error on the Before",
      "key": "BeforeThrowsError",
      "type": "table",
      "errors": []
    },
    {
      "cells": [
        {
          "key": "x",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        }
      ],
      "collection": "Rows",
      "title": "Throw error on the After",
      "key": "AfterThrowsError",
      "type": "table",
      "errors": []
    },
    {
      "cells": [
        {
          "key": "a",
          "default": null,
          "header": "A",
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "b",
          "default": "2",
          "header": "B",
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "c",
          "default": "3",
          "header": "C",
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "d",
          "default": "4",
          "header": "D",
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "e",
          "default": "5",
          "header": "E",
          "output": false,
          "editor": null,
          "options": null
        }
      ],
      "collection": "table",
      "title": "Table with lots of options",
      "key": "TableWithLotsOfOptions",
      "type": "table",
      "errors": []
    },
    {
      "cells": [
        {
          "key": "number",
          "default": null,
          "header": null,
          "output": false,
          "editor": null,
          "options": null
        },
        {
          "key": "IsEven",
          "default": null,
          "header": null,
          "output": true,
          "editor": "boolean",
          "options": null
        }
      ],
      "collection": "table",
      "title": "Is Positive?",
      "key": "IsPositive",
      "type": "table",
      "errors": []
    }
  ],
  "type": "fixture",
  "errors": []
};


var specData = {
  "tags": [],
  "lifecycle": 0,
  "max-retries": 0,
  "title": "Tables",
  "steps": [
    {
      "key": "Table",
      "type": "section",
      "steps": [
        {
          "text": "Table by the ExposeAsTable attribute",
          "type": "comment",
          "id": "65a02bcd-88b6-432a-842c-772c0a12550d"
        },
        {
          "key": "Sum",
          "cells": {},
          "collections": [
            {
              "key": "sum",
              "type": "section",
              "steps": [
                {
                  "key": "sum",
                  "cells": {
                    "x": "a",
                    "y": "b",
                    "sum": "c",
                    "id": "1"
                  },
                  "collections": [],
                  "id": "1"
                },
                {
                  "key": "sum",
                  "cells": {
                    "x": "2",
                    "y": "2",
                    "sum": "4"
                  },
                  "collections": [],
                  "id": "20cb4c8a-3f2f-40a6-89ca-90304eddf10e"
                },
                {
                  "key": "sum",
                  "cells": {
                    "x": "2",
                    "y": "2",
                    "sum": "5"
                  },
                  "collections": [],
                  "id": "8157833f-ec90-4bb3-aa50-774ee17c2cf8"
                }
              ],
              "id": "first-table-data"
            }
          ],
          "id": "first-table"
        },
        {
          "text": "Table fixture from script",
          "type": "comment",
          "id": "61b1fea9-6e75-4f3f-a63d-e03fa2472f36"
        },
        {
          "key": "Divide",
          "cells": {},
          "collections": [
            {
              "key": "Rows",
              "type": "section",
              "steps": [
                {
                  "key": "Rows",
                  "cells": {
                    "x": "4",
                    "y": "2",
                    "product": "2",
                    "id": "4"
                  },
                  "collections": [],
                  "id": "4"
                },
                {
                  "key": "Rows",
                  "cells": {
                    "x": "3",
                    "y": "0",
                    "product": "0",
                    "id": "5"
                  },
                  "collections": [],
                  "id": "5"
                },
                {
                  "key": "Rows",
                  "cells": {
                    "x": "a",
                    "y": "3",
                    "product": "****"
                  },
                  "collections": [],
                  "id": "d62a61b6-c089-4a04-90ea-42ad99977750"
                },
                {
                  "key": "Rows",
                  "cells": {
                    "x": "3",
                    "y": "3",
                    "product": "****"
                  },
                  "collections": [],
                  "id": "06ce6e81-ac8b-4342-87a0-d9b6dfbe7c93"
                }
              ],
              "id": "second-table-data"
            }
          ],
          "id": "second-table"
        }
      ],
      "id": ""
    }
  ],
  "id": "table5"
};

describe('Editing Tables', function(){
	var driver = new IntegrationDriver([fixture], 'editing');
	var editCell = driver.editCell;
	var idFor = driver.idFor;
  var spec = null;

	beforeEach(function(){
		driver.loadSpecData(specData);
		spec = driver.spec;
	});

	it('should render the table steps', function(){
		driver.assertElementExists('#first-table-data');
		driver.assertElementExists('#second-table-data');
	});

	it('can delete a row from a table', function(){
		driver.click('#1 .delete');

		expect(spec.find("1")).to.be.falsey;

		driver.assertElementDoesNotExist('#1');
	});

	it('can add a new row to the table', function(){
		// 3 rows to start with

		expect(spec.find("first-table-data").steps.length).to.equal(3);

		driver.click('#first-table-data a.add-table-step');

		expect(spec.find("first-table-data").steps.length).to.equal(4);

		var element = driver.element('#first-table-data');

		expect($('.table-editor-row', element).length).to.equal(4);
	});

	it('can clone a row in the table', function(){
		// 3 rows to start with
		expect(spec.find("first-table-data").steps.length).to.equal(3);

		driver.click('#1 a.clone-table-row');

		var section = spec.find("first-table-data");
		expect(section.steps.length).to.equal(4);

		var newStep = section.steps[3];

		expect(newStep.findValue('x')).to.equal('a');
		expect(newStep.findValue('y')).to.equal('b');
		expect(newStep.findValue('sum')).to.equal('c');
	});

  it('can addAndSelect a new row when a table is active', function(){
    var section = spec.find("first-table-data");
    var initialCount = section.steps.length;

    // need to activate the table.
    var id = '#outline-node-' + section.id;
    driver.click(id);

    Postal.publish({
      channel: 'editor',
      topic: 'add-item',
      data: {}
    });

    expect(section.steps.length).to.equal(initialCount + 1);

    var location = driver.spec.navigator.location;

    var newStep = _.last(section.steps);

    expect(location).to.deep.equal(newStep.selectFirst());

  });
});
