var React = require('react');

var Postal = require('postal');
var {connect} = require('react-redux');
var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem, Tab, Tabs} = require('react-bootstrap');
var {AutoAffix} = require('react-overlays');
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

    return {
        spec: spec,  
        activeContainer: spec.spec.activeHolder,
        updatingDate: false
    };
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}


function ContextualPane(props){
    var contextualControl = null;

    if (props.activeContainer && props.activeContainer.contextualControl){
        contextualControl = props.activeContainer.contextualControl(loader);

        if (contextualControl){
            var title = contextualControl.props.title;
            if (!AutoAffix) throw new Error('do not have AutoAffix!');
            
            return (
                <Col key="left" xs={4} md={4}>
                <AutoAffix viewportOffsetTop={15} container={props.editor}>
                <Tabs defaultActiveKey={0}>
                    <Tab eventKey={0} title={title}>
                        <div className="contextual-control">
                            {contextualControl}
                        </div>
                    </Tab>
                    
                    <Tab eventKey={1} title="Outline">
                        <SpecOutline outline={props.outline} />  
                    </Tab>
                    
                    <Tab eventKey={2} title="Properties">
                        <RetryCount count={props.spec.spec['max-retries']}/>
                        <ExpirationPeriod spec={props.spec.spec} disabled={props.updatingDate} />
                    </Tab>
                </Tabs>
                </AutoAffix>
                </Col>
            ) 
        }


        
    }
    
    return (
        <Col key="left" xs={4} md={4}>
            <AutoAffix viewportOffsetTop={15} container={props.editor}>
            <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Outline">
                    <SpecOutline outline={props.outline} />  
                </Tab>
                
                <Tab eventKey={2} title="Properties">
                    <RetryCount count={props.spec.spec['max-retries']}/>
                    <ExpirationPeriod spec={props.spec.spec} disabled={props.updatingDate} />
                </Tab>
            </Tabs>
            </AutoAffix>
        </Col>
    );

}



class SpecEditor extends React.Component{
    render(){
        loader.reset();
        var spec = this.props.spec;
        
        var components = spec.editors(loader);
        
        return (
            <Grid>
                <SpecHeader spec={spec} mode="editing" />
                <Row>
                    
                    <ContextualPane
                        editor={this}
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

