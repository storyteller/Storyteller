import React from 'react';
import Breakpoint from './breakpoint';
import StepthroughControls from './stepthrough-controls';

module.exports = function({spec, title, id, position, dispatch}){
    var clazz = '';

    var isActive = spec.isActiveStep(id, position);

    if (isActive){
        return (
            <div className="stepthrough-line text-info">
                <Breakpoint spec={spec} id={id} position={position} dispatch={dispatch}/>
                <span>{title}</span>
                <StepthroughControls spec={spec} /> 
            </div>

        );
    }
    else {
        return (
            <div className="stepthrough-line">
                <Breakpoint spec={spec} id={id} position={position} dispatch={dispatch}/>
                <span>{title}</span>
            </div>

        )
    }
}