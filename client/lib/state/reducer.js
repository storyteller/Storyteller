import SystemRecycled from './system-recycled';
var HierarchyLoaded = require('./hierarchy-loaded');
var Immutable = require('immutable');

module.exports = function Reducer(state = Immutable.Map({}), action){
  switch (action.type) {
    case 'initial-model':
        var one = SystemRecycled(state, action.recycled);
        return HierarchyLoaded(one, action.hierarchy);
      
    case 'system-recycled':
      return SystemRecycled(state, action);
    case 'system-recycle-start':
      return state.updateIn(['system-state', 'recycling'], _ => true);
      
    case 'hierarchy-loaded':
        // 'lifecycle-filter'
        // 'status-filter'
        // 'hierarchy'
        // 'specs'
      
    default:
      console.log("Reducer does not know how to handle: " + action.type);
      return state;
  }
}