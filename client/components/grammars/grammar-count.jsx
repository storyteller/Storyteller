var React = require("react");
var Postal = require('postal');

var {Button, Badge} = require('react-bootstrap');
var { connect } = require('react-redux');

function getCount(state){
    return {count: state.get('fixtures').errorCount()};
}

function GrammarCount({count}){
    if (count == 0)
    {
        return (<span />);
    }

    var onclick = function(){
        window.location = '#/grammar-errors'
    }

    return (
        <Button id="grammar-error-count" bsStyle="link" onClick={onclick}><Badge>{count}</Badge> grammar errors</Button>

    );
}

module.exports = connect(getCount)(GrammarCount);
