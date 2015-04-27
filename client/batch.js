var BatchReport = require('./components/batching/batch-report');
var React = require('react');

// Assumes that there is a global called BatchData

var dataElement = document.getElementById('batch-data');
var batchData = JSON.parse(dataElement.innerHTML);

React.render(BatchReport({data: batchData}), document.getElementById('main'));

