var React = require("react");
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Search = require('./../../lib/presentation/search');

var {connect} = require('react-redux');

function getState(state){
    return {
        state: state
    };
}

class SuiteAndSpecLookup extends React.Component {
	componentDidMount(){
		var element = ReactDOM.findDOMNode(this);
		var input = element.firstChild;

		var finder = (query, callback) => {
			var matches = Search.findMatches(this.props.state, query);
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
	}

	render(){
		return (
			<div  style={{width: '100%'}} className="input-group">
			  <input id="search-input" ref="text" type="text" className="form-control" placeholder="Find specifications or suites by name" aria-describedby="basic-addon2" />
			</div>
		)
	}
}


module.exports = connect(getState)(SuiteAndSpecLookup);
