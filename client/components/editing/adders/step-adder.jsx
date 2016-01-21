var React = require("react");
var ReactDOM = require('react-dom');
var GrammarLookup = require('./../../../lib/presentation/grammar-adder-lookup');
var domUtils = require('./../../../lib/dom-utils');
var uuid = require('node-uuid');

function AddStepItem(props){
    var onclick = e => {
        props.option.select();

        e.preventDefault();
    }


    return (
        <a 
            href="#" 
            data-key={props.option.grammar.key} 
            onClick={onclick}
            className="list-group-item add-step">{props.option.title}</a>
    );
};


function StepAdder(props){
    var holder = props.holder;
    var lookup = new GrammarLookup(props.holder);

    var i = 0;
    var components = lookup.options.map(x => {
        return ( <AddStepItem key={++i} option={x} /> );
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