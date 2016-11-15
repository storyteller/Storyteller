import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {Table, Column, Cell} from 'fixed-data-table';
import {Badge} from 'react-bootstrap';
var Postal = require('postal');


function getLibrary(state){
    return {library: state.get('fixtures')};
}

function FixtureTable({library}){
    const fixtures = _.sortBy(_.values(library.fixtures), x => x.title);

    if (fixtures.length == 0){
      return (
        <div>Use the "New Fixture" link in the status bar create your first Fixture, or add a Fixture class to your Storyteller testing project.</div>
      );
    }

    function TitleCell(props){
      const fixture = fixtures[props.rowIndex];
      const href = '#/fixture/' + fixture.key;

      return (
        <Cell {...props}><a href={href}>{fixture.title}</a></Cell>
      );
    }

    function ImplementationCell(props){
      return (
        <Cell {...props}>{fixtures[props.rowIndex].implementation}</Cell>
      );
    }

    function gotoErrors(){
      window.location = "/#/grammar-errors";
    }

    function ErrorCell(props){
      var count = fixtures[props.rowIndex].errorCount();

      if (count > 0){
        return (<Cell {...props} style={{align: 'center', verticalAlign: 'middle'}}><Badge title="Click to see the grammar errors" onClick={gotoErrors}>{count}</Badge></Cell>)
      }

      return (<Cell />);
    }

    function MissingCell(props){
      var fixture = fixtures[props.rowIndex];

      if (fixture.missing){
        return (<Cell {...props} style={{align: 'center', verticalAlign: 'middle'}}><Badge>All</Badge></Cell>)
      }

      if (parseInt(fixture.missingCount) > 0){
        return (<Cell {...props} style={{align: 'center', verticalAlign: 'middle'}}><Badge>{fixture.missingCount}</Badge></Cell>)
      }

      return (<Cell />);
    }

    function CommandCell(props){
      var key = fixtures[props.rowIndex].key;

      var editMsg = {type: 'open-fixture-file', key: key, export: false};
      var exportMsg = {type: 'open-fixture-file', key: key, export: true};

      var edit = () => Postal.publish({channel: 'engine-request', topic: 'open-fixture-file', data: editMsg});
      var exportAndEdit = () => Postal.publish({channel: 'engine-request', topic: 'open-fixture-file', data: exportMsg});
    
  
      return (
        <Cell {...props}><a onClick={edit} title="Open the existing markdown file for this fixture">Edit</a>  |  <a onClick={exportAndEdit} title="Export the current state of the Fixture and open the resulting file for editing">Export</a></Cell>
      )

    }

    function getRowClazz(index){
      if (fixtures[index].errorCount() > 0){
        return 'bg-warning';
      }

      return '';
    }

    return (
      <Table
        rowHeight={50}
        rowsCount={fixtures.length}
        width={1000}
        height={500}
        headerHeight={50}
        rowClassNameGetter={getRowClazz}>
        <Column
          header={<Cell>Errors</Cell>}
          cell={ErrorCell}
          width={75}
          align='center'
        />
        <Column
          header={<Cell title="'Missing' just means that the grammars are not yet implemented in code">Missing</Cell>}
          cell={MissingCell}
          width={75}
          align='center'
        />
        <Column
          header={<Cell>Fixture Title</Cell>}
          cell={<TitleCell />}
          width={200}
        />
        <Column
          header={<Cell>Implementation</Cell>}
          cell={<ImplementationCell />}
          width={500}
        />
        <Column
          header={<Cell>Commands</Cell>}
          cell = {<CommandCell />}
          width={200} />
      </Table>
    );

}


module.exports = connect(getLibrary)(FixtureTable);
