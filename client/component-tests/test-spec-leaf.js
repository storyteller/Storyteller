var React = require('react');
var expect = require('chai').expect;

var $ = require('jquery');
var _ = require('lodash');

var SpecLeaf = require('./../components/explorer/spec-leaf');
var Spec = require('./../lib/model/specification');
var QueueState = require('./../lib/stores/queue-state');

describe('the SpecLeaf control', function(){
	beforeEach(() => {
		QueueState.clear();
	});

	function getComponent(specProps) {
		var spec = new Spec({
			name: 'Embeds',
			id: 'embeds'
		});

		spec = _.extend(spec, specProps);

		var component = TestUtils.renderIntoDocument(
		  <SpecLeaf spec={spec} />
		);

		return component;
	}

	it('should render the run link when the state is none', function(){
		var component = getComponent({});
		var node = component.getDOMNode();

		expect(component.props.spec.state).to.equal('none');
		expect($('.run', node).length).to.equal(1);
	});

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


});
