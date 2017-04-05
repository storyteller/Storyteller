var Immutable = require('immutable');
import { createStore } from 'redux';
var $ = require('jquery');

var initialState = Immutable.Map({
    number: 0,
    todos: Immutable.List()
});

function Reducer(state = initialState, action){
  switch (action.type) {
    case 'add':
        var operand = parseInt(action.operand);
        return state.update('number', operand, v => v + operand);

    case 'subtract':
        var operand = parseInt(action.operand);
        return state.update('number', operand, v => v - operand);

    case 'multiply':
        var operand = parseInt(action.operand);
        return state.update('number', operand, v => v * operand);

    case 'add-todo':
        var todo = {name: action.name, description: action.description};
        return state.updateIn(['todos'], list => list.push(todo));

    default:
      console.log("Reducer does not know how to handle: " + action.type);
      return state;
  }
}

var store = createStore(Reducer);





function ReduxHarness(store, transformState){
    if (!transformState){
        transformState = s => s;
    }

    function getQueryVariable(variable)
    {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }

    var revision = 1;

    var port = getQueryVariable('StorytellerPort');
    var wsAddress = "ws://127.0.0.1:5250";

    var socket = new WebSocket(wsAddress);

	socket.onclose = function(){
		console.log('The socket closed');
	};

	socket.onerror = function(evt){
		console.error(JSON.stringify(evt));
	}

    socket.onmessage = function(evt){
        if (evt.data == 'REFRESH'){
            window.location.reload();
            return;
        }

        if (evt.data == 'CLOSE'){
            window.close();
            return;
        }

		var message = JSON.parse(evt.data);
		console.log('Got: ' + JSON.stringify(message) + ' with topic ' + message.type);
	
		store.dispatch(message);
	};

    store.subscribe(() => {
        var state = store.getState();

        revision = revision + 1;
        var message = {
            type: 'redux-state',
            revision: revision,
            state: transformState(state)
        }

		if (socket.readyState == 1){
            var json = JSON.stringify(message);
            console.log('Sending to engine: ' + json);
			socket.send(json);
		}
    });

    
    var originalLog = console.log;
    console.log = function(msg){
        originalLog(msg);

        var message = {
            type: 'console.log',
            text: msg
        }

        var json = JSON.stringify(message);
        socket.send(json);
    }

    var originalError = console.error;
    console.error = function(e){
        originalError(e);

        var message = {
            type: 'console.error',
            error: e
        }

        var json = JSON.stringify(message);
        socket.send(json);
    }
}

ReduxHarness(store, s => s.toJS())

$('#main').html(new Date());
