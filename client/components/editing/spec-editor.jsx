import React from 'react';

import Postal from 'postal';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Grid, Row, Col, ListGroup, ListGroupItem, Tab, Tabs } from 'react-bootstrap';
import{ AutoAffix } from 'react-overlays';
import EditorLoading from './alerts/editor-loading';
import SpecHeader from './header/spec-header';
import SpecResultHeader from './header/spec-result-header';
import { editing as loader} from './component-loader';
import RetryCount from './header/retry-count';
import SpecOutline from './spec-outline';
import Persisting from './alerts/persisting';


// TODO -- centralize this one!
function getSpec(state, ownProps){
  const id = ownProps.params.id;
  const spec = state.get('specs').get(id);

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
    let contextualControl = null;

    if (props.activeContainer && props.activeContainer.contextualControl){
        contextualControl = props.activeContainer.contextualControl(loader);

        if (contextualControl){
            const title = contextualControl.props.title;
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
        </Tab>
      </Tabs>
      </AutoAffix>
    </Col>
  );
}



class SpecEditor extends React.Component {
  render(){
    loader.reset();
    const { spec } = this.props;

    const components = spec.editors(loader);

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
