import React from 'react';
import Postal from 'postal';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import EditorLoading from './alerts/editor-loading';
import SpecHeader from './header/spec-header';
import SpecResultHeader from './header/spec-result-header';
import { preview as loader } from './component-loader';
import Persisting from './alerts/persisting';

function getSpec(state, ownProps){
  const id = ownProps.params.id;
  const spec = state.get('specs').get(id);

  return {spec: spec};
}

function addDispatch(dispatch){
  return {dispatch: dispatch};
}

class SpecPreview extends React.Component {
  render(){
    loader.reset();
    const components = this.props.spec.previews(loader);

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
