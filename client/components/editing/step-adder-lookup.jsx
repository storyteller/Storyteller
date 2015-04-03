/** @jsx React.DOM */

var React = require("react");
var _ = require('lodash');

module.exports = React.createClass({
	componentDidMount(){
		var element = this.getDOMNode();
		element.scrollIntoView();

		var input = element.firstChild;

		var options = this.props.holder.grammars().map(grammar => {
			return {grammar: grammar, title: grammar.title, lower: grammar.title.toLowerCase()};
		});

		var finder = function(query, callback){
			var fragment = query.toLowerCase();

			var matches = options.filter(x => {
				return x.lower.search(fragment) > -1;
			});

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
			alert('found!');
		});
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