var React = require("react");
var {Badge, Button} = require('react-bootstrap');
var { connect } = require('react-redux');



var getCount = function(state){
	return {count: state.get('queued').length};
}

function QueueCount({count}){
    if (count == 0){
        return ( <span></span> );
    }

    var onclick = function(){
        window.location = '#/queue';
    }

    return (
        <Button bsStyle="link" onClick={onclick}><Badge>{count}</Badge> Specs queued</Button>
    );
}


module.exports = connect(getCount)(QueueCount);