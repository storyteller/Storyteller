var React = require('react');
var expect = require('chai').expect;

var $ = require('jquery');
var _ = require('lodash');

var SpecLeaf = require('./../components/explorer/spec-leaf');
var Spec = require('./../lib/model/specification');
var ComponentHarness = require('./component-harness');

describe.only('the SpecLeaf control', function(){
	var component, harness;
    
    beforeEach(() => {
        harness = new ComponentHarness();
        
        // TODO -- scrap this and go to an integration test on the explorer page
    });

	function getComponent(id) {
        var specs = harness.store.getState().get('specs');
        specs.toList().toArray().forEach(s => console.log(s.id));
        
		var spec = specs.get(id);
        
        expect(spec).to.not.be.null;

		var component = (<SpecLeaf spec={spec} />);
        
        harness.render(component);

		return component;
	}

	it('should render the run link when the state is none', function(){
		var component = getComponent('embeds');
		var node = harness.element();

		expect(component.props.spec.state).to.equal('none');
		expect($('.run', node).length).to.equal(1);
	});
/*
	it('should not render the run link when the state is queued', function(){
		QueueState.store({queued: ['embeds']});

		var component = getComponent({});
		var node = component.getDOMNode();

		expect($('.run', node).length).to.equal(0);
	});

	it('should not render the run link when the state is running', function(){
		QueueState.markRunning('embeds');

		var component = getComponent({});
		var node = component.getDOMNode();

		expect($('.run', node).length).to.equal(0);
	});

*/
});
