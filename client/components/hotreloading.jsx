import React from 'react';
import ReactDOM from 'react-dom';
var Routing = require('./routing');
import { AppContainer } from 'react-hot-loader'

export default function HotReloaded(){
    return (
        <AppContainer>
            <Routing />
        </AppContainer>
    );
}

