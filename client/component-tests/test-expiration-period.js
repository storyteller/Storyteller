import React from 'react';
import Postal from 'postal';
import ExpirationPeriod from './../components/editing/header/expiration-period';
import {expect} from 'chai';
import {iit, ddescribe} from './test-helpers';
import {range} from '../lib/array-helpers';

let listener = {
	events: [],

	clear: function(){
		this.events = [];
	},

	append: function(data){
		this.events.push(data);
	}
};

function findPublishedMessage(topic){
	return _.find(listener.events, function(x){
		return x.topic == topic;
	});
}

describe('ExpirationPeriod', () => {
  let instance, options, select;

	beforeEach(() => {
		Postal.reset();
		listener.clear();

		Postal.subscribe({
		    channel  : "editor",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		        listener.append(data);
		    }
		});

		instance = TestUtils.renderIntoDocument(<ExpirationPeriod expirationPeriod={4} />);
    options = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'option');
    select = TestUtils.findRenderedDOMComponentWithTag(instance, 'select');
	});

  it('renders 13 options for the range', () => {
    var optRange = range(0, 12);
    var children = options.map((opt) => opt.props.children);
    var values = options.map((opt) => opt.props.value);
    expect(options.length).to.equal(13);
    expect(children).to.deep.equal(optRange);
    expect(values).to.deep.equal(optRange);
  });

  it('selects the given expiration period', () => {
    expect(select.getDOMNode().value).to.equal('4');
  });

  it('gives the "Never expires." message when given a 0 period', () => {
		instance = TestUtils.renderIntoDocument(<ExpirationPeriod expirationPeriod={0} />);
    expect(instance.getDOMNode().innerHTML).to.contain('Never expires.');
  })

  it('gives the "Expires in:" message when given a greater than 0 period', () => {
    expect(instance.getDOMNode().innerHTML).to.contain('Expires in:');
  })

	it('broadcasts a change message when it changes', () => {
		TestUtils.Simulate.change(select, {target: {value: '3'}});

		var message = findPublishedMessage('changes');
		expect(message.period).to.equal(3);
	});
});
