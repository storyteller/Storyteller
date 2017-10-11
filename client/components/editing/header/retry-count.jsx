var React = require("react");
var Postal = require('postal');
var changes = require('./../../../lib/model/change-commands');

function RetryCount({count}){
	var onChange = e => {
		var value = e.target.value;
		var number = parseInt(value);

		if (!isNaN(number)){

			changes.changeRetryCount(number);
		}

		e.preventDefault();
	};

	return (
		<div style={{marginTop: '25px'}}>Retry Count: <input id="retry-count" onChange={onChange} type="text" value={count}/></div>
	);
}


module.exports = RetryCount;