var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');
var Postal = require('postal');

function LifecycleButton(props){
    var badge = ( <span className="badge pull-right">{props.count}</span> );
    var content = ( <span className="pull-left">{props.text}</span> );

    if (props.active){
        return (
            <Button id={props.id} active>{content} {badge}</Button>
        );
    }

    var handler = e => props.dispatch({type: 'lifecycle-filter-changed', lifecycle: props.lifecycle})


    return (
        <Button id={props.id} active={props.active} onClick={handler}>{content} {badge}</Button>
    );
}

function LifecycleFilter(props){
    var actives = {any: false, Acceptance: false, Regression: false};
    actives[props.lifecycle] = true;

    return (
        <ButtonGroup vertical>
            <LifecycleButton id="any-lifecycle" count={props.summary.total} active={actives.any} text="Any" lifecycle="any" dispatch={props.dispatch} />
            <LifecycleButton id="acceptance-lifecycle" count={props.summary.acceptance} active={actives.Acceptance} text="Acceptance" lifecycle="Acceptance" dispatch={props.dispatch} />
            <LifecycleButton id="regression-lifecycle" count={props.summary.regression} active={actives.Regression} text="Regression" lifecycle="Regression" dispatch={props.dispatch} />
        </ButtonGroup>
    );
}



module.exports = LifecycleFilter;