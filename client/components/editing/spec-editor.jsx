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
var Persisting = require('./alerts/persisting');

// TODO -- centralize this one!
function getSpec(state, ownProps){
    var id = ownProps.params.id;
    var spec = state.get('specs').get(id);
    var loading = spec.mode == 'header';

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

class SpecEditor extends React.Component{
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
        loader.reset();
        var spec = this.props.spec;
        
        var components = spec.editors(loader);
        
        return (
            <Grid>
                <SpecHeader spec={spec} mode="editing" />
                <Row>
                    
                    <ContextualPane
                        spec={spec}
                        loader={loader}
                        activeContainer={this.props.activeContainer}
                        outline={spec.outline()}
                        updatingDate={this.props.updatingDate}
                    />
                    
                    <Col key="right" xs={8} md={8}>
                        <SpecResultHeader spec={spec} />
                        <Persisting id={spec.id}/>
                        

                        {components}
                    </Col>
                </Row>
            </Grid>
        );
    }

}


module.exports = connect(getSpec, addDispatch)(SpecEditor);

