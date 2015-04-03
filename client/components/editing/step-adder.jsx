/** @jsx React.DOM */
var React = require("react");
var Postal = require('postal');
var changes = require('./../../lib/change-commands');
var CommentGrammar = require('./../../lib/comment-grammar');

var AddStepItem = React.createClass({
	render: function(){
		var onclick = e => {
			var step = this.props.grammar.newStep();
			var message = changes.stepAdded(this.props.holder, step);

			Postal.publish({
				channel: 'editor',
				topic: 'add-step',
				data: message
			});

			e.preventDefault();
		}


		return (
			<a 
				href="#" 
				data-key={this.props.grammar.key} 
				onClick={onclick}
				className="list-group-item add-step">{this.props.grammar.title}</a>
		);
	}
});

module.exports = React.createClass({
	render: function(){
		var holder = this.props.holder;

		var components = holder.grammars().map(grammar => {
			return AddStepItem({grammar: grammar, holder: holder});
		});

		return (
			<div>
				<h5>Add items to {this.props.holder.title}</h5>
				<div className="list-group add-steps-container">
					<AddStepItem holder={holder} grammar={CommentGrammar} />
					{components}
				</div>
			</div>
		);
	}
});