var React = require('react');
var Postal = require('postal');
var {connect} = require('react-redux');
var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');
var EditorLoading = require('./alerts/editor-loading');
var SpecHeader = require('./header/spec-header');
var SpecResultHeader = require('./header/spec-result-header');
var loader = require('./component-loader').results;
var Persisting = require('./alerts/persisting');


function getSpec(state, ownProps){
    var id = ownProps.params.id;
    var spec = state.get('specs').get(id);

    var running = state.get('running');
    if (running && running.id == id){
        return {spec: state.get('running-spec'), running: true};
    }
    else if (spec.last_result){
        return {spec: spec.forResults(), running: false}
    }
    
    return {spec: spec, running: running};
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}

class SpecResults extends React.Component {
    render(){
        loader.reset();
        var components = this.props.spec.buildResults(loader, this.props.running);
        
        return (
            <Grid>
                <SpecHeader spec={this.props.spec} mode='results' />
                <Row>
                    <SpecResultHeader spec={this.props.spec} />
                    <Persisting id={this.props.spec.id}/>
                    {components}
                </Row>
            </Grid>
        );
    }

}



module.exports = connect(getSpec, addDispatch)(SpecResults);