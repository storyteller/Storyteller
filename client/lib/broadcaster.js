var Postal = require('postal');

module.exports = {
	toEditor(topic, message){
		if (!message){
			message = {}
		}

		Postal.publish({
			channel: 'editor',
			topic: topic,
			data: message
		});
	},

	toExplorer(topic, message){
		if (!message){
			message = {}
		}

		Postal.publish({
			channel: 'explorer',
			topic: topic,
			data: message
		});
	},

	applyChange(change){
		this.toEditor('changes', change);

		return change;
	}
}