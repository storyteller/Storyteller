import React from 'react';
import Icons from './../icons';
import { connect } from 'react-redux';
import Specification from './../../lib/model/specification';

module.exports = function({spec, id, position, dispatch}){
    var isBreakpoint = spec.isAtBreakpoint(id, position);
    var isActive = spec.isActiveStep(id, position);

    var Icon = null;
    var title = null;
    var message = null;

    if (spec instanceof Specification){
        spec = spec.id;
    }

    if (isActive){
        Icon = Icons['active-breakpoint'];
        title = "This is the active breakpoint in the step through session";
    }
    else if (isBreakpoint){
        Icon = Icons['breakpoint'];
        title = "Click to clear this breakpoint";

        message = {
            type: 'alter-breakpoints',
            action: 'clear',
            spec: spec,
            id: id,
            position: position
        };
    }
    else{
        Icon = Icons['blank-breakpoint'];
        title = "Click to set a breakpoint";

        message = {
            type: 'alter-breakpoints',
            action: 'set',
            spec: spec,
            id: id,
            position: position
        };
    }

    var onClick = () => {
        if (message){
            dispatch(message);
        }
    }

    return (
        <a onClick={onClick} title={title}><Icon /></a>
    );
}