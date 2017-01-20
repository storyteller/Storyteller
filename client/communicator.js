var Postal = require('postal');
var Rx = require('rxjs');
var _ = require('lodash');

var bufferedTopics = ['spec-execution-completed', 'queue-state', 'step-result', 'set-verification-result', 'spec-progress'];

function shouldBuffer(message){
	return bufferedTopics.includes(message.type);
}

function Communicator(dispatch, address, disconnect){
	var subject = new Rx.Subject();

	var unbuffered = subject
		.filter(m => !shouldBuffer(m))
		.subscribe(
			dispatch,
			e => console.log('Websocket error: ' + e.message),
			() => {});

	var buffered = subject
		.filter(shouldBuffer)
		.bufferTime(250)
		.subscribe(
			arr => dispatch({type: 'batch', messages: arr}),
			e => console.log('Websocket error: ' + e.message),
			() => {});


	this.socket = new WebSocket(address);

	this.socket.onclose = function(){
		console.log('The socket closed');
		disconnect();
	};

	this.socket.onerror = function(evt){
		console.log(JSON.stringify(evt));
	}

	this.socket.onmessage = function(evt){
		var message = JSON.parse(evt.data);
		console.log('Got: ' + JSON.stringify(message) + ' with topic ' + message.type);
	
		subject.next(message);

	    // TODO -- these things should NOT be here
		if (message.type == 'system-recycled'){
			Postal.publish({
				channel: 'engine',
				topic: 'system-recycled',
				data: message
			});
		}

		if (message.type == 'refresh-page'){
			location.reload();
			
			return;
		}
	};
	
	
	
	this.socket.onopen = () => {
		console.log('Opened a socket at ' + address);
		this.send({type: 'request-initial-data'});
	}

	this.send = function(message){
		if (this.socket.readyState != 1){
			disconnect();
		}
		else {
            var json = JSON.stringify(message);
            console.log('Sending to engine: ' + json);
			this.socket.send(json);
		}
	}
	
	var self = this;
	
	Postal.subscribe({
		channel: 'engine-request',
		topic: '*',
		callback: function(data, envelope){
			data.type = envelope.topic;
			
			console.log("Sending message to server: " + JSON.stringify(data));
			
			self.send(data);
		}
	});
}

module.exports = Communicator;
