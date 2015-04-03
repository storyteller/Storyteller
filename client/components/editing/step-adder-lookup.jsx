/** @jsx React.DOM */

var React = require("react");
var _ = require('lodash');
var GrammarLookup = require('./../../lib/grammar-adder-lookup');

module.exports = React.createClass({
	componentDidMount(){
		var element = this.getDOMNode();
		element.scrollIntoView();

		var input = element.firstChild;

		var lookup = new GrammarLookup(this.props.holder);

		var finder = function(query, callback){
			var matches = lookup.findMatches(query);
			callback(matches);
		}

		$(input).typeahead({
		  minLength: 3,
		  highlight: true
		},
		{
		  name: 'steps',
		  displayKey: 'title',
		  
		  source: finder,
		  templates: {
			empty: '<div class="empty-message">No matches found</div>',
			suggestion: _.template('<div><%= title%></div>')
		  }
		});
		
		$(element).on('typeahead:selected', function(jquery, option){
			option.select();
			$(input).val('');
			input.scrollIntoView();
		});
		
		input.focus();
	},

	render(){
		var clazz = '';
		if (this.props.active){
			clazz = 'bg-primary';
		}

		return (
			<div class="input-group">
			  <input style={{width: '100%'}} ref="text" type="text" className="form-control" placeholder="Add steps or comments" aria-describedby="basic-addon2" />
			</div>
		)
	}
});