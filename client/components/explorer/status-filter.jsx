var React = require("react");
var Postal = require('postal');
var icons = require('./../icons');
var {Button, ButtonGroup} = require('react-bootstrap');


function StatusButton({icon, count, text, active, id, status, dispatch}){
    var icon = null;
    if (icon){
        var Icon = icons[icon];
        icon = (<Icon />);
    }

    var badge = ( <span className="badge pull-right">{count}</span> );
    var content = ( <span className="pull-left">{icon} {text}</span> );

    if (active){
        return (
            <Button id={id} active>{content} {badge}</Button>
        );
    }

    var handler = () => {
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