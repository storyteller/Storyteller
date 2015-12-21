import React from 'react';
import Postal from 'postal';
import ExpirationPeriod from './../components/editing/header/expiration-period';
import {expect} from 'chai';
import {iit, ddescribe} from './test-helpers';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

function range (begin, end) {
  return Array.from(Array(end + 1).keys()).slice(begin);
}

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
  let instance, options, select, theSpec, small, button,
    overlayTrigger;

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

    Postal.subscribe({
        channel  : "engine-request",
        topic    : "*",
        callback : function(data, envelope) {
          data.topic = envelope.topic;
            listener.append(data);
        }
    });

    theSpec = {
      'id': 'theSpec',
      'expiration-period': 4,
      'last-updated': 'Thursday, July 9, 2015'
    }

    instance = TestUtils.renderIntoDocument(<ExpirationPeriod spec={theSpec} disabled={false} />);
    options = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'option');
    select = TestUtils.findRenderedDOMComponentWithTag(instance, 'select');
    small = TestUtils.findRenderedDOMComponentWithTag(instance, 'small');
    button = TestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    overlayTrigger = TestUtils.findRenderedComponentWithType(instance, OverlayTrigger)
  });

  it('renders 13 options for the range', () => {
    var optRange = range(0, 12);
    var children = options.map((opt) => opt.props.children);
    var values = options.map((opt) => opt.props.value);
    expect(options.length).to.equal(13);
    expect(children).to.deep.equal(optRange.map((opt) => (parseInt(opt)) ? opt : "Never"));
    expect(values).to.deep.equal(optRange);
  });

  it('selects the given expiration period', () => {
    expect(select.getDOMNode().value).to.equal('4');
  });

  it('sets the disabled value', function () {
    expect(button.props.disabled).to.be.false;

    instance = TestUtils.renderIntoDocument(<ExpirationPeriod spec={theSpec} disabled={true} />);
    button = TestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    expect(button.props.disabled).to.be.true;
  });

  it('gives the "Never expires." message when given a 0 period', () => {
    theSpec['expiration-period'] = 0;
    instance = TestUtils.renderIntoDocument(<ExpirationPeriod spec={theSpec} />);
    expect(instance.getDOMNode().innerHTML).to.contain('expires.');
    expect(instance.getDOMNode().innerHTML).not.to.contain('Expires in:');
  })

  it('gives the "Expires in:" message when given a greater than 0 period', () => {
    expect(instance.getDOMNode().innerHTML).to.contain('Expires in:');
    expect(instance.getDOMNode().innerHTML).not.to.contain('expires.');
  })

  it('broadcasts a change message when it changes', () => {
    TestUtils.Simulate.change(select, {target: {value: '3'}});

    var message = findPublishedMessage('changes');
    expect(message.period).to.equal(3);
  });

  it('displays the last updated date', () => {
    expect(small.props.children[0]).to.equal(`Last Updated: `);
    expect(small.props.children[1]).to.equal(theSpec['last-updated'])
  });

  it('updates the date', () => {
    TestUtils.Simulate.click(button, {});

    var message = findPublishedMessage('bump-spec-date');
    expect(message.id).to.equal(theSpec.id);
  });

  describe('when the button is clicked', () => {
    beforeEach(function () {
      TestUtils.Simulate.click(button, {});
    })
    it('updates the date', () => {
      var message = findPublishedMessage('bump-spec-date');
      expect(message.id).to.equal(theSpec.id);
    });
  });

  describe('the tooltip', () => {
    it('has the bottom placement', () => {
      expect(overlayTrigger.props.placement).to.equal('bottom');
    });

    it('has the correct tooltip text', () => {
      expect(overlayTrigger.props.overlay.props.children).to.equal('This button will bump the "Last Updated" date.');
    });
  });
});

