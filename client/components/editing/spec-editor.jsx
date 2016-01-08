var React = require('react');

var Postal = require('postal');
var {connect} = require('react-redux');
var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');
var EditorLoading = require('./alerts/editor-loading');
var SpecHeader = require('./header/spec-header');
var SpecResultHeader = require('./header/spec-result-header');
var loader = require('./component-loader').preview;

// TODO -- centralize this one!
function getSpec(state, ownProps){
    var id = ownProps.params.id;
    var spec = state.get('specs').get(id);
    var loading = spec.spec.mode == 'header';

    if (loading){
        // TODO -- do this differently
        Postal.publish({
            channel: 'engine-request',
            topic: 'spec-data-requested',
            data: {
                type: 'spec-data-requested',
                id: id
            }
        });
    }
    
    return {spec: spec, loading: loading};
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}

function SpecEditor(props){
    return (<div>Stand in for {props.spec.title}</div>);
}


module.exports = connect(getSpec, addDispatch)(SpecEditor);

