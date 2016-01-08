var React = require('react');

var Postal = require('postal');
var {connect} = require('react-redux');
var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');
var EditorLoading = require('./alerts/editor-loading');
var SpecHeader = require('./header/spec-header');
var SpecResultHeader = require('./header/spec-result-header');
var loader = require('./component-loader').editing;

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
    // TODO -- get the activeContainer?
    // TODO -- get the outline?
    // TODO -- get the updatingDate?

/*
                <ContextualPane
                    spec={props.spec}
                    loader={loader}
                    activeContainer={this.state.activeContainer}
        outline={this.state.outline}
        updatingDate={this.state.updatingDate}
        />
*/

    
    var components = props.spec.spec.editors(loader);
    
    // TODO -- put Persisting back
    // <Persisting spec={props.spec} lastSaved={props.lastSaved} persisting={props.persisting}/>
    
    return (
        <Grid>
            <SpecHeader spec={props.spec} mode="editing" />
            <Row>
                

                
                <Col key="right" xs={8} md={8}>
                    <SpecResultHeader spec={props.spec} />

                    

                    {components}
                </Col>
            </Row>
        </Grid>
    );
}


module.exports = connect(getSpec, addDispatch)(SpecEditor);

