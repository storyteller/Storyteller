var expect = require('chai').expect;
var Spec = require('./../lib/model/specification');
var RunningSpec = require('./../lib/model/running-spec');
var FixtureLibrary = require('./../lib/fixtures/fixture-library');
var fixtureData = [require('./math-fixture-data'), require('./zork-fixture-data')];


describe('SpecRecord', () => {
  var specData, library;
  
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
    
    
    
    
  });
  
  it('can build itself', () => {
    var running = new RunningSpec(specData, library);

    expect(running.version).to.equal(0);
    expect(running.spec instanceof Spec).to.be.true; 
  });
  
  it('knows when it is loading positive', () => {
    specData.mode = 'header';
    
    var running = new RunningSpec(specData, library);
    expect(running.loading).to.be.true;
  });
  
  it('knows when it is not loading', () => {
    specData.mode = 'full';
    
    var running = new RunningSpec(specData, library);
    expect(running.loading).to.be.false;
  });
  
  it('can replace its data', () => {
    specData.mode = 'header';
    
    var running = new RunningSpec(specData, library);
    specData.mode = "full";
    
    var running2 = running.replaceData(specData);
    
    expect(running2.spec instanceof Spec).to.be.true;
    expect(running2).to.not.equal(running);
  });
  
  it('can read a result when a header', () => {
    specData.mode = 'header';
    
    var running = new RunningSpec(specData, library);
    var result = {}
    
    var running2 = running.readResult(result);
    expect(running2).to.not.equal(running);
    expect(running2.list[0]).to.equal(result);
  });
  
  it('can read a result when full', () => {
    specData.mode = 'full';
    
    var running = new RunningSpec(specData, library);
    var recorded = null;
    running.spec.readResult = x => {
        recorded = x;
    }
    
    var result = {}
    
    var running2 = running.readResult(result);
    expect(running2).to.not.equal(running);
    expect(recorded).to.equal(result);
  });
  
});