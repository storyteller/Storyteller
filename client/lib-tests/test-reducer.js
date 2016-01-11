var expect = require('chai').expect;
var reducer = require('./../lib/state/reducer');
var { createStore } = require('redux');

describe('Reducer', () => {
    var store;
   
    beforeEach(() => {
        store = createStore(reducer);
    });
   
    it('can fill in the initial state', () => {
        var state = store.getState();
       
        expect(state.has('lifecycle-filter')).to.be.true;       
        expect(state.has('status-filter')).to.be.true;       
        expect(state.has('tree-state')).to.be.true;       
        expect(state.has('specs')).to.be.true;       
        expect(state.has('queued')).to.be.true;       
        expect(state.has('running')).to.be.true;       
    });
   
    describe('Handling queue-state', () => {
        it('can replace the running state', () => {
            store.dispatch({type: 'queue-state', running: 'c', queued: ['a', 'b']});
        
            var state = store.getState();
        
            expect(state.get('running')).to.equal('c');
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
   
    describe('Handling spec-progress', () => {
       it('recalculates state', () => {
            store.dispatch({
                type: 'spec-progress',
                id: 'a',
                counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0},
                step: 3,
                total: 10
            });
            
            var state = store.getState();
            
            expect(state.get('running')).to.equal('a');
            
            var progress = state.get('progress');

            expect(progress.counts.success()).to.be.true; 
       });
    });
});