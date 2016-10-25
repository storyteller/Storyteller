import React from 'react';
import Postal from 'postal';

import {Button, Badge} from 'react-bootstrap';
import { connect } from 'react-redux';

function getCount(state){
    return {count: state.get('fixtures').errorCount()};
}

function GrammarCount({count}){
    if (count == 0)
    {
        return (<span />);
    }

    const onclick = function(){
        window.location = '#/grammar-errors'
    }

    return (
        <Button id="grammar-error-count" bsStyle="link" onClick={onclick}><Badge>{count}</Badge> grammar errors</Button>
    );
}

module.exports = connect(getCount)(GrammarCount);
