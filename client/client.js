// Array.prototype.findIndex - MIT License (c) 2013 Paul Miller <http://paulmillr.com>
// For all details and docs: <https://github.com/paulmillr/Array.prototype.findIndex>
(function (globals) {
  if (Array.prototype.findIndex) return;

  var findIndex = function(predicate) {
    var list = Object(this);
    var length = Math.max(0, list.length) >>> 0; // ES.ToUint32;
    if (length === 0) return -1;
    if (typeof predicate !== 'function' || Object.prototype.toString.call(predicate) !== '[object Function]') {
      throw new TypeError('Array#findIndex: predicate must be a function');
    }
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    for (var i = 0; i < length; i++) {
      if (predicate.call(thisArg, list[i], i, list)) return i;
    }
    return -1;
  };

  if (Object.defineProperty) {
    try {
      Object.defineProperty(Array.prototype, 'findIndex', {
        value: findIndex, configurable: true, writable: true
      });
    } catch(e) {}
  }

  if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = findIndex;
  }
}(this));

var Postal = require('postal');
var Communicator = require('./lib/communicator');

var startRouting = require('./components/app');

require('./lib/specs/hierarchy').reset(); // just forcing it to get loaded

Postal.publish({
	channel: 'engine',
	topic: 'hierarchy-loaded',
	data: {hierarchy: Storyteller.hierarchy}
});



Postal.publish({
	channel: 'engine',
	topic: 'system-recycled',
	data: Storyteller.initialization
});

Postal.publish({
  channel: 'engine',
  topic: 'queue-state',
  data: Storyteller.queueState
});

var communicator = new Communicator(Storyteller.wsAddress, startRouting);


Postal.subscribe({
	channel: 'engine',
	topic: 'spec-node-added',
	callback: function(data){
		var href = '#/spec/editing/' + data.node.id;
		window.location = href;
	}
});