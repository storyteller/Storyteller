var expect = require('chai').expect;
var Spec = require('./../lib/model/specification');
var SpecRecord = require('./../lib/model/spec-record');
var Counts = require('./../lib/model/counts');
var FixtureLibrary = require('./../lib/fixtures/fixture-library');
var fixtureData = [require('./math-fixture-data'), require('./zork-fixture-data')];


describe('SpecRecord', () => {
  var specData, spec, library, record;
  
  beforeEach(() => {
    specData = {
      id: 1,
      'max-retries': 2,
      'expiration-period': 3,
      'last-updated': 'January 16, 1983',
      title: 'My first specification',
      mode: 'header',
      lifecycle: 'Regression',
      steps: [
        {
          id: 'section1',
          type: 'section',
          key: 'Math',
          activeCells: {},
          steps: [
            {id: 2, key: 'StartWith', cells: {x: 1}},
            {id: 3, key: 'Add', cells: {x: 5}},
            {id: 4, key: 'Subtract', cells: {x: 2}},
            {id: 5, key: 'TheResultShouldBe', cells: {x: 4}},
            {id: 6, key: 'Adding', cells:{x:1, y:2, result:3}}
          ]
        },
        {
          id: 7,
          type: 'section',
          key: 'Zork',
          activeCells: {},
          steps: [
            {key: 'SwingSword', cells: {}, id: 8}
          ]
        },
        {id: 8, type: 'comment', text: 'bar'},
        {
          id: 'section2',
          type: 'section',
          activeCells: {},
          key: 'Math',
          steps: [
            {id: 9, key: 'Adding', cells:{x:1, y:2, result:3}}
          ]
        },
      ]
    };
    library = new FixtureLibrary(fixtureData);
    
    record = new SpecRecord(specData, library, null);
    
    
  });
  
  it('can read the lifecycle', () => {
     expect(record.lifecycle).to.equal(specData.lifecycle); 
  });
  
  it('can read the title', () => {
      expect(record.title).to.equal(specData.title);
  });
  
  it('can read the mode', () => {
     expect(record.mode).to.equal('header'); 
  });
  
  it('can replace the spec', () => {
     var spec2 = new Spec(specData, library);
     var record2 = record.replace(spec2);
     
     expect(record2.spec).to.equal(spec2);
     expect(record2).to.not.equal(record); 
  });
  
  it('has results negative', () => {
     expect(record.hasResults()).to.be.false; 
  });
  
  it('evaluates status as none with no results', () => {
     expect(record.status).to.equal('none');
  });
  
  it('can capture positive results', () => {
      var results = {
          results: {
              counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}
          }
      };
      
      var record2 = record.recordLastResult(results);
      
      expect(record2.last_result).to.equal(results);
      expect(record2.status).to.equal('success');
      
      expect(record2).to.not.equal(record);
  });
  
  it('can detect has changes positive', () => {
      var results = {
          results: {
              counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}
          }
      };
      
      var record2 = record.recordLastResult(results);
      expect(record2.hasResults()).to.be.true;
  });
  
  it('can capture negative results', () => {
      var results = {
          results: {
              counts: {rights: 1, wrongs: 1, errors: 0, invalids: 0}
          }
      };
      
      var record2 = record.recordLastResult(results);
      
      expect(record2.last_result).to.equal(results);
      expect(record2.status).to.equal('failed');
      
      expect(record2).to.not.equal(record);
  });
  
  it('can clear results', () => {
      var results = {
          results: {
              counts: {rights: 1, wrongs: 1, errors: 0, invalids: 0}
          }
      };
      
      var record2 = record.recordLastResult(results);
      var record3 = record2.clearResults();
      
      expect(record3.status).to.equal('none');
      expect(record3.last_result).to.be.null;
  });
  
  it('can accept a change', () => {
     var record2 = record.acceptChange(s => s.lifecycle = 'Acceptance');
     expect(record2.version).to.equal(1);
     expect(record2.lifecycle).to.equal('Acceptance');
     expect(record2).to.not.equal(record); 
  });
  
  describe('when determining the icon', () => {
      var running = null;
      var queued = [];
      var progress;
      
      beforeEach(() => {
        running = null;
        queued = [];
        progress = {
            counts: new Counts({rights: 0, wrongs: 0, errors: 0, invalids: 0})
        };
      });
      
      it('none when not running or queued or any results', () => {
        expect(record.icon(running, queued, progress)).to.equal('none'); 
      });
      
      it('success when not running or queued but previously successful', () => {
        var results = {
            results: {
                counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}
            }
        };
        
        record = record.recordLastResult(results);
        
        expect(record.icon(running, queued, progress)).to.equal('success');  
      });
      
      it('failed when not running or queued but previously failed', () => {
        var results = {
            results: {
                counts: {rights: 1, wrongs: 1, errors: 0, invalids: 0}
            }
        };
        
        record = record.recordLastResult(results);
        
        expect(record.icon(running, queued, progress)).to.equal('failed');    
      });
      
      it('queued when queued but not yet running', () => {
          queued = [record.id];
          
          expect(record.icon(running, queued, progress)).to.equal('queued');    
      });
      
      it('running when running without any determinant counts', () => {
          running = record.id;
          
          expect(record.icon(running, queued, progress)).to.equal('running');    
      });
      
      it('running and succeeding', () => {
          running = record.id;
          progress.counts.rights = 1;
          
          expect(record.icon(running, queued, progress)).to.equal('running-success');
      });
      
      it('running and failing', () => {
          running = record.id;
          progress.counts.wrongs = 1;
          
          expect(record.icon(running, queued, progress)).to.equal('running-failed');
      });
  });
});