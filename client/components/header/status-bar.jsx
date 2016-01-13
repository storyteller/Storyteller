var React = require("react");

var RecycleState = require('./recycle-state');
var {Navbar, Button} = require('react-bootstrap');
var Postal = require('postal');
var QueueCount = require('./../queue/queue-count');
var GrammarCount = require('./../grammars/grammar-count');


var HelpIcon = require('./help');
var Search = require('./search');
var RuntimeError = require('./runtime-error');
var UnsavedChanges = require('./unsaved-changes');


var StatusBar = function(props){
    return (
        <Navbar className="bg-info status-bar">
            <span className="pull-right">
                <UnsavedChanges />
                <QueueCount />
                <GrammarCount />
                <RecycleState {...props}/>
                <Search />
                <HelpIcon />
                <RuntimeError />
            </span>
        </Navbar>

    );
}

module.exports = StatusBar;
