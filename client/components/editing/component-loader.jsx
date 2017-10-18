import React from 'react';
import _ from 'lodash';
import { Tabs, Tab } from 'react-bootstrap';
import uuid from 'node-uuid';
import Icons from './../icons';

class Loader {
  constructor(parent){
    this.parent = parent;
    this.count = 0;
  }

  reset() {
    this.count = 0;
  }

  add(method, path){
    const Component = require('./' + path);
    this[method] = function(props){
      return ( <Component {...props} key={++this.count} /> );
    }
  }

  span(text){
    return ( <span key={++this.count}>{text}</span> );
  }

  div(components){
    return (<div>{components}</div>);
  }

  chromed(){
    return this.parent || this;
  }

  chromeless(){
    const chromeless = new Loader(this);
    toEditor(chromeless);

    chromeless.add('line', 'lines/line');
    chromeless.add('container', 'containers/preview-container');

    return chromeless;
  }
}

function toEditor(editor){
  editor.add('cell', 'cells/cell');
  editor.add('line', 'lines/line-with-chrome');
  editor.add('container', 'containers/editor-container');
  editor.add('comment', 'comments/comment-editor');
  editor.add('table', 'tables/table-editor');
  editor.add('row', 'tables/body-row');
  editor.add('errorBox', 'lines/error-box');
  editor.add('stepAdder', 'adders/step-adder');
  editor.add('tableContext', 'tables/table-context');
  editor.add('stepAdderLookup', 'adders/step-adder-lookup');
  editor.add('stepAdderPlaceholder', 'adders/step-adder-placeholder');
}

const editor = new Loader();
toEditor(editor);




var preview = new Loader();
preview.add('line', 'lines/line');
preview.add('container', 'containers/preview-container');
preview.add('cell', 'cells/preview-cell');
preview.add('table', 'tables/table-preview');
preview.add('comment', 'comments/comment');
preview.add('row', 'tables/preview-row');
preview.add('errorBox', 'lines/error-box');

preview.stepAdder = x => null;
preview.tableContext = x => null;

const CheckboxIcon = Icons['checked'];

const results = new Loader();
results.add('line', 'lines/line');
results.add('container', 'containers/preview-container');
results.add('cell', 'cells/preview-cell');
results.add('table', 'tables/table-preview');
results.add('errorRow', 'tables/error-row');
results.add('row', 'tables/result-row');
results.add('errorBox', 'lines/error-box');
results.add('matchedRow', 'tables/set-verification-row');
results.add('extraRow', 'tables/extra-row');

results.add('comment', 'comments/comment');
results.add('successCell', 'cells/success-cell');
results.add('failedCell', 'cells/failure-cell');
results.add('missingCell', 'cells/missing-cell');
results.add('errorCell', 'cells/error-cell');
results.add('perfTable', 'logging/perf-table');
results.add('logComponent', 'logging/log-component');
results.add('setResultsTable', 'tables/set-results-table');
results.add('noResults', 'alerts/no-results');

results.add('stepthroughControls', 'stepthrough-controls');
results.add('breakpoint', 'breakpoint');
results.add('breakpointLine', 'breakpoint-line');
results.add('stepthroughTable', 'tables/stepthrough-table');

results.checked = () => {
  return ( <CheckboxIcon key={++results.count} /> );
};

results.success = () => {
  const Success = Icons['success'];
  return (<Success key={++results.count} />);
}

results.failed = () => {
  const Failed = Icons['failed'];
  return (<Failed key={++results.count} />);
}

results.error = () => {
  const Error = Icons['error'];
  return (<Error key={++results.count} />);
}



results.tabbedArea = props => {
  return (
    <Tabs id="result-tab" key="result-tabs" defaultActiveKey={0} {...props}>
      {props.children}
    </Tabs>
  );
};

results.tab = (inner, key, title) => {
  let children = [inner];
  if (inner instanceof Array){
    children = inner;
  }

  return (<Tab key={++results.count} eventKey={key} title={title}>{children}</Tab>);
};

results.stepAdder = x => null;
results.tableContext = x => null;

module.exports = {
  editing: editor,
  preview: preview,
  results: results
}
