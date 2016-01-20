var expect = require('chai').expect;
var Search = require('./../components/header/search');
var ComponentHarness = require('./component-harness');
var React = require('react');

describe('The Search Dialog', () => {
	var component, harness;

	before(function(){
        component = (<Search />);
        harness = new ComponentHarness();
        harness.render(component);
	});
    
    it('can display the search modal without error', () => {
        harness.click('#search-button');
    });
});
