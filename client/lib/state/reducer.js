import SystemRecycled from './system-recycled';
var Immutable = require('immutable');

module.exports = function Reducer(state = Immutable.Map({}), action){
  switch (action.type) {
    case 'system-recycled':
      return SystemRecycled(state, action);
    case 'system-recycle-start':
      return state.updateIn(['system-state', 'recycling'], _ => true);
    default:
      return state;
  }
}