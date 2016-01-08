var React = require("react");
var Postal = require('postal');
var icons = require('./../icons');
var {Button, ButtonGroup} = require('react-bootstrap');


function StatusButton(props){
    var icon = null;
    if (props.icon){
        var Icon = icons[props.icon];
        icon = (<Icon />);
    }

    var badge = ( <span className="badge pull-right">{props.count}</span> );
    var content = ( <span className="pull-left">{icon} {props.text}</span> );

    if (props.active){
        return (
            <Button id={props.id} active>{content} {badge}</Button>
        );
    }

    var handler = () => {
        props.dispatch({type:'spec-status-filter-changed', status: props.status});
    }

    return (
        <Button id={props.id} onClick={handler} active={props.active}>{content} {badge}</Button>
    );
}



function StatusFilter(props){
    var actives = {any: false, success: false, failed: false, none: false};
    actives[props.status] = true;

    return (
        <ButtonGroup vertical className="status-filter-buttons">
            <StatusButton id="status-any" count={props.summary.total} active={actives.any} text="All" status="any" dispatch={props.dispatch} />
            <StatusButton id="status-success" count={props.summary.success} active={actives.success} text="Success" status="success" icon="success" dispatch={props.dispatch}/>
            <StatusButton id="status-failed" count={props.summary.failed} active={actives.failed} text="Failed" status="failed" icon="failed" dispatch={props.dispatch}/>
            <StatusButton id="status-none" count={props.summary.none} active={actives.none} text="No Results" status="none" icon="none" dispatch={props.dispatch}/>

        </ButtonGroup>

    );
}



module.exports = StatusFilter;