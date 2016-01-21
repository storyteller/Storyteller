var Postal = require('postal');
var React = require("react");
var {Button, ButtonGroup, Well} = require('react-bootstrap');
var ResultsTable = require('./results-table');

function LifecycleButton(props){
    var badge = (<span className="badge">{props.count}</span>);

    if (props.active){
        return (
            <Button id={props.id} active>{badge} {props.text}</Button>
        );
    }

    var lifecycle = props.lifecycle;

    var handler = () => {
        props.dispatch({type: 'lifecycle-filter-changed', lifecycle: lifecycle});
    }
    
    return (
        <Button id={props.id} active={props.active} onClick={handler}>{badge} {props.text}</Button>
    );
}

function LifecycleFilter(props){
    var actives = {any: false, acceptance: false, regression: false};
    actives[props.lifecycle] = true;

    var total = props.specs.length;
    var acceptance = props.specs.filter(x => x.lifecycle == 'Acceptance').length;
    var regression = props.specs.filter(x => x.lifecycle == 'Regression').length;

    return (
        <ButtonGroup>
            <LifecycleButton id="any-lifecycle" count={total} active={actives.any} text="Any" lifecycle="any" dispatch={props.dispatch} />
            <LifecycleButton id="acceptance-lifecycle" count={acceptance} active={actives.acceptance} text="Acceptance" lifecycle="Acceptance" dispatch={props.dispatch}/>
            <LifecycleButton id="regression-lifecycle" count={regression} active={actives.regression} text="Regression" lifecycle="Regression" dispatch={props.dispatch}/>
        </ButtonGroup>
    );
}

function StatusButton(props){
		var badge = (<span className="badge">{props.count}</span>);

		if (props.active){
			return (
				<Button id={props.id} active>{badge} {props.text}</Button>
			);
		}

		var status = props.status;

		var handler = () => {
            props.dispatch({type: 'spec-status-filter-changed', status: status});
		}

		return (
			<Button id={props.id} onClick={handler} active={props.active}>{badge} {props.text}</Button>
		);
}


function StatusFilter(props){
    var actives = {all: false, success: false, failed: false, none: false};
    actives[props.status] = true;
    
    var total = props.specs.length;
    var succeeded = props.specs.filter(x => x.status == 'success').length;
    var failed = props.specs.filter(x => x.status == 'failed').length;

    return (
        <ButtonGroup className="status-filter-buttons">
            <StatusButton id="all-status" count={total} active={actives.all} text="All" status="any" dispatch={props.dispatch}/>
            <StatusButton id="success-status" count={succeeded} active={actives.success} text="Success" status="success" icon="success" dispatch={props.dispatch}/>
            <StatusButton id="failed-status" count={failed} active={actives.failed} text="Failed" status="failed" icon="failed" dispatch={props.dispatch}/>
        </ButtonGroup>
    );
}

function SummaryTable(props){
    var specs = props.specs;
    if (props.lifecycle != 'any'){
        specs = specs.filter(x => x.lifecycle == props.lifecycle);
    }
    
    var status = props.status;
    if (props.status != 'success' && props.status != 'failed'){
        status = 'all';
    }
    
    if (status != 'all'){
        specs = specs.filter(x => x.status == status);
    }

    var spacerStyle = {
        marginLeft: '50px'
    }

    return (
        <div className="summary-table">
            <Well bsSize="small" className="text-center">
                <strong>Lifecycle: </strong>
                <LifecycleFilter lifecycle={props.lifecycle} specs={props.specs} dispatch={props.dispatch}/>
                <strong style={spacerStyle}>Status: </strong>
                <StatusFilter status={status} specs={props.specs} dispatch={props.dispatch}/>
            </Well>
            
            

            <ResultsTable specs={specs} />
        </div>
    );
}



module.exports = SummaryTable;