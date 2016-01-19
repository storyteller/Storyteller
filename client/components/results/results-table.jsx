var React = require('react');
var Counts = require('./../../lib/model/counts');

function SpecRow(props){
    var bsStyle = 'info';
    
    if (props.spec.status == 'success'){
        bsStyle = 'success';
    }
    else {
        bsStyle = 'danger';
    }

    
    var href = '#spec/results/' + props.spec.id;
    
    var counts = new Counts(props.spec.last_result.results.counts);
    
    bsStyle = 'spec-row ' + bsStyle;
    
    return (
        <tr className={bsStyle}>
            <td><a className="spec-link" href={href}>{props.spec.path}</a></td>
            <td>{props.spec.lifecycle}</td>
            <td>{counts.toString()}</td>
            <td className="number-cell">{props.spec.last_result.results.duration}</td>
            <td className="number-cell">{props.spec.last_result.results.attempts}</td>
        </tr>
    );
}

function ResultsTable(props){
    var specs = props.specs;

    var i = 0;
    var rows = _.sortBy(specs, x => x.path).map(x => {
       return (<SpecRow spec={x} key={++i}/>); 
    });
    
    return (
        <table id="results-table" className="table">
            <thead>
            <tr>
                <th>Specification</th>
                <th>Lifecycle</th>
                <th>Results</th>
                <th>Duration (ms)</th>
                <th>Attempts</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>  
    );
}


module.exports = ResultsTable;