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
            store.dispatch({type: 'system-recycle-start'});
            store.dispatch(initial.recycled);
           
            
            state = store.getState();
        });
        
        it('captures the FixtureLibrary', () => {
            var FixtureLibrary = require('./../lib/fixtures/fixture-library');
            
            expect(state.get('fixtures') instanceof FixtureLibrary).to.be.true;
        });
        
        it('should mark recycling as false', () => {
           expect(state.getIn(['system-state', 'recycling'])).to.be.false; 
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
    
    describe('Handling system-recycle-start', () => {
        var state;
        
        beforeEach(() => {
            store.dispatch(initial);
            store.dispatch({type: 'system-recycle-start'});
            state = store.getState();
        });
        
        it('should mark the recycling = true', () => {
           expect(state.getIn(['system-state', 'recycling'])).to.be.true; 
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
    
    describe('Handling expand-all', () => {
       var state;
       
       beforeEach(() => {
           store.dispatch(initial);
           store.dispatch({type: 'collapse-all'});
           store.dispatch({type: 'expand-all'});
           
           state = store.getState();
       }) ;
       
       it('should expand every suite', () => {
          var top = state.get('hierarchy');
          var suites = top.allSuites();
          
          var treeState = state.get('tree-state').toJS();
          
          for (var key in treeState){
              expect(treeState[key]).to.be.true;
          } 
          
          suites.forEach(s => {
             expect(treeState[s.path]).to.be.true; 
          });
       });
    });
    
    describe('Handling collapse-all', () => {
       var state;
       
       beforeEach(() => {
           store.dispatch(initial);
           store.dispatch({type: 'expand-all'});
           store.dispatch({type: 'collapse-all'});
           
           state = store.getState();
       }) ;
       
       it('should expand every suite', () => {
          var top = state.get('hierarchy');
          var suites = top.allSuites();
          
          var treeState = state.get('tree-state').toJS();
          
          for (var key in treeState){
              expect(treeState[key]).to.be.false;
          } 
          
          suites.forEach(s => {
             expect(treeState[s.path]).to.be.false; 
          });
       });
    });
    
    describe('Handling toggle-tree-state', () => {
       beforeEach(() => {
           store.dispatch(initial);

       });
       
       it('toggles from open to closed', () => {
           store.dispatch({type: 'expand-all'});
           store.dispatch({type: 'toggle-tree-state', path: 'Embedded'});
           
           var treeState = store.getState().get('tree-state');
           
           expect(treeState.get('Embedded')).to.be.false;
       });
       
       it('toggles from closed to open', () => {
           store.dispatch({type: 'collapse-all'});

           store.dispatch({type: 'toggle-tree-state', path: 'Embedded'});
           
           var treeState = store.getState().get('tree-state');

           expect(treeState.get('Embedded')).to.be.true;
       });
    });
    
    describe('handling spec-status-filter-changed', () => {
       beforeEach(() => {
           store.dispatch(initial);
       });
       
       it('the initial filter is any', () => {
            expect(store.getState().get('status-filter')).to.equal('any'); 
       });
       
       it('changes that filter on the message', () => {
          store.dispatch({type: 'spec-status-filter-changed', status: 'failed'});
          
           expect(store.getState().get('status-filter')).to.equal('failed'); 
       });
    });
    
    describe('handling lifecycle-filter-changed', () => {
       beforeEach(() => {
           store.dispatch(initial);
       });
       
       it('the initial filter is any', () => {
            expect(store.getState().get('lifecycle-filter')).to.equal('any'); 
       });
       
       it('changes that filter on the message', () => {
          store.dispatch({type: 'lifecycle-filter-changed', lifecycle: 'Acceptance'});
          
           expect(store.getState().get('lifecycle-filter')).to.equal('Acceptance'); 
       });
    });
});