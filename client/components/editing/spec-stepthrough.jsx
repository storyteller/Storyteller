import React from 'react';
import Postal from 'postal';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import EditorLoading from './alerts/editor-loading';
import SpecHeader from './header/spec-header';
import SpecResultHeader from './header/spec-result-header';
import { results as loader} from './component-loader';
import Persisting from './alerts/persisting';



function getSpec(state, ownProps){
  const id = ownProps.params.id;
  const spec = state.get('specs').get(id);

  const running = state.get('running');
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

class SpecStepthrough extends React.Component {
  render() {
    loader.reset();
    const components = this.props.spec.spec.buildStepthrough(loader, this.props.dispatch);

    return (
      <Grid>
        <Row>
          <SpecHeader {...this.props} mode='stepthrough' />
        </Row>

        <Row>
          <SpecResultHeader {...this.props} />
          {components}
        </Row>
      </Grid>
    );
  }
}


module.exports = connect(getSpec, addDispatch)(SpecStepthrough);