var Postal = require('postal');

function Communicator(dispatch, address, disconnect){
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
	
		dispatch(message);
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
