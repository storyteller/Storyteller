var React = require("react");

var RecycleState = require('./recycle-state');
var {Navbar, Button} = require('react-bootstrap');
var Postal = require('postal');
var QueueCount = require('./../queue/queue-count');
var GrammarCount = require('./../grammars/grammar-count');


var Hierarchy = require('./../../lib/stores/hierarchy');
var HelpIcon = require('./help');
var Search = require('./search');
var RuntimeError = require('./runtime-error');
var UnsavedChanges = require('./unsaved-changes');

/*
                <UnsavedChanges />
                <QueueCount />
                <GrammarCount />
                <RecycleState recycled={this.state.recycled} time={this.state.time} success={this.state.success} recycling={this.state.recycling}/>
                <Search />
                <HelpIcon />
                <RuntimeError />
*/

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
