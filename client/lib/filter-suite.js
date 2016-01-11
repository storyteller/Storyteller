var alwaysTrue = x => true;

function toLifecycleFilter(lifecycle){
  if (lifecycle == 'any') return alwaysTrue;

  if (lifecycle == 'Regression'){
    return spec => spec.lifecycle == 'Regression';
  }

  if (lifecycle == 'Acceptance'){
    return spec => spec.lifecycle == 'Acceptance';
  }
}

function toStatusFilter(status){
  if (status == 'any') {
    return alwaysTrue;
  }
  
  return spec => spec.status == status;
}

module.exports = function filterSuite(suite, specs, status, lifecycle){
    if (status != 'any' || lifecycle != 'any'){
        var lifecycleFilter = toLifecycleFilter(lifecycle);
        var statusFilter = toStatusFilter(status);

        var filter = spec => lifecycleFilter(spec) && statusFilter(spec);
        return suite.filter(filter, specs);
    }
    
    return suite;
}