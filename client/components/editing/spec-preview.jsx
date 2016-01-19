var React = require('react');
var Postal = require('postal');
var {connect} = require('react-redux');
var {Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem} = require('react-bootstrap');
var EditorLoading = require('./alerts/editor-loading');
var SpecHeader = require('./header/spec-header');
var SpecResultHeader = require('./header/spec-result-header');
var loader = require('./component-loader').preview;
var Persisting = require('./alerts/persisting');

function getSpec(state, ownProps){
    var id = ownProps.params.id;
    var spec = state.get('specs').get(id);
    var loading = spec.mode == 'header';

    return {spec: spec, loading: loading};
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}

class SpecPreview extends React.Component {
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
        var components = this.props.spec.previews(loader);
        
        return (
            <Grid>
                <SpecHeader spec={this.props.spec} mode='preview' />
                <Row>
                    <SpecResultHeader spec={this.props.spec} />
                    <Persisting id={this.props.spec.id}/>
                    {components}
                </Row>
            </Grid>
        );
    }
    

}



module.exports = connect(getSpec, addDispatch)(SpecPreview);