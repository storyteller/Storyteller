import _ from 'lodash';
var expect = require('chai').expect;

var FixtureLibrary = require('./../lib/fixtures/fixture-library');

var fixtureData = [require('./math-fixture-data'), require('./zork-fixture-data')];

var Specification = require('./../lib/model/specification');

function FakeChange(){
  this.applied = 0;
  this.unapplied = 0;

  this.apply = function(spec){
    this.applied++;
  }

  this.unapply = function(spec){
    this.unapplied++;
  }

  this.reset = function(){
    this.applied = 0;
    this.unapplied = 0;
  }
}


describe('Specification', function(){
  var specData, spec, library;
  beforeEach(() => {
    specData = {
      id: 1,
      'max-retries': 2,
      'expiration-period': 3,
      'last-updated': 'January 16, 1983',
      title: 'My first specification',
      mode: 'header',
      lifecycle: 'Regression',
      path: 'Suite/My first specification',
      breakpoints: [],
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
    spec = new Specification(specData, library);
  });

  describe('when building a specification from data', function(){
    it('grabs the max retries', () => {
      expect(spec['max-retries']).to.equal(2);
    });

    it('can create an outline of holders', function(){
      var expected = {
        active: false,
        id: spec.id,
        title: spec.title,
        children: [
          {active: true, id: spec.steps[0].id, title: spec.steps[0].title, children: []},
          {active: false, id: spec.steps[1].id, title: spec.steps[1].title, children: []},
          {active: false, id: spec.steps[3].id, title: spec.steps[3].title, children: []}
        ]
      };

      expect(spec.outline()).to.deep.equal(expected);
    });

    it('spec is always a holder', function(){
      expect(spec.isHolder()).to.be.true;
    });

    it('can return a grammars() collection of all the valid fixtures', function(){
      var grammars = spec.grammars().map(function(x){
        return x.key;
      });

      expect(grammars).to.deep.equal(['Math', 'Zork']);
    });

    it('should have a section after building', function(){
      var section = spec.steps[0];
      expect(section.key).to.equal('Math');
      expect(section.steps.length).to.equal(5);
    });

    it('should put itself as the parent on each child step', function(){
      expect(spec.steps[0].parent).to.equal(spec);
    });

    it('should be able to write itself', function(){
      var data = spec.write();
      expect(data).to.deep.equal(specData);
    });

  });

  describe('When writing itself', () => {
    var writtenData;
    beforeEach(function () {
      writtenData = spec.write();
    });

    it('should persist the title', () => {
      expect(writtenData.title).to.equal('My first specification');
    });

    it('should persist the lifecycle', () => {
      expect(writtenData.lifecycle).to.equal('Regression');
    });

    it('should persist the mode', () => {
      expect(writtenData.mode).to.equal('header');
    });

    it('should persist the max-retries', () => {
      expect(writtenData['max-retries']).to.equal(2);
    });
  });

  describe('Storing and finding steps by id', function(){
    beforeEach(function(){
      specData.id = 'the-spec';
      spec = new Specification(specData, library);
    });

    it('stores results', function(){
      var result = {position: 'before'};

      spec.logResult(result);

      expect(spec.results.before).to.equal(result);
    });

    it('can clear results all the way down', function(){
      var result = {position: 'before'};

      spec.logResult(result);
      spec.steps[0].logResult({type: 'step-result', status: 'success'});

      spec.clearResults();

      expect(spec.results).to.deep.equal({});
      expect(spec.steps[0].results).to.deep.equal({});
    });

    it('wipes out nextStep in clearResults', () => {
      var result = {position: 'before'};

      spec.logResult(result);
      spec.steps[0].logResult({type: 'step-result', status: 'success'});
      spec.nextStep = {id: 1, position: null}

      spec.clearResults();

      expect(spec.nextStep).to.be.null;
    });

    it('stores itself in the byId collection', function(){
      expect(spec.find('the-spec')).to.equal(spec);
    });

    it('can spec a new step', function(){
      var step = {id: 3};

      spec.storeStep(step);

      expect(spec.find(3)).to.equal(step);
    });

    it('can remove an old step', function(){
      let stepId = 'a new random step';
      var step = {id: stepId};

      spec.storeStep(step);

      spec.removeStep(step);

      expect(spec.find(stepId)).to.equal(undefined);
    });

    it('can load the specification', function(){
      expect(spec).to.not.be.null;

      expect(spec.type).to.equal('specification');
    });

    it('organizes the steps through find by id', function(){
      expect(spec.find(2).key).to.equal('StartWith');

      expect(spec.find(7).key).to.equal('Zork');
    });

    it('organizes the steps in a tree such that you can find parents too', function(){
      var step = spec.find(6);

      expect(step.parent.type).to.equal('section');
      expect(step.parent.parent.type).to.equal('specification');
    });

    it('calculates the initial state', function(){
      expect(spec.changeStatus()).to.deep.equal({applied: 0, unapplied: 0});
    });

    it('performs the very first change', function(){
      var change = new FakeChange();

      spec.apply(change);

      expect(change.applied).to.equal(1);
      expect(spec.changeStatus()).to.deep.equal({applied: 1, unapplied: 0});
    });

    it('performs a second change', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);

      expect(change1.applied).to.equal(1);
      expect(change2.applied).to.equal(1);
      expect(spec.changeStatus()).to.deep.equal({applied: 2, unapplied: 0});
    });

    it('revision is null if no changes exist', function(){
      expect(spec.revision()).to.be.null;
    });

    it('assigns a unique id to changes', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);

      expect(change1.revision).to.not.equal(change2.revision);
      expect(change1.revision).to.not.be.null;
      expect(change1.revision).to.not.be.undefined;
      expect(change2.revision).to.not.be.null;
      expect(change2.revision).to.not.be.undefined;
    });

    it('can baseline at a revision before the current', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();
      var change3 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);
      spec.apply(change3);

      spec.baselineAt(change2.revision);

      expect(spec.undoList).to.deep.equal([change3]);
      expect(spec.revision()).to.equal(change3.revision);
    });

    it('can baseline to exactly the current revision', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();
      var change3 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);
      spec.apply(change3);

      spec.baselineAt(change3.revision);

      expect(spec.undoList.length).to.equal(0);
      expect(spec.revision()).to.be.null;
    });

    it('current revision is the revision of the last change', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);

      expect(spec.revision()).to.equal(change2.revision);

      spec.undo();

      expect(spec.revision()).to.equal(change1.revision);
    });

    it('can tell you if it is dirty', () => {
      expect(spec.isDirty()).to.be.false;

      var change1 = new FakeChange();
      var change2 = new FakeChange();



      spec.apply(change1);
      spec.apply(change2);

      expect(spec.isDirty()).to.be.true;

      spec.undo();
      expect(spec.isDirty()).to.be.true;

      spec.undo();
      expect(spec.isDirty()).to.be.false;
    });

    it('knows if it has redos', () => {
      expect(spec.canRedo()).to.be.false;

      var change1 = new FakeChange();
      var change2 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);

      expect(spec.canRedo()).to.be.false;

      spec.undo();

      expect(spec.canRedo()).to.be.true;
    });

    it('can undo', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);

      spec.undo();

      // only #2 should be unapplied
      expect(change1.unapplied).to.equal(0);
      expect(change2.unapplied).to.equal(1);

      expect(spec.changeStatus()).to.deep.equal({applied: 1, unapplied: 1});

      spec.undo();

      expect(change1.unapplied).to.equal(1);
      expect(change2.unapplied).to.equal(1);

      expect(spec.changeStatus()).to.deep.equal({applied: 0, unapplied: 2});
    });

    it('can redo', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);

      spec.undo();

      spec.redo();

      expect(change1.unapplied).to.equal(0);
      expect(change2.unapplied).to.equal(1);
      expect(change2.applied).to.equal(2);

      expect(spec.changeStatus()).to.deep.equal({applied: 2, unapplied: 0});
    });

    it('series of changes, undos, and redos', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();
      var change3 = new FakeChange();
      var change4 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);
      spec.apply(change3);

      spec.undo();
      spec.undo();

      spec.apply(change4);

      expect(spec.changeStatus()).to.deep.equal({applied: 2, unapplied: 0});
    });

    it('applies a change with only undos in the queues', function(){
      var change1 = new FakeChange();
      var change2 = new FakeChange();
      var change3 = new FakeChange();
      var change4 = new FakeChange();

      spec.apply(change1);
      spec.apply(change2);
      spec.apply(change3);

      spec.undo();
      spec.undo();
      spec.undo();

      spec.apply(change4);

      expect(spec.changeStatus()).to.deep.equal({applied: 1, unapplied: 0});
    });
  });

  describe('Setting Active State', function(){

    it('can clear active state wherever it is', function(){
      spec.findByPath('0').active = true;
      spec.findByPath('0.2.x').active = true;

      spec.clearActiveState();

      expect(spec.steps[0].active).to.be.false;
      expect(spec.findByPath('0.2.x').active).to.be.false;
    });

    it('by default, if specification is created with no children, it is active', function(){
      var data = {
        title: 'Second spec',
        steps: []
      }

      spec = new Specification(data, library);

      expect(spec.active).to.be.true;
      expect(spec.activeCell).to.be.null;
      expect(spec.activeHolder).to.equal(spec);

    });

    it('when activating a cell for the first time', function(){
      var id = spec.findByPath('0.3').id;

      spec.selectCell(id, 'x');

      var arg = spec.findByPath('0.3.x');
      expect(arg.active).to.be.true;
      expect(spec.activeCell).to.equal(arg);
      expect(spec.activeHolder).to.equal(spec.findByPath('0'));
    });

    it('when activating a cell in the same step', function(){
      var id = spec.findByPath('0.4').id;

      spec.selectCell(id, 'x');
      spec.selectCell(id, 'y');

      var argX = spec.findByPath('0.4.x');
      var argY = spec.findByPath('0.4.y');

      expect(argX.active).to.be.false;
      expect(argY.active).to.be.true

      expect(spec.activeCell).to.equal(argY);
      expect(spec.activeHolder).to.equal(spec.findByPath('0'));
    });

    it('when activating a cell in the same section but different step', function(){
      spec.selectCell(spec.findByPath('0.3').id, 'x');
      spec.selectCell(spec.findByPath('0.4').id, 'y');

      var arg1 = spec.findByPath('0.3.x');
      var arg2 = spec.findByPath('0.4.y');

      expect(arg1.active).to.be.false;
      expect(arg2.active).to.be.true

      expect(spec.activeCell).to.equal(arg2);
      expect(spec.activeHolder).to.equal(spec.findByPath('0'));
    });

    it('when activating a cell in a completely different section', function(){
      spec.selectCell(spec.findByPath('0.3').id, 'x');
      spec.selectCell(spec.findByPath('3.0').id, 'x');

      var arg1 = spec.findByPath('0.3.x');
      var arg2 = spec.findByPath('3.0.x');

      expect(arg1.active).to.be.false;
      expect(arg2.active).to.be.true

      expect(spec.activeCell).to.equal(arg2);
      expect(spec.activeHolder).to.equal(spec.findByPath('3'));

      expect(spec.steps[0].active).to.be.false;
      expect(spec.steps[3].active).to.be.true;
    });

    it('when activating the specification with no cell activated', function(){
      spec.selectHolder(spec.id);

      expect(spec.active).to.be.true;
      expect(spec.steps[0].active).to.be.false;
      expect(spec.steps[1].active).to.be.false;
      expect(spec.activeHolder).to.equal(spec);
      expect(spec.activeCell).to.be.null;
    });

    it('when activating a different section', function(){
      spec.selectCell(spec.findByPath('0.4').id, 'result');

      // precondition
      expect(spec.activeCell).to.not.be.null;

      spec.selectHolder(spec.findByPath('1').id);

      expect(spec.steps[1]).to.equal(spec.activeHolder);

      // New active holder
      expect(spec.steps[1].active).to.be.true;

      // Previously active holder
      expect(spec.steps[0].active).to.be.false;

      // should remove the previously active cell
      expect(spec.activeCell).to.be.null;
      expect(spec.findByPath('0.4.result').active).to.be.false;

    });
  });


  var StubLoader = require('./stub-loader');

  describe('Specification writing results', function(){
    var loader = new StubLoader();

    it('should write a timeout message if one exists', function(){
      // pre-condition
      //expect(spec.buildResults(loader).length).to.equal(0);

      spec.results.timedout = {error: 'Too slow!'};

      var results = spec.buildResults(loader);

      expect(results[0].props.children[0].props[0]).to.deep.equal({
        type: 'errorBox',
        props: {
          title: 'Timed out!',
          error: 'Too slow!'
        }

      });
    });

    it('should write an engine message if one exists', function(){
      // pre-condition
      //expect(spec.buildResults(loader).length).to.equal(0);

      spec.results.engine = {error: 'Blew up!', errorDisplay: 'markdown'};

      var results = spec.buildResults(loader);

      expect(results[0].props.children[0].props[0]).to.deep.equal({
        type: 'errorBox',
        props: {
          title: 'Engine Failure',
          error: 'Blew up!',
          errorDisplay: 'markdown'
        }

      });
    });
  });

  describe('Updating header info', () => {
    var update;
    beforeEach(() => {
      update = {
        title: 'new title',
        mode: 'partial',
        lifecycle: 'Acceptance',
        'max-retries': 8,
        'expiration-period': 10,
        'last-updated': 'February 1, 2015'
      }
      spec.updateHeader(update);
    });

    it('updates the correct pieces', () => {
      let expectEquals = (...items) => {
        items.forEach((item) => {
          expect(spec[item]).to.equal(update[item]);
        })
      };
      expectEquals('title', 'mode', 'lifecycle', 'max-retries', 'expiration-period', 'last-updated');
    });
  });


  describe('Breakpoints', () => {
    it('can match breakpoint with id only', () => {
      spec.breakpoints = [{id: 1, position: null}, {id: 2, position: 'setup'}];

      expect(spec.isAtBreakpoint(1, null)).to.be.true;
      expect(spec.isAtBreakpoint(2, null)).to.be.false;
      expect(spec.isAtBreakpoint(3, null)).to.be.false;

    });

    it('can match breakpoints with a position', () => {
      spec.breakpoints = [{id: 1, position: null}, {id: 2, position: 'setup'}];

      expect(spec.isAtBreakpoint(1, 'setup')).to.be.false;
      expect(spec.isAtBreakpoint(2, 'setup')).to.be.true;
      expect(spec.isAtBreakpoint(2, 'teardown')).to.be.false;
      expect(spec.isAtBreakpoint(3, 'setup')).to.be.false;
    });
    

    it('sets a single breakpoint where there are none 1', () => {
      spec.setBreakpoint(4, null);

      expect(spec.breakpoints).to.deep.equal([
        {id: 4, position: null}
      ]);
    });

    it('sets a single breakpoint where there are none 2', () => {
      spec.setBreakpoint(4, 'setup');

      expect(spec.breakpoints).to.deep.equal([
        {id: 4, position: 'setup'}
      ]);
    });

    it('does not overwrite an existing breakpoint', () => {
      var initial = [{id: 1, position: null}, {id: 2, position: 'setup'}];

      spec.breakpoints = initial;

      spec.setBreakpoint(1, null);

      expect(spec.breakpoints).to.deep.equal(initial);
    });

    it('can remove a breakpoint', () => {
      var initial = [{id: 1, position: null}, {id: 2, position: 'setup'}];

      spec.breakpoints = initial;

      spec.clearBreakpoint(1, null);

      expect(spec.breakpoints).to.deep.equal([{id: 2, position: 'setup'}]);
    });


    it('determination of isActiveStep', () => {
      expect(spec.isActiveStep(1, null)).to.be.false;

      spec.nextStep = {id: 3, position: 'setup'}

      expect(spec.isActiveStep(1, null)).to.be.false;
      expect(spec.isActiveStep(3, null)).to.be.false;
      expect(spec.isActiveStep(4, 'setup')).to.be.false;
      expect(spec.isActiveStep(3, 'setup')).to.be.true;
    });
  });
});
