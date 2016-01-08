var React = require('react');
var Postal = require('postal');
var {connect} = require('react-redux');
var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');
var EditorLoading = require('./alerts/editor-loading');

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

class SpecPreview extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        if (this.props.loading){
            return ( <EditorLoading spec={this.props.spec} /> );
        }
        
        return (<div><h1>Standin for {this.props.spec.title}</h1></div>);
    }
}

module.exports = connect(getSpec, addDispatch)(SpecPreview);