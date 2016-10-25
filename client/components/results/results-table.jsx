import React from 'react';
import Counts from './../../lib/model/counts';
import cn from 'classnames';
import _ from 'lodash';

function SpecRow({spec}){
    let bsStyle = 'info';

    if (spec.status === 'success'){
        bsStyle = 'success';
    }
    else {
        bsStyle = 'danger';
    }

    const href = '#spec/results/' + spec.id;

    const counts = new Counts(spec.last_result.results.counts);

    return (
        <tr className={cn('spec-row', bsStyle)}>
            <td><a className="spec-link" href={href}>{spec.path}</a></td>
            <td>{spec.lifecycle}</td>
            <td>{counts.toString()}</td>
            <td className="number-cell">{spec.last_result.results.duration}</td>
            <td className="number-cell">{spec.last_result.results.attempts}</td>
        </tr>
    );
}

function ResultsTable({specs}){

    const rows = _.sortBy(specs, x => x.path).map((x, i) => {
       return (<SpecRow spec={x} key={i}/>);
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
