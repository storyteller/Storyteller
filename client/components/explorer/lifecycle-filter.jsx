var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');
var Postal = require('postal');

function LifecycleButton({count, text, active, lifecycle, id, dispatch}){
    var badge = ( <span className="badge pull-right">{count}</span> );
    var content = ( <span className="pull-left">{text}</span> );

    if (active){
        return (
            <Button id={id} active>{content} {badge}</Button>
        );
    }

    var handler = e => dispatch({type: 'lifecycle-filter-changed', lifecycle: lifecycle})

    return (
        <Button id={id} active={active} onClick={handler}>{content} {badge}</Button>
    );
}

function LifecycleFilter({summary, dispatch, lifecycle}){
    var actives = {any: false, Acceptance: false, Regression: false};
    actives[lifecycle] = true;

    return (
        <ButtonGroup vertical>
            <LifecycleButton id="any-lifecycle" count={summary.total} active={actives.any} text="Any" lifecycle="any" dispatch={dispatch} />
            <LifecycleButton id="acceptance-lifecycle" count={summary.acceptance} active={actives.Acceptance} text="Acceptance" lifecycle="Acceptance" dispatch={dispatch} />
            <LifecycleButton id="regression-lifecycle" count={summary.regression} active={actives.Regression} text="Regression" lifecycle="Regression" dispatch={dispatch} />
        </ButtonGroup>
    );
}



module.exports = LifecycleFilter;