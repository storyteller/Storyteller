import React from 'react';
import Postal from 'postal';
import Icons from './../icons';
import { Button, ButtonGroup } from 'react-bootstrap';


function StatusButton({icon, count, text, active, id, status, dispatch}){
  let ic = null;
  if (icon){
    var Icon =Icons[icon];
    ic = (<Icon />);
  }

  const badge = ( <span className="badge pull-right">{count}</span> );
  const content = ( <span className="pull-left">{ic} {text}</span> );

  if (active){
    return (
      <Button id={id} active>{content} {badge}</Button>
    );
  }

  const handler = () => {
    dispatch({type:'spec-status-filter-changed', status: status});
  }

  return (
    <Button id={id} onClick={handler} active={active}>{content} {badge}</Button>
  );
}

function StatusFilter({status, summary, dispatch}){
  var actives = {any: false, success: false, failed: false, none: false};
  actives[status] = true;

  return (
    <ButtonGroup vertical className="status-filter-buttons">
      <StatusButton id="status-any" count={summary.total} active={actives.any} text="All" status="any" dispatch={dispatch} />
      <StatusButton id="status-success" count={summary.success} active={actives.success} text="Success" status="success" icon="success" dispatch={dispatch}/>
      <StatusButton id="status-failed" count={summary.failed} active={actives.failed} text="Failed" status="failed" icon="failed" dispatch={dispatch}/>
      <StatusButton id="status-none" count={summary.none} active={actives.none} text="No Results" status="none" icon="none" dispatch={dispatch}/>
    </ButtonGroup>
  );
}


module.exports = StatusFilter;
