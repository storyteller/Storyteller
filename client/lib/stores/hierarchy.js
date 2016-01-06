// This is the data store for all information regarding the collection
// of specifications in a Storyteller.js project
var Postal = require('postal');
var Broadcaster = require('./../broadcaster');
var Suite = require('./../model/suite');
var _ = require('lodash');
var Counts = require('./../model/counts');
var QueueState = require('./queue-state');
var ResultCache = require('./result-cache');
var FixtureLibrary = require('./../fixtures/fixture-library');
var Specification = require('./../model/specification');

var specs = {};
var top = new Suite({});
var results = {}; // stores the final result of spec-execution-completion
var lifecycle = 'any';
var status = 'any';

var queue = [];

var Reducer  = require('./../state/reducer');

var { createStore } = require('redux');
var store = null;



function publishHierarchyChanged(){
  Broadcaster.toExplorer('hierarchy-updated');
}

function publishQueueChanged(){
  Broadcaster.toExplorer('queue-updated');
}

const publishHeaderChanged = (specId) => {
  Broadcaster.toExplorer('updated-spec-header', { id: specId });
}

var recordResult = function(data){
  var spec = specs[data.spec];

  // don't bother trying to capture the result if mode = header
  if (spec.mode == 'header') return;

  var step = spec.find(data.id);

  if (!step){
    throw new Error('Unable to find a step with id ' + data.id + ' for spec ' + data.spec);
  }

  step.logResult(data);

  Broadcaster.toEditor('spec-changed', {id: data.spec});
}

var handlers = {};

handlers['step-result'] = recordResult;
handlers['set-verification-result'] = recordResult;

var library = null;
var systemRecycled = null;

var setLibrary = function(lib){
  library = lib;
  let targetKeys = _.keys(specs).filter((key) => specs[key].mode === 'full');
  targetKeys.forEach((key) => {
    let old = specs[key];
    var specData = old.write();
    var newSpec = new Specification(specData, library);
    specs[key] = newSpec;
    Postal.publish({
      channel: 'editor',
      topic: 'spec-changed',
      data: {id: key}
    });
  })

  Broadcaster.toExplorer('fixtures-loaded');
}

handlers['system-recycled'] = function(data){
  systemRecycled = data;
  setLibrary(new FixtureLibrary(data.fixtures));
}


var storeSpec = function(spec){
  specs[spec.id] = spec;

  var parent = _.find(top.allSuites(), x => x.hasSpec(spec.id));
  if (parent){
    parent.replaceSpec(spec);
  }

  Broadcaster.toEditor('spec-changed', {id: spec.id});
}

handlers['spec-data'] = function(data){
  var spec = new Specification(data.data, library);
  spec.id = data.id;
  specs[spec.id] = spec;

  ResultCache.replaceResults(spec.id, data.results);

  storeSpec(spec);

  publishHierarchyChanged();
}

function findSuite(names){
  var suite = top;

  if (names && !(names instanceof Array)){
    names = names.split('/');
  }

  names.forEach(x => {
    if (suite == null) return null;
    suite = suite.childSuite(x);
  });

  if (suite == undefined) return null;

  return suite;
}

handlers['spec-header-updated'] = (data) => {
  let specData = data.spec;
  let spec = new Specification(specData, library);
  specs[spec.id].updateHeader(spec);
  publishHeaderChanged(spec.id);
};

handlers['spec-body-saved'] = function(data){
  if (specs.hasOwnProperty(data.id)){
    var spec = specs[data.id];
    spec.baselineAt(data.revision);

    publishHierarchyChanged();
  }
}

handlers['spec-added'] = function(data){
  var spec = new Specification(data.data, library);
  specs[spec.id] = spec;

  var parent = findSuite(data.suite);

  if (parent){
    parent.addSpec(spec);
  }

  publishHierarchyChanged();

  Broadcaster.toExplorer('go-to-spec', {id: spec.id});
}

handlers['suite-added'] = function(data){
  var names = data.path.split('/');
  if (names.length == 1){
    top.addChildSuite(names[0]);
  }
  else {
    var parent = top;
    for (var i = 0; i < names.length - 1; i++){
      parent = parent.childSuite(names[i]);
    }

    var name = _.last(names);
    parent.addChildSuite(name);
  }

  publishHierarchyChanged();
}

handlers['spec-deleted'] = function(data){
  delete specs[data.id];
  var parent = _.find(top.allSuites(), x => x.hasSpec(data.id));
  if (parent){
    parent.removeSpec(data.id);
  }

  publishHierarchyChanged();

}

handlers['hierarchy-loaded'] = function(data){
  top = new Suite(data.hierarchy, null, library);
  specs = {};

  top.allSpecs().forEach(x => {
    specs[x.id] = x;
  });

  publishHierarchyChanged();
}

handlers['spec-canceled'] = function(data){
  var spec = specs[data.id];

  spec.clearResults();

  publishHierarchyChanged();
}

handlers['spec-progress'] = function(data){
  var spec = specs[data.id];
  var counts = new Counts(data.counts);

  QueueState.markRunning(data.id, counts);

  var outgoing = {
    spec: spec,
    counts: counts,
    step: data.step,
    total: data.total,
    running: true
  };

  Postal.publish({
    channel: 'explorer',
    topic: 'spec-execution-state',
    data: outgoing
  })

  publishHierarchyChanged();
}

handlers['spec-execution-completed'] = function(data){
  ResultCache.record(data);

  specs[data.id].clearResults();

  QueueState.markCompleted(data.id);

  publishHierarchyChanged();
  publishQueueChanged();

  Broadcaster.toEditor('spec-changed', {id: data.id});


  Postal.publish({
    channel: 'results',
    topic: 'results-changed',
    data: {}
  })
}

handlers['queue-state'] = data => {
  var hasChanges = QueueState.store(data);

  queue = data.queued.map(id => specs[id]);

  publishQueueChanged();

  if (!hasChanges) return;

  if (!data.running){
    Broadcaster.toExplorer('spec-execution-state', {running: false});
  }

  publishHierarchyChanged();
}

function resetSubscriptions(){
  Postal.subscribe({
    channel: 'engine',
    topic: '*',
    callback: function(data, envelope){
      var topic = envelope.topic;
      (handlers[topic] || _.noop)(data);
    }
  });

  Postal.subscribe({
    channel: 'engine-request',
    topic: 'clear-all-results',
    callback: function(){
      ResultCache.clear();

      _.values(specs).forEach(x => {
        x.clearResults();
      });

      publishHierarchyChanged();

      Postal.publish({
        channel: 'results',
        topic: 'results-changed',
        data: {}
      })
    }
  })

  Postal.subscribe({
    channel: 'explorer',
    topic: 'spec-status-filter-changed',
    callback: function(data){
      status = data.status;
      publishHierarchyChanged();
    }
  });

  Postal.subscribe({
    channel: 'explorer',
    topic: 'lifecycle-filter-changed',
    callback: function(data){
      lifecycle = data.lifecycle;
      publishHierarchyChanged();
    }
  });
}

var alwaysTrue = function(x){
  return true;
}

function toLifecycleFilter(){
  if (lifecycle == 'any') return alwaysTrue;

  if (lifecycle == 'Regression'){
    return spec => spec.lifecycle == 'Regression';
  }

  if (lifecycle == 'Acceptance'){
    return spec => spec.lifecycle == 'Acceptance';
  }
}

function toStatusFilter(){
  if (status == 'any') {
    return alwaysTrue;
  }
  return spec => spec.status() == status;
}

module.exports = {
  lifecycleFilter: function(){
    return lifecycle;
  },

  statusFilter: function(){
    return status;
  },

  hasFilter: function(){
    return (status != 'any' || lifecycle != 'any');
  },

  currentFilter(){
    if (status == 'any' && lifecycle == 'any') return spec => true;

    var lifecycleFilter = toLifecycleFilter();
    var statusFilter = toStatusFilter();

    return spec => lifecycleFilter(spec) && statusFilter(spec);
  },

  filteredHierarchy: function(){
    var filter = this.currentFilter();
    return top.filter(filter);
  },

  top: function(){
    return top;
  },

  allSpecs: function(){
    return _.values(specs);
  },

  hasUnsavedChanges: function(){
    for (var key in specs){
      if (specs[key].isDirty()) return true;
    }

    return false;
  },

  summary: function(){
    return top.summary();
  },

  queuedSpecs: function(){
    return queue;
  },

  hasData: function(id){
    return specs.hasOwnProperty(id);
  },

  reset: function(){
    store = createStore(Reducer);
      
    QueueState.clear();
    ResultCache.clear();

    specs = {};
    top = new Suite({});
    results = {};
    queue = [];
    lifecycle = 'any';
    status = 'any';
    library = null;
    systemRecycled = null;

    resetSubscriptions();
    
    return store;
  },

  clearData: function(){
    specs = {};
  },

  findSpec: function(id){
    if (specs.hasOwnProperty(id)) return specs[id];

    return null;
  },

  findSuite: function(names){
    return findSuite(names);
  },


  errorCount: function(){
    if (library == null) return 0;

    return library.errorCount();
  },

  errorReport: function(){
    if (library == null) return [];

    return library.errorReport();
  },

  fixtures: function(){
    return library;
  },

  storeData: function(id, data){
    var spec = new Specification(data, library);
    spec.id = id;
    storeSpec(spec);
  },

  readResults: function(id, results){
    if (this.hasData(id)){
      var spec = this.findSpec(id);
      spec.readResults(results);
      Postal.publish({
        channel: 'editor',
        topic: 'spec-changed',
        data: {id: id}
      });
    }
  },

  requestData: function(id){
    Postal.publish({
      channel: 'engine-request',
      topic: 'spec-data-requested',
      data: {
        type: 'spec-data-requested',
        id: id
      }
    })

  },

  setLibrary: function(lib){
    setLibrary(lib);
  },

  systemRecycled: function(){
    throw new Error('Use Redux store instead!');
    return systemRecycled;
  },

  recordResult: function(data){
    if (this.hasData(data.spec)){
      var spec = this.findSpec(data.spec);
      var step = spec.find(data.id);

      if (!step){
        throw new Error('Unable to find a step with id ' + data.id + ' for spec ' + data.spec);
      }

      step.logResult(data);

      Postal.publish({
        channel: 'editor',
        topic: 'spec-results-changed',
        data: {id: data.spec}
      });
    }
  },

  saveSpecData: function(spec){
    var message = {
      type: 'save-spec-body',
      id: spec.id,
      spec: spec.write(),
      revision: spec.revision()
    };

    Postal.publish({
      channel: 'engine-request',
      topic: 'save-spec-body',
      data: message
    });
  },

  bumpSpecDate(spec) {
    let message = {
      id: spec.id,
      timePeriod: spec['expiration-period']
    }

    Postal.publish({
      channel: 'engine-request',
      topic: 'bump-spec-date',
      data: message
    })
  },

  runSpec: function(spec){
    Postal.publish({
      channel: 'engine-request',
      topic: 'run-spec',
      data: {id: spec.id, spec: spec.write(), revision: spec.revision()}
    });
  }
}
