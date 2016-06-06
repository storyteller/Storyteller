var React = require("react");
var Postal = require('postal');

function CommandLink({createMessage, identifier, text}){
	var onclick = e => {
		var data = createMessage();

		Postal.publish({
			channel: 'engine-request',
			topic: data.type,
			data: data
		});
		
		e.stopPropagation();
		e.preventDefault();
	}

	var className = "explorer-command";
	if (identifier){
		className += ' ' + identifier;
	}

	return (
		<a href="#" onClick={onclick} className={className}>{text}</a>
	);
}


module.exports = CommandLink;