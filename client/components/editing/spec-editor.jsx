var React = require('react');

var Postal = require('postal');
var {connect} = require('react-redux');
var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');
var EditorLoading = require('./alerts/editor-loading');
var SpecHeader = require('./header/spec-header');
var SpecResultHeader = require('./header/spec-result-header');
var loader = require('./component-loader').editing;
var RetryCount = require('./header/retry-count');
var ExpirationPeriod = require('./header/expiration-period');
var SpecOutline = require('./spec-outline');


// TODO -- centralize this one!
function getSpec(state, ownProps){
    var id = ownProps.params.id;
    var spec = state.get('specs').get(id);
    var loading = spec.mode == 'header';

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
    
    // updatingDate: WHAT --> disables the ExpirationPeriod while it's being updated
    
    return {
        spec: spec, 
        loading: loading, 
        activeContainer: spec.spec.activeHolder,
        updatingDate: false
    };
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}

function ContextualPane(props){
    var contextualControl = null;
    if (props.activeContainer){
        contextualControl = props.activeContainer.contextualControl(loader);
    }
    
    return (
        <Col key="left" xs={4} md={4}>
            <RetryCount count={props.spec.spec['max-retries']}/>
            <ExpirationPeriod spec={props.spec.spec} disabled={props.updatingDate} />
            <h4>Outline</h4>
            <SpecOutline outline={props.outline} />
            <br />
            <br />
            {contextualControl}
        </Col>
    );
}

function SpecEditor(props){

    // TODO -- get the updatingDate? Think that would be something we do w/ redux now
    loader.reset();
    var components = props.spec.editors(loader);
    
    // TODO -- put Persisting back
    // <Persisting spec={props.spec} lastSaved={props.lastSaved} persisting={props.persisting}/>
    
    return (
        <Grid>
            <SpecHeader spec={props.spec} mode="editing" />
            <Row>
                
				<ContextualPane
                    spec={props.spec}
                    loader={loader}
                    activeContainer={props.activeContainer}
                    outline={props.spec.outline()}
                    updatingDate={props.updatingDate}
                />
                
                <Col key="right" xs={8} md={8}>
                    <SpecResultHeader spec={props.spec} />

                    

                    {components}
                </Col>
            </Row>
        </Grid>
    );
}


module.exports = connect(getSpec, addDispatch)(SpecEditor);

