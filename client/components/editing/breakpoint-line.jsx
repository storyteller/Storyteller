import React from 'react';
import Breakpoint from './breakpoint';
import StepthroughControls from './stepthrough-controls';

module.exports = function({spec, title, id, position, dispatch}){
    var clazz = '';

    var isActive = spec.isActiveStep(id, position);

    var clazz = null;
    var control = null;

    if (isActive){
        clazz = 'alert stepthrough-line bg-primary';

        control = (<StepthroughControls spec={spec} /> );
    }
    else{
        clazz = 'alert stepthrough-line bg-info';

        control = (<Breakpoint spec={spec} id={id} position={position} dispatch={dispatch}/>);
    }

    return (
        <div className={clazz} style={{margin: '0px'}}>
            {control}
            <span>{title}</span>
        </div>

    );
}