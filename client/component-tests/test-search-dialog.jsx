import { expect } from 'chai';
import React from 'react';
import Search from './../components/header/search';
import ComponentHarness from './component-harness';

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
