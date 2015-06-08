var Postal = require('postal');

function Communicator(address, continuation, disconnect){
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
	
		if (message.type == 'refresh-page'){
			location.reload();
			
			return;
		}
	
		Postal.publish({
			channel: 'engine',
			topic: message.type,
			data: message
		});
	};
	
	
	
	this.socket.onopen = function(){
		console.log('Opened a socket at ' + address);
		continuation();
	}

	this.send = function(message){
		if (this.socket.readyState != 1){
			disconnect();
		}
		else {
			this.socket.send(JSON.stringify(message));
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