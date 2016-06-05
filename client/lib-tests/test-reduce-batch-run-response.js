var expect = require('chai').expect;
var Reducer = require('./../lib/state/reducer');
var SpecRecord = require('./../lib/model/spec-record');
var Specification = require('./../lib/model/specification');
var BatchRunResponseData = require('./../batch-run-response-data.js');
BatchRunResponseData.system = "Foo";
BatchRunResponseData.suite = 'important';


var FixtureLibrary = require('./../lib/fixtures/fixture-library');

describe('Handling BatchRunResponse message in Reducer', () => {
    var state = Reducer(undefined, BatchRunResponseData);
    
    it('sets the time', () => {
        expect(state.get('time')).to.equal(BatchRunResponseData.time);
    });
    
    it('sets the system', () => {
        expect(state.get('system')).to.equal(BatchRunResponseData.system); 
    });
    
    it('sets the library', () => {
       expect(state.get('fixtures') instanceof FixtureLibrary).to.be.true; 
    });
    
    it('sets the suite', () => {
       expect(state.get('suite')).to.equal(BatchRunResponseData.suite); 
    });
    
    it('builds all the spec records', () => {
       var specs = state.get('specs').toList().toArray();
       expect(specs.length).to.equal(21); 
       
       
       specs.forEach(x => {
           expect(x instanceof SpecRecord).to.be.true;
       });
    });
    
    it('builds the data and results to the SpecRecord', () => {
        var specs = state.get('specs').toList().toArray();
        var spec = specs[0];
        
        expect(spec.spec instanceof Specification).to.be.true;
        expect(spec.last_result).to.not.be.null;
        expect(spec.last_result.results).to.not.be.null;
    });
});