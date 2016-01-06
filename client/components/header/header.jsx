var React = require("react");
var { connect } = require('react-redux');

var {Nav, Navbar, NavDropdown, MenuItem, NavItem, Button} = require('react-bootstrap');

var Icons = require('./../icons');

var Postal = require('postal');

var StatusBar = require('./status-bar');
var Hierarchy = require('./../../lib/stores/hierarchy');
var SpecProgressBar = require('./spec-progress-bar');

function findSystemData(state){
    return {system: state.get('system-state')};
    
}

var Header = (props) => {
    var system = props.system;
    
    // TODO -- let's eliminate this one?
    var toCommand = topic => {
        return e => {
            Postal.publish({
                channel: 'engine-request',
                topic: topic,
                data: {}
            });
            
            return e.preventDefault();
        }
    }

    var name = system.get('name');
    var properties = system.get('properties');
    if (properties.has('Profile')){
        name += ' (' + properties.get('Profile') + ')';
    }


//            <SpecProgressBar />


    return (
        <div>
            <Navbar inverse={true} id="top-nav">
                <Nav>
                    <a className="navbar-brand" href="#/">Storyteller 3</a>

                    <NavItem id="project-title" eventKey="4" href="#/">{name}</NavItem>
                </Nav>
                <Nav pullRight={true}>
                        <NavItem eventKey="1" href="#/language">Fixtures and Grammars</NavItem>
                        <NavItem eventKey="2" href="#/docs">Documentation</NavItem>
                        <NavItem eventKey="3" href="#/results">Results</NavItem>
                    <NavDropdown pullRight={true} id="dropdown-commands" eventKey={1} title="Commands">
                        <NavItem eventKey="1" id="force-recycle" onClick={toCommand('force-recycle')}>Recycle System</NavItem>
                        <NavItem eventKey="2" onClick={toCommand('reload-specs')}>Reload All Specs from Disk</NavItem>
                        <NavItem eventKey="2" onClick={toCommand('clear-all-results')}>Clear All Results</NavItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <StatusBar {...props}/>

        </div>

    );
};


module.exports = connect(findSystemData)(Header)

