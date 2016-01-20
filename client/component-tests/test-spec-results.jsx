var expect = require('chai').expect;
var SpecResults = require('./../components/editing/spec-results');
var ComponentHarness = require('./component-harness');
var React = require('react');

describe('Opening the SpecResults', () => {
    var harness;
    
    beforeEach(() => {
        harness = new ComponentHarness();
        
    });
    
    it('can open to historical results', () => {
        harness.render(<SpecResults params={{id: 'embeds'}} />);
    });
    
    it('can open to a running result', () => {
        var data = harness.store.getState().get('specs').get('general1')
            .last_result.data;
            
        harness.store.dispatch({type: 'spec-data', id: 'general1', data: data});
        
        harness.store.dispatch({type: 'queue-state', queued: [], running: 'general1'});
        
        harness.render(<SpecResults params={{id: 'general1'}} />);
    });
});