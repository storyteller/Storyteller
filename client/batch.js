var BatchReport = require('./components/batching/batch-report');
var React = require('react');
var _ = require('lodash');

// Assumes that there is a global called BatchData

var dataElement = document.getElementById('batch-data');
var data = dataElement.innerHTML;

var batchData = JSON.parse(_.unescape(data));

React.render(BatchReport({data: batchData}), document.getElementById('main'));

