var expect = require('chai').expect;
var reducer = require('./../lib/state/reducer');
var { createStore } = require('redux');
var initial = require('./../initialization');
var SpecRecord = require('./../lib/model/spec-record');
var Suite = require('./../lib/model/suite');
var RunningState = require('./../lib/model/running-state');
var RunningSpec = require('./../lib/model/running-spec');

describe('Handling queue-state', () => {
    var store;
   
    beforeEach(() => {
        store = createStore(reducer);
        store.dispatch(initial);
    });
   
    
    it('can initialize the running state', () => {
        store.dispatch({type: 'queue-state', running: 'embeds', queued: ['a', 'b']});
    
        var state = store.getState();
    
        expect(state.get('running') instanceof RunningState).to.be.true;
        expect(state.get('running').id).to.equal('embeds');
    });
    
    it('can replace the running state', () => {
        store.dispatch({type: 'queue-state', running: 'general1', queued: ['a', 'b']});
        store.dispatch({type: 'queue-state', running: 'embeds', queued: ['a', 'b']});
    
        var state = store.getState();
    
        expect(state.get('running') instanceof RunningState).to.be.true;
        expect(state.get('running').id).to.equal('embeds');
        
        expect(state.get('running-spec') instanceof RunningSpec).to.be.true;
        expect(state.get('running-spec').id).to.equal('embeds');
    });

    it('can replace queued state', () => {
        store.dispatch({type: 'queue-state', running: null, queued: ['a', 'b']});
        
        var state = store.getState();
        expect(state.get('queued')).to.deep.equal(['a', 'b']); 
    });
    
    it('does not replace the queue state when the array is the same', () => {
        var initial = ['a', 'b'];
        
        store.dispatch({type: 'queue-state', running: null, queued: initial});
        store.dispatch({type: 'queue-state', running: null, queued: ['a', 'b']});
        
        
        var state = store.getState();
        expect(state.get('queued')).to.equal(initial);    
    });
});