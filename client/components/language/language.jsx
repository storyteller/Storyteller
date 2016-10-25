import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

function getLibrary(state){
    return {library: state.get('fixtures')};
}

function FixtureTable({library}){
    const fixtures = _.sortBy(_.values(library.fixtures), x => x.title);

    const rows = fixtures.map((x, i) => {
        const href = '#/fixture/' + x.key;
        let clazz = '';
        if (x.errorCount() > 0){
            clazz = 'warning';
        }

        return (
          <tr key={i+1} className={clazz}>
            <td><a href={href}>{x.title}</a></td>
            <td>{x.implementation}</td>
            <td style={{textAlign: 'right'}}>{x.errorCount()}</td>
          </tr>
        );
    });

    return (
      <div>
        <h2>The Specification Language</h2>
        <hr />
        <table className="table">
          <thead>
            <tr>
                <th>Fixture Title</th>
                <th>Implementation</th>
                <th>Errors</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
}


module.exports = connect(getLibrary)(FixtureTable);
