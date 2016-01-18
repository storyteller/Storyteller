var expect = require('chai').expect;
var ComponentHarness = require('./../component-tests/component-harness');
var _ = require('lodash');
var React = require('react');
var SpecPreview = require('./../components/editing/spec-preview');


describe('Big Bang Smoke Test on the Preview Controls', function(){
    var initialization = require('./../initialization');

    var specs = initialization.hierarchy.specs.map(x => x.data);

	for (var i = 0; i < specs.length; i++){
		var spec = specs[i];

        it('can open Preview to ' + spec.id, () => {
            var harness = new ComponentHarness();
            var component = ( <SpecPreview params={{id: spec.id}} />);
            harness.render(component);
        });
	}

});