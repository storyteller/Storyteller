/** @jsx React.DOM */
var React = require("react");
var GrammarLookup = require('./../../lib/grammar-adder-lookup');

var AddStepItem = React.createClass({
	render: function(){
		var onclick = e => {
			this.props.option.select();

			e.preventDefault();
		}


		return (
			<a 
				href="#" 
				data-key={this.props.option.grammar.key} 
				onClick={onclick}
				className="list-group-item add-step">{this.props.option.title}</a>
		);
	}
});

module.exports = React.createClass({
	render: function(){
		var holder = this.props.holder;
		var lookup = new GrammarLookup(this.props.holder);

		var components = lookup.options.map(x => {
			return AddStepItem({option: x});
		});

		return (
			<div>
				<h5>Add items to {this.props.holder.title}</h5>
				<div className="list-group add-steps-container">
					{components}
				</div>
			</div>
		);
	}
});