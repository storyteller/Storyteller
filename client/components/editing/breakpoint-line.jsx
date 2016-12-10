import React from 'react';
import Breakpoint from './breakpoint';
import StepthroughControls from './stepthrough-controls';

module.exports = function({spec, title, id, position, dispatch}){
    var clazz = '';

    var isActive = spec.isActiveStep(id, position);

    if (isActive){
        return (
            <div style={{padding: '3px'}} className="stepthrough-line text-info bg-primary">
                <StepthroughControls spec={spec} /> 
                <span>{title}</span>
                
            </div>

        );
    }
    else {
        return (
            <div className="stepthrough-line alert alert-info" style={{margin: '0px'}}>
                <Breakpoint spec={spec} id={id} position={position} dispatch={dispatch}/>
                <span>{title}</span>
            </div>

        )
    }
}