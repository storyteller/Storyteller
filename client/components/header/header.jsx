import React from 'react';
import { connect } from 'react-redux';

import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Button} from 'react-bootstrap';

import Icons from './../icons';

import Postal from 'postal';

import StatusBar from './status-bar';
import SpecProgressBar from './spec-progress-bar';

function findSystemData(state){
    return {system: state.get('system-state')};
}

const Header = (props) => {
    const system = props.system;

    const toCommand = topic => {
        return e => {
            Postal.publish({
                channel: 'engine-request',
                topic: topic,
                data: {}
            });

            return e.preventDefault();
        }
    }

    let name = system.get('name');
    const properties = system.get('properties');
    if (properties.has('Profile')){
        const profile = properties.get('Profile');
        if (profile){
            name += ' (' + properties.get('Profile') + ')';
        }
    }

    return (
        <div>
            <Navbar inverse={true} id="top-nav">
                <Nav>
                    <NavItem href="#/">Storyteller 5</NavItem>

                    <NavItem id="project-title" eventKey="4" href="#/">{name}</NavItem>
                </Nav>
                <Nav pullRight={true}>
                        <NavItem eventKey="1" href="#/language">Fixtures and Grammars</NavItem>
                        <NavItem eventKey="2" href="#/docs">Documentation</NavItem>
                        <NavItem eventKey="3" href="#/results">Results</NavItem>
                    <NavDropdown pullRight={true} id="dropdown-commands" eventKey={1} title="Commands">
                        <NavItem eventKey="1" id="force-recycle" onClick={toCommand('force-recycle')}>Recycle System (ctrl+shift+b)</NavItem>
                        <NavItem eventKey="2" onClick={toCommand('reload-specs')}>Reload All Specs from Disk</NavItem>
                        <NavItem eventKey="2" onClick={toCommand('clear-all-results')}>Clear All Results</NavItem>
                        <NavItem eventKey="2" onClick={toCommand('reload-all')}>Reload/Recycle Everything!</NavItem>
                        <NavItem eventKey="2" onClick={toCommand('reload-fixtures')}>Reload Fixtures</NavItem>
                        <NavItem eventKey="2" onClick={toCommand('export-all-fixtures')}>Export Fixture Language</NavItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <StatusBar {...props}/>
            <SpecProgressBar />
        </div>

    );
};


module.exports = connect(findSystemData)(Header)
