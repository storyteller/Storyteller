var expect = require('chai').expect;
var reducer = require('./../lib/state/reducer');
var { createStore } = require('redux');
var initial = require('./../initialization');
var SpecRecord = require('./../lib/model/spec-record');
var Suite = require('./../lib/model/suite');
var RunningState = require('./../lib/model/running-state');

describe('Handling spec-progress in the reducer', () => {
    var store;
   
    beforeEach(() => {
        store = createStore(reducer);
        store.dispatch(initial);
    });
    
    it('resets the running state if none', () => {
        var action = {
            type: 'spec-progress',
            id: 'embeds',
            counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0},
            step: 3,
            total: 10
        };
        
        store.dispatch(action);
        
        var state = store.getState();
        
        var running = state.get('running');
        expect(running instanceof RunningState).to.be.true;
        expect(running.id).to.equal('embeds');
        expect(running.status).to.equal('success');
    });
    
    it('resets the running state if different', () => {
        store.dispatch({type: 'queue-state', running: 'general1', queued: []});
        
        var action = {
            type: 'spec-progress',
            id: 'general1',
            counts: {rights: 0, wrongs: 0, errors: 0, invalids: 0},
            step: 3,
            total: 10
        };
        
        store.dispatch(action);
        
        var state = store.getState();
        
        var running = state.get('running');
        expect(running instanceof RunningState).to.be.true;
        expect(running.id).to.equal('general1');
        expect(running.status).to.equal('none');
    });
   
    it('recalculates state', () => {
        var action = {
            type: 'spec-progress',
            id: 'general1',
            counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0},
            step: 3,
            total: 10
        };
        
        store.dispatch(action);
        var state = store.getState();
        expect(state.get('progress')).to.equal(action);
    });
    
    it('updates the running status', () => {
        store.dispatch({
            type: 'spec-progress',
            id: 'general1',
            counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0},
            step: 3,
            total: 10
        });
        
        store.dispatch({
            type: 'spec-progress',
            id: 'general1',
            counts: {rights: 1, wrongs: 1, errors: 0, invalids: 0},
            step: 3,
            total: 10
        });
        
        var state = store.getState();
        var running = state.get('running');
        expect(running.status).to.equal('failed');
    });
});