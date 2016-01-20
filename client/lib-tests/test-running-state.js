var expect = require('chai').expect;
var RunningState = require('./../lib/model/running-state');

describe('RunningState', () => {
    it('initially has state == none', () => {
        var state = new RunningState('a');
        expect(state.status).to.equal('none');  
    });
    
    it('returns itself when the status does not change', () => {
        var state = new RunningState('a');
        var state2 = state.updateCounts({counts: {rights: 0, wrongs: 0, errors: 0, invalids: 0}});
        
        expect(state2).to.equal(state);
        
    });
    
    it('replaces itself when the status changes to success', () => {
        var state = new RunningState('a');
        var state2 = state.updateCounts({counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}});
        
        expect(state2).to.not.equal(state);
        expect(state2.status).to.equal('success');
        
    });
    
    it('does not replace itself when the status goes from success to success', () => {
        var state = new RunningState('a');
        var state2 = state.updateCounts({counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}});
        var state3 = state.updateCounts({counts: {rights: 2, wrongs: 0, errors: 0, invalids: 0}});
        
        expect(state2).to.not.equal(state);
        expect(state3).to.not.equal(state);

        
    });
    
    it('replaces itself when the status changes to failed', () => {
        var state = new RunningState('a');
        var state2 = state.updateCounts({counts: {rights: 1, wrongs: 1, errors: 0, invalids: 0}});
        
        expect(state2).to.not.equal(state);
        expect(state2.status).to.equal('failed');
        
    });
});