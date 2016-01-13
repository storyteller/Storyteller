"use strict";

var StepHolder = require('./step-holder');
var _ = require('lodash');
var uuid = require('node-uuid');
var SpecificationNavigator = require('./specification-navigator');
var Counts = require('./counts');

function Specification(data, library){
  if (data == undefined || data == null){
    throw new Error('Null data being passed into Specification');
  }

  StepHolder.call(this, data.id, library || {}, 'add sections or comments...');

  this.updateHeader = function (headData) {
    let {title, name, mode, lifecycle} = headData;
    this.title = title || name;
    this['max-retries'] = headData['max-retries'];
    this['expiration-period'] = headData['expiration-period'];
    this['last-updated'] = headData['last-updated'];
    this.mode = mode || 'full';
    this.lifecycle = lifecycle || 'Acceptance';
  }

  this.byId = {};
  this.type = 'specification';
  this.results = {};
  this.active = false;
  this.updateHeader(data);
  this.path = data.path;


  this.navigator = new SpecificationNavigator(this);

  this.children = function(){
    return this.steps;
  }

  this.grammars = function(){
    return _.sortBy(library.fixtures, function(x){
      return x.title;
    });
  }

  this.write = function(){
    return {
      title: this.title,
      steps: this.writeSteps(),
      id: this.id,
      lifecycle: this.lifecycle,
      mode: this.mode,
      'max-retries': this['max-retries'],
      'expiration-period': this['expiration-period'],
      'last-updated': this['last-updated']
    }
  }

  this.previews = function(loader){
    return this.buildComponents(x => x.preview(loader));
  }

  this.editors = function(loader){
    var editors = this.buildComponents(x => x.editor(loader));
    editors.push(this.adder.editor(loader));

    return editors;
  }

  this.buildResults = function(loader){
    var elements = [];

    if (this.results.timedout){
      elements.push(loader.errorBox({title: 'Timed out!', error: this.results.timedout.error}));
    }

    if (this.results.engine){
      elements.push(loader.errorBox({title: 'Engine Failure', error: this.results.engine.error}));
    }


    if (this.results.context){
      elements.push(loader.errorBox({title: 'Context Creation Failure in the engine', error: this.results.context.error}));
    }

    this.steps.forEach(step => {
      var element = step.buildResults(loader);
      if (element instanceof Array){
        elements = elements.concat(element);
      }
      else{
        elements.push(element);
      }
    });

    var tabs = [];


    tabs.push(loader.tab(elements, 0, 'Specification'));

    if (this.results.performance){
      var table = loader.perfTable({records: this.results.performance});
      tabs.push(loader.tab(table, 1, 'Performance'));
    }

    var logs = (this.results.logging || []);
    for (var i = 0; i < logs.length; i++){
      var log = logs[i];
      if (log.count > 0){
        var logElement = loader.logComponent(log);
        var tab = loader.tab(logElement, i + 2, log['short_title']);
        tabs.push(tab);
      }
    }

    var tabbedArea = loader.tabbedArea({defaultActiveKey: 0, children: tabs});

    return [tabbedArea];
  }


  this.find = function(id){
    return this.byId[id]
  }

  this.undoList = [];
  this.redoList = [];

  this.apply = function(change){
    change.revision = uuid.v4();
    change.apply(this);
    this.undoList.push(change);

    this.redoList = [];
  }

  this.revision = function(){
    if (this.undoList.length == 0) return null;

    return this.undoList[this.undoList.length - 1].revision;
  }

  this.baselineAt = function(revision){
    var index = this.undoList.findIndex(change => {
      return change.revision == revision;
    });

    if (index > -1){
      this.undoList = this.undoList.slice(index + 1);
    }
  }

  this.changeStatus = function(){
    return {applied: this.undoList.length, unapplied: this.redoList.length};
  }

  this.isDirty = function(){
    return this.undoList.length > 0;
  }

  this.canRedo = function(){
    return this.redoList.length > 0;
  }

  this.undo = function(){
    if (this.undoList.length == 0) return;

    var last = this.undoList.pop();
    last.unapply(this);

    this.redoList.push(last);
  }

  this.redo = function(){
    if (this.redoList.length == 0) return;

    var last = this.redoList.pop();
    last.apply(this);

    this.undoList.push(last);
  }

  var removeStepBase = this.removeStep;

  this.removeStep = function(step){
    delete this.byId[step.id];
    return removeStepBase(step);
  }



  this.storeStep = function(step){
    this.byId[step.id] = step;
  }

  this.readSteps(data);

  var self = this;
  var readHolder = function(holder){
    self.byId[holder.id] = holder;

    if (!holder.children)
      return;

    var children = holder.children();

    for (var i = 0; i < children.length; i++){
      readHolder(children[i]);
    }
  }

  self.selectCell = function(id, cell){
    var step = this.find(id);
    if (!step){
      throw new Error('Unable to find a step with id: ' + id);
    }

    var arg = step.findByPath(cell);
    if (!arg){
      throw new Error("Unable to find a cell named " + cell + '" for id: ' + id);
    }

    this.navigator.replace({holder: step.parent, step: step, cell: arg});
  }

  self.selectHolder = function(id){
    var holder = this.find(id);

    if (!holder){
      throw new Error('Unable to find the specified holder with id: ' + id);
    }

    this.navigator.goToHolder(holder);
  }

  self.logResult = function(result){
    self.results[result.position] = result;
  }

  self.clearResults = function(){
    self.results = {};
    self.steps.forEach(s => s.clearResults());
  }
  
  self.readResult =function(result){
      var child = self.find(result.id);
      if (child){
        child.logResult(result);
      } 
      else {
        console.log('Unable to find a matching step for ' + JSON.stringify(result));
      }
  }

  self.readResults = function(results){
    self.clearResults();

    self.results.logging = results.logging;
    self.results.performance = results.performance;

    results.results.forEach(x => {
      self.readResult(x);
    });
  }

  Object.defineProperty(self, 'activeCell', {
    enumerable: true,
    writeable: true,
    get: function(){
      if (this.navigator.location.hasOwnProperty('cell')){
        return this.navigator.location.cell;
      }

      return null;
    }
  });

  Object.defineProperty(self, 'activeHolder', {
    enumerable: true,
    writeable: true,
    get: function(){
      return this.navigator.location.holder;
    }
  });

  readHolder(this);

  this.navigator.moveFirst();
}

module.exports = Specification;
