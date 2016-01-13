var React = require("react");
var Postal = require('postal');

var {Button, Badge} = require('react-bootstrap');
var { connect } = require('react-redux');

function getCount(state){
    return {count: state.get('fixtures').errorCount()};
}

function GrammarCount(props){
    if (props.count == 0)
    {
        return null;
    }

    var onclick = function(){
        window.location = '#/grammar-errors'
    }

    return (
        <Button id="grammar-error-count" bsStyle="link" onClick={onclick}><Badge>{props.count}</Badge> grammar errors</Button>

    );
}

module.exports = connect(getCount)(GrammarCount);
