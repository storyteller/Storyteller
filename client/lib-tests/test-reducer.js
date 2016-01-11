var expect = require('chai').expect;
var reducer = require('./../lib/state/reducer');
var { createStore } = require('redux');
var initial = require('./../initialization');

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
    
    describe('Handling system-recycled', () => {
        var state;
        
        beforeEach(() => {
            store.dispatch(initial.recycled);
            
            state = store.getState();
        });
        
        it('captures the FixtureLibrary', () => {
            var FixtureLibrary = require('./../lib/fixtures/fixture-library');
            
            expect(state.get('fixtures') instanceof FixtureLibrary).to.be.true;
        });
        
        it('captures the system state', () => {
           var systemState = state.get('system-state').toJS();
           
           // pre-canned from initialization.js
           var expected = {
               "success":true,
               "error":null,
               "system_full_name":null,
               "name":"Storyteller.Samples",
               "time":"2:05 PM",
               "recycling":false,
               "properties":{
                   "ConfigFile":"Z:\\code\\storyteller\\src\\Storyteller.Samples\\App.config",
                   "BaseDirectory":"Z:\\code\\storyteller\\src\\Storyteller.Samples",
                   "BinPath":"bin\\Debug","Profile":"Safari"},
                   "type":"system-recycled",
                   "system_name":"StoryTeller.Samples.GrammarSystem"}
           
           expect(systemState).to.deep.equal(expected);
        });
        
        
    });
    
    describe('Handling hierarchy-loaded', () => {
        var state;
        
        beforeEach(() => {
            store.dispatch(initial.recycled);
            store.dispatch(initial.hierarchy);
            
            state = store.getState();
        });
        
        it('should have a map of the specs', () => {
           var SpecRecord = require('./../lib/model/spec-record');
           
           var specs = state.get('specs');
           var all = specs.toJS();

           // spot checking
           expect(specs.has('set1')).to.be.true; 
           expect(specs.has('set2')).to.be.true; 
           expect(specs.has('set3')).to.be.true; 
           
           expect(specs.get('set1') instanceof SpecRecord).to.be.true;
           expect(specs.get('set2') instanceof SpecRecord).to.be.true;
           expect(specs.get('set3') instanceof SpecRecord).to.be.true;

        });
        
        it('captures the hierarchy', () => {
            var Suite = require('./../lib/model/suite');
            
            expect(state.get('hierarchy') instanceof Suite).to.be.true;
        });
    });
    
    describe('Handling initial model', () => {
        var state;
        
        beforeEach(() => {
            store.dispatch(initial);
            state = store.getState();
        });
        
        it('should have a map of the specs', () => {
           var SpecRecord = require('./../lib/model/spec-record');
           
           var specs = state.get('specs');
           var all = specs.toJS();

           // spot checking
           expect(specs.has('set1')).to.be.true; 
           expect(specs.has('set2')).to.be.true; 
           expect(specs.has('set3')).to.be.true; 
           
           expect(specs.get('set1') instanceof SpecRecord).to.be.true;
           expect(specs.get('set2') instanceof SpecRecord).to.be.true;
           expect(specs.get('set3') instanceof SpecRecord).to.be.true;

        });
        
        it('captures the hierarchy', () => {
            var Suite = require('./../lib/model/suite');
            
            expect(state.get('hierarchy') instanceof Suite).to.be.true;
        });
        
        it('captures the FixtureLibrary', () => {
            var FixtureLibrary = require('./../lib/fixtures/fixture-library');
            
            expect(state.get('fixtures') instanceof FixtureLibrary).to.be.true;
        });
        
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