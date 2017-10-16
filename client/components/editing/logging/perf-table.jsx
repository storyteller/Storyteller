var React = require("react");
var uuid = require('node-uuid');
import {Table, Column, Cell} from 'fixed-data-table-2';
var _ = require("lodash");

var SortTypes = {
  ASC: 'asc',
  DESC: 'desc',
};

function reverseSortDirection(sortDir) {
  return sortDir === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
}

class SortHeaderCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {sortDir, children, sortColumn, columnKey, onSortChange} = this.props;

	var icon = null;
	if (sortColumn == columnKey){
		if (sortDir == SortTypes.ASC){
			icon = (<i className="fa fa-caret-up"></i>);
		}
		else {
			icon = (<i className="fa fa-caret-down"></i>);
		}
	}

	var onClick = e => {
		e.preventDefault();
		onSortChange(columnKey);
	}



    return (
      <Cell {...this.props}>
        <a onClick={onClick}>
          {children} {icon}
        </a>
      </Cell>
    );
  }

}

class PerfTable extends React.Component
{
	constructor(props){
		super(props);

		this.state = {
			sortDir: SortTypes.ASC, 
			sortColumn:'start'
		};
	}

	render(){
		var sortChange = key => {
			var sortDir = SortTypes.ASC;

			if (key == this.state.sortColumn){
				sortDir = reverseSortDirection(this.state.sortDir);
			}

			this.setState({
				sortDir: sortDir,
				sortColumn: key
			});
		}

		var records = _.orderBy(this.props.records, [this.state.sortColumn], [this.state.sortDir]);

		return (
			<div>
				<h3>Execution Timing <small>all timings in milliseconds</small></h3>
				<PerfGrid {...this.state} onSortChange={sortChange} records={records}/>
			</div>
		)
	}


}



function PerfGrid(props){
	var records = props.records;

	function TextColumn(props){
		const record = records[props.rowIndex];
		var value = record[props.columnKey];

		return (<Cell {...props}>{value}</Cell>);
	}

	function NumberColumn(props){
		const record = records[props.rowIndex];

		var clazz = "";
		if (record.perfFailure){
			clazz = "bg-danger";
		}

		var value = record[props.columnKey];

		return (<Cell {...props} className={clazz}>{value}</Cell>);
	}

	

    return (
		<Table
			rowHeight={35}
			rowsCount={records.length}
			width={1000}
			height={500}
			headerHeight={50}>
			<Column
				header={<SortHeaderCell {...props}>Type</SortHeaderCell>}
				cell={TextColumn}
				width={150}
				align='left'
				columnKey='type'
			/>
			<Column
				header={<SortHeaderCell {...props}>Subject</SortHeaderCell>}
				cell={TextColumn}
				width={250}
				align='left'
				columnKey='subject'
			/>
			<Column
				header={<SortHeaderCell {...props}>Start</SortHeaderCell>}
				cell={<NumberColumn />}
				width={75}
				align='right'
				columnKey='start'
			/>
			<Column
				header={<SortHeaderCell {...props}>End</SortHeaderCell>}
				cell={<NumberColumn />}
				width={75}
				align='right'
				columnKey='end'
			/>
			<Column
				header={<SortHeaderCell {...props}>Threshold</SortHeaderCell>}
				cell = {<NumberColumn />}
				width={100}
				align='right'
				columnKey='threshold'
				/>
			<Column
				header={<SortHeaderCell {...props}>Duration</SortHeaderCell>}
				cell = {<NumberColumn />}
				width={100}
				align='right' 
				columnKey='duration'
				/>
		</Table>
	);
}



module.exports = PerfTable;