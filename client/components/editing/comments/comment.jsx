var React = require("react");

function Comment({arg, step}){
	return (
		<div 
			id={step.id} 
			className="comment">
				<span className="comment-text">{arg.value}</span>
		</div>
	);
}

module.exports = Comment;