var Postal = require('postal');

module.exports = {
	toEditor(topic, message){
		Postal.publish({
			channel: 'editor',
			topic: topic,
			data: message
		});
	},

	applyChange(change){
		this.toEditor('changes', change);

		return change;
	}
}