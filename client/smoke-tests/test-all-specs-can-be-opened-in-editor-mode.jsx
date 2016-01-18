var expect = require('chai').expect;
var _ = require('lodash');
var React = require('react');
var ComponentHarness = require('./../component-tests/component-harness');
var SpecEditor = require('./../components/editing/spec-editor');

describe('Big Bang Smoke Test on the Editor Controls', function(){

    var initialization = require('./../initialization');

    var specs = initialization.hierarchy.specs.map(x => x.data);

	for (var i = 0; i < specs.length; i++){
		var spec = specs[i];

		it('can open Editor to ' + spec.id, function(){
			var harness = new ComponentHarness();
            var component = (<SpecEditor params={{id: spec.id}} />);
            harness.render(component);
		});

		it('can navigate from top to bottom - ' + spec.id, () => {
			var harness = new ComponentHarness();
            var component = (<SpecEditor params={{id: spec.id}} />);
            harness.render(component);
            
            harness.store.dispatch({type: 'go-home', id: spec.id});
            var getSpec = () => harness.store.getState().getIn(['specs', spec.id]);
            
            while (!getSpec().spec.navigator.atEnd()){
                harness.store.dispatch({type: 'go-next', id: spec.id})
            }
            
            var theFinalSpec = getSpec().spec;
			expect(theFinalSpec.navigator.location.step).to.equal(theFinalSpec.adder);
		});

		it('can navigate from bottom to top - ' + spec.id, () => {
			var harness = new ComponentHarness();
            var component = (<SpecEditor params={{id: spec.id}} />);
            harness.render(component);
            
            harness.store.dispatch({type: 'go-end', id: spec.id});
            
            var getSpec = () => harness.store.getState().getIn(['specs', spec.id]);
            while (!getSpec().spec.navigator.atHome()){
                harness.store.dispatch({type: 'go-previous', id: spec.id})
            }
		});

	}

	
});