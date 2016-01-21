var React = require("react");
var CheckboxIcon = require('./../../icons')['checked'];
var Arg = require('./../../../lib/model/arg');
var _ = require('lodash');
var loader = require('./../component-loader').results;
var builders = require('./../editors/builders');
var ErrorCell = require('./../cells/error-cell');

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


var ResultRow = React.createClass({
	render: function(){
		// TODO -- this is horrible.
		var result = this.props.step.getResult();
		if (this.props.step.position){
			result = this.props.step.getResult(this.props.step.position);
		}

        var i = 1;
		var cells = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);
			if (!arg){
				arg = new Arg(cell, {cells:{}}, this.props.step.id);
			}


			return (
				<ResultCell key={i++} nowrap arg={arg}/>
			);
		});

		if (result.status == 'ok'){
			var arg = this.props.step.args.find(this.props.cells[0].key);
			if (!arg){
				arg = new Arg(this.props.cells[0], {cells:{}}, this.props.step.id);
			}
            
			cells[0] = (
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

		return (
			<tr className={clazz}>{cells}</tr>
		);
	}
});

module.exports = ResultRow;