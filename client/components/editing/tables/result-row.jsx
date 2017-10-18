var React = require("react");
var CheckboxIcon = require('./../../icons')['checked'];
var Arg = require('./../../../lib/model/arg');
var _ = require('lodash');
var loader = require('./../component-loader').results;
var builders = require('./../editors/builders');
var ErrorCell = require('./../cells/error-cell');
var StepthroughControls = require('./../stepthrough-controls');
var Breakpoint = require('./../breakpoint');

function ResultCell(props){
    var classes = {
        ok: '',
        success: 'bg-success',
        failed: 'bg-danger',
        error: 'bg-warning',
        missing: 'bg-warning',
        invalid: 'bg-warning'
    }
    
    var arg = props.arg;
    var builder = builders.findEditor(arg.cell.editor);
    var text = builder.display(arg.cell, arg.value);
    var clazz = 'table-cell';
    
    if (arg.result){
        var result = arg.result.status || 'ok';
        
        if (result == 'ok'){
            return (<td>{text}</td>);
        }

        if (result == 'error' || result == 'invalid'){
            return (<td className="bg-warning"><ErrorCell cell={arg.cell} error={arg.result.error} value={arg.value} result={arg.result}/></td>);
        }
        
        if (result == 'failed'){
            return (<td className="bg-danger">{text} but was <i>{arg.result.actual}</i></td>);
        }
        
        clazz = clazz + ' ' + classes[result];
    }

    var ck = null;
    if (props.checked){
        ck = (<CheckboxIcon />);    
    }
    
    return (
        <td nowrap className={clazz}>{ck}{text}</td>
    )
}

function ResultRow({step, cells, dispatch, isStepthrough}){
	var result = step.getResult();
	if (step.position){
		result = step.getResult(step.position);
	}

	var i = 1;
	var cellComponents = cells.map(cell => {
		var arg = step.args.find(cell.key);
		if (!arg){
			arg = new Arg(cell, {cells:{}}, step.id);
			arg.result = result;
		}


		return (
			<ResultCell key={i++} nowrap arg={arg} actual={result.actual}/>
		);
	});

	if (result.status == 'ok'){
		var arg = step.args.find(cells[0].key);
		if (!arg){
			arg = new Arg(cells[0], {cells:{}}, step.id);
		}
		
		cellComponents[0] = (
			<ResultCell key={0} arg={arg} checked={true} />
		);
	}

	var clazz = '';
	if (result.status == 'success'){
		clazz = 'success';
	}

	if (result.status == 'failed'){
		clazz = 'danger';
	}

	if (result.status == 'error'){
		clazz = 'warning';
	}

	var stepthrough = null;
	if (isStepthrough){
		if (this.props.spec.isActiveStep(step.id, null)){
			stepthrough = (<td><StepthroughControls step={step} cells={cells}/></td>);
			clazz = 'bg-primary';
		}
		else {
			stepthrough = (
				<td>
					<Breakpoint 
						spec={spec} 
						id={step.id}
						position={null}
						dispatch={dispatch}
						/>
				</td>);
		}
	}

	return (
		<tr className={clazz}>{stepthrough}{cellComponents}</tr>
	);
}


module.exports = ResultRow;