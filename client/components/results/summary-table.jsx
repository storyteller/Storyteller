var Postal = require('postal');
var React = require("react");
var {Button, ButtonGroup, Well} = require('react-bootstrap');
var ResultsTable = require('./results-table');

function LifecycleButton({count, active, id, text, lifecycle, dispatch}){
    var badge = (<span className="badge">{count}</span>);

    if (active){
        return (
            <Button id={id} active>{badge} {text}</Button>
        );
    }

    var lifecycle = lifecycle;

    var handler = () => {
        dispatch({type: 'lifecycle-filter-changed', lifecycle: lifecycle});
    }
    
    return (
        <Button id={id} active={active} onClick={handler}>{badge} {text}</Button>
    );
}

function LifecycleFilter({lifecycle, specs, dispatch}){
    var actives = {any: false, acceptance: false, regression: false};
    actives[lifecycle] = true;

    var total = specs.length;
    var acceptance = specs.filter(x => x.lifecycle == 'Acceptance').length;
    var regression = specs.filter(x => x.lifecycle == 'Regression').length;

    return (
        <ButtonGroup>
            <LifecycleButton id="any-lifecycle" count={total} active={actives.any} text="Any" lifecycle="any" dispatch={dispatch} />
            <LifecycleButton id="acceptance-lifecycle" count={acceptance} active={actives.acceptance} text="Acceptance" lifecycle="Acceptance" dispatch={dispatch}/>
            <LifecycleButton id="regression-lifecycle" count={regression} active={actives.regression} text="Regression" lifecycle="Regression" dispatch={dispatch}/>
        </ButtonGroup>
    );
}

function StatusButton({count, active, id, text, status, dispatch}){
		var badge = (<span className="badge">{count}</span>);

		if (active){
			return (
				<Button id={id} active>{badge} {text}</Button>
			);
		}

		var handler = () => {
            dispatch({type: 'spec-status-filter-changed', status: status});
		}

		return (
			<Button id={id} onClick={handler} active={active}>{badge} {text}</Button>
		);
}


function StatusFilter({status, specs, dispatch}){
    var actives = {all: false, success: false, failed: false, none: false};
    actives[status] = true;
    
    var total = specs.length;
    var succeeded = specs.filter(x => x.status == 'success').length;
    var failed = specs.filter(x => x.status == 'failed').length;

    return (
        <ButtonGroup className="status-filter-buttons">
            <StatusButton id="all-status" count={total} active={actives.all} text="All" status="any" dispatch={dispatch}/>
            <StatusButton id="success-status" count={succeeded} active={actives.success} text="Success" status="success" icon="success" dispatch={dispatch}/>
            <StatusButton id="failed-status" count={failed} active={actives.failed} text="Failed" status="failed" icon="failed" dispatch={dispatch}/>
        </ButtonGroup>
    );
}

function SummaryTable({specs, lifecycle, status, dispatch}){
    if (lifecycle != 'any'){
        specs = specs.filter(x => x.lifecycle == lifecycle);
    }
   
    if (status != 'success' && status != 'failed'){
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
                <LifecycleFilter lifecycle={lifecycle} specs={specs} dispatch={dispatch}/>
                <strong style={spacerStyle}>Status: </strong>
                <StatusFilter status={status} specs={specs} dispatch={dispatch}/>
            </Well>
            
            

            <ResultsTable specs={specs} />
        </div>
    );
}



module.exports = SummaryTable;