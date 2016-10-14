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

    return {spec: spec};
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}

class SpecPreview extends React.Component {
    render(){
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