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
    
    var loading = spec.mode == 'header';
    
    var running = state.get('running');
    if (running && running.id == id){
        // TODO -- this is gonna change
        return {spec: spec, loading: loading, running: true};
    }
    else if (spec.last_result){
        return {spec: spec, loading: false, running: false}
    }
    
    return {spec: spec, loading: loading, running: running};
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}

class SpecResults extends React.Component {
    componentDidMount(){
        if (this.props.loading){
            Postal.publish({
                channel: 'engine-request',
                topic: 'spec-data-requested',
                data: {
                    type: 'spec-data-requested',
                    id: this.props.spec.id
                }
            });
        }
    }
    
    
    render(){
        if (this.props.loading){
            return ( <EditorLoading spec={this.props.spec} /> );
        }

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