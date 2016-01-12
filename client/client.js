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
var app = require('./components/app');
var disconnect = require('./components/disconnected');

// TODO -- HOKEY!!!!!
var theStore = null;
var startRouting = app(Storyteller.initialization, store => {
    theStore = store;
    
    Postal.subscribe({
        channel: 'engine',
        topic: '*',
        callback: (data, env) => {
            data.type = env.topic;
            store.dispatch(data);
            
            if (env.topic == 'go-to-spec'){
                var href = '#/spec/editing/' + data.id;
                window.location = href;
            }
        } 
    });
});

var Communicator = require('./communicator');
var wsAddress = Storyteller.initialization.wsAddress;
var communicator = new Communicator(theStore, wsAddress, () => startRouting(), disconnect);

require('./lib/command-processor')(communicator, theStore);
require('./lib/presentation/spec-editor-presenter')(theStore, communicator);




