import React from 'react';

import RecycleState from './recycle-state';
import {Navbar, Button} from 'react-bootstrap';
import Postal from 'postal';
import QueueCount from './../queue/queue-count';
import GrammarCount from './../grammars/grammar-count';


import HelpIcon from './help';
import Search from './search';
import RuntimeError from './runtime-error';
import UnsavedChanges from './unsaved-changes';


const StatusBar = function(props){
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
