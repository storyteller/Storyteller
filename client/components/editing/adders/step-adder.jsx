var React = require("react");
var GrammarLookup = require('./../../../lib/presentation/grammar-adder-lookup');
var domUtils = require('./../../../lib/dom-utils');

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
		var node = this.getDOMNode();

		window.addEventListener('scroll', this.handleScroll);

		this.setState({
			offsetTop: domUtils.offsetTop(node),
			width: domUtils.width(node)
		});
	},

	componentWillUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},

	handleScroll: function(event) {
		var offsetTop = this.state.offsetTop;
		var scrollOffset = domUtils.scrollTop(window);
		var node = this.getDOMNode();
		var self = this;

		if (offsetTop < scrollOffset) {
			this.setState({
				containerStyle: generateFloatingStyle()
			});
		}
		else {
			this.setState({
				containerStyle: {}
			});
		}

		function generateFloatingStyle()
		{
			var style = {
				position: 'fixed',
				top: 0,
				width: self.state.width
			};
			if (isNodeOffPage()) {
				addVerticalScrolling(style);
			}
			return style;
		}

		function addVerticalScrolling(style)
		{
			style.height = domUtils.screenHeight() + 1;
			style['overflow-y'] = 'scroll';
		}

		function isNodeOffPage()
		{
			return domUtils.screenHeight() < domUtils.height(node);
		}
	},

	render: function(){
		var holder = this.props.holder;
		var lookup = new GrammarLookup(this.props.holder);
		var containerStyle = this.state.containerStyle;

		var components = lookup.options.map(x => {
			return ( <AddStepItem option={x} /> );
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