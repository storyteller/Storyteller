import SystemRecycled from './system-recycled';
var Immutable = require('immutable');

module.exports = function Reducer(state = Immutable.Map({}), action){
  switch (action.type) {
    case 'initial-model':
        // TODO -- do something with the fixtures too
        // TODO -- do something with the hierarchy & specs
        var one = SystemRecycled(state, action.recycled);
        return one;
      
    case 'system-recycled':
      return SystemRecycled(state, action);
    case 'system-recycle-start':
      return state.updateIn(['system-state', 'recycling'], _ => true);
    default:
      return state;
  }
}