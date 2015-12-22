var React = require("react");
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Search = require('./../../lib/presentation/search');

var SuiteAndSpecLookup = React.createClass({
	componentDidMount(){
		var element = ReactDOM.findDOMNode(this);
		var input = element.firstChild;

		var finder = function(query, callback){
			var matches = Search.findMatches(query);
			callback(matches);
		}

		$(input).typeahead({
		  minLength: 3,
		  highlight: true
		},
		{
		  name: 'options',
		  displayKey: 'title',
		  
		  source: finder,
		  templates: {
			empty: '<div class="empty-message">No matches found</div>',
			suggestion: _.template('<div><%= title%></div>')
		  }
		});
		
		$(element).on('typeahead:selected', (jquery, option) => {
			this.props.close();
			window.location = option.url;

		});
		
		input.focus();
	},

	render(){
		return (
			<div class="input-group">
			  <input style={{width: '100%'}} ref="text" type="text" className="form-control" placeholder="Find specifications or suites by name" aria-describedby="basic-addon2" />
			</div>
		)
	}
});

module.exports = SuiteAndSpecLookup;
