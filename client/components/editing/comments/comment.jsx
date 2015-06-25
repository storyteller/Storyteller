/** @jsx React.DOM */

var React = require("react");

var Comment = React.createClass({
	render: function(){
		return (
		<div 
			id={this.props.step.id} 
			className="comment" 
			 >
				<span className="comment-text">{this.props.arg.value}</span>
		</div>
		);
	}
});

module.exports = Comment;