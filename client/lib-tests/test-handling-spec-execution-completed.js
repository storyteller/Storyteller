var expect = require('chai').expect;
var reducer = require('./../lib/state/reducer');
var { createStore } = require('redux');
var initial = require('./../initialization');
var SpecRecord = require('./../lib/model/spec-record');
var Suite = require('./../lib/model/suite');
var RunningState = require('./../lib/model/running-state');

describe('Reducer', () => {
    var store;
   
    beforeEach(() => {
        store = createStore(reducer);
        store.dispatch(initial);
    });
   
    it('clears the running state if matches the spec', () => {
        store.dispatch({type: 'queue-state', running: 'embeds', queued: []});
        
        store.dispatch({type: 'spec-execution-completed', id: 'embeds', results: {counts: {}}}) ;
    
        expect(store.getState().get('running')).to.be.null;
    });
    
    it('stores the last result on the matching spec', () => {
        store.dispatch({type: 'spec-execution-completed', id: 'embeds', results: {counts: {}}}) ;
        var spec = store.getState().get('specs').get('embeds');
        
        expect(spec.last_result).to.not.be.null;
    });
});