import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import GrammarLookup from './../../../lib/presentation/grammar-adder-lookup';
import $ from 'jquery';
import scrollIntoView from 'scroll-into-view';

class StepAdderLookup extends Range.Component {
  componentDidMount(){
    const element = ReactDOM.findDOMNode(this);
    scrollIntoView(element);

    const input = element.firstChild;
    $(input).addClass('mousetrap');

    const lookup = new GrammarLookup(this.props.holder);

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
      scrollIntoView(input);
    });

    input.focus();
  }

  render(){
    let clazz = '';
    if (this.props.active){
      clazz = 'bg-primary';
    }

    return (
      <div className="input-group">
        <input style={{width: '100%'}} ref="text" type="text" className="form-control" placeholder="Add steps or comments" aria-describedby="basic-addon2" />
      </div>
    )
  }
}

module.exports = StepAdderLookup;
