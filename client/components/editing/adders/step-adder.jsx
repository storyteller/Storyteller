/** @jsx React.DOM */
var React = require("react");
var GrammarLookup = require('./../../../lib/presentation/grammar-adder-lookup');
var $ = require('jquery');

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
	getInitialState: function() {
		return {
			containerStyle: {}
		};
	},

	componentDidMount: function() {
		var element = $(this.getDOMNode());

		window.addEventListener('scroll', this.handleScroll);

		this.setState({
			offsetTop: element.offset().top,
			width: element.width()
		});
	},

	componentWillUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},

	handleScroll: function(event) {
		var offsetTop = this.state.offsetTop;
		var scrollOffset = $(window).scrollTop();

		if (offsetTop < scrollOffset) {
			this.setState({
				containerStyle: {
					position: 'fixed',
					top: 0,
					width: this.state.width
				}
			});
		}
		else {
			this.setState({
				containerStyle: {}
			});
		}
	},

	render: function(){
		var holder = this.props.holder;
		var lookup = new GrammarLookup(this.props.holder);
		var containerStyle = this.state.containerStyle;

		var components = lookup.options.map(x => {
			return AddStepItem({option: x});
		});

		return (
			<div style={containerStyle}>
				<h5>Add items to {this.props.holder.title}</h5>
				<div className="list-group add-steps-container">
					{components}
				</div>
			</div>
		);
	}
});