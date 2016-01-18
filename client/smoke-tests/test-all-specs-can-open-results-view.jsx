var expect = require('chai').expect;
var ComponentHarness = require('./../component-tests/component-harness');
var _ = require('lodash');
var React = require('react');
var SpecResults = require('./../components/editing/spec-results');


describe('Big Bang Smoke Test on the Results Controls', function(){    
    var initialization = require('./../initialization');

    var specs = initialization.hierarchy.specs.map(x => x.data);

	for (var i = 0; i < specs.length; i++){
		var spec = specs[i];

        it('can open Results to ' + spec.id, () => {
            var harness = new ComponentHarness();
            var component = ( <SpecResults params={{id: spec.id}} />);
            harness.render(component);
        });
	}

});