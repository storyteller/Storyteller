import React from 'react';
import ReactDOM from 'react-dom';
import GrammarLookup from './../../../lib/presentation/grammar-adder-lookup';
import domUtils from './../../../lib/dom-utils';
import uuid from 'node-uuid';

function AddStepItem({option}){
    const onclick = e => {
      option.select();

      e.preventDefault();
    }

    return (
      <a
        href="#"
        data-key={option.grammar.key}
        onClick={onclick}
        className="list-group-item add-step">{option.title}</a>
    );
};


function StepAdder({holder}){
    const lookup = new GrammarLookup(holder);

    const components = lookup.options.map((x, i) => {
      return ( <AddStepItem key={i} option={x} /> );
    });

    return (
      <div>
        <div className="list-group add-steps-container">
          {components}
        </div>
      </div>
    );
}

module.exports = StepAdder;
