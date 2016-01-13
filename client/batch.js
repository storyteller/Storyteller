var BatchReport = require('./components/batching/batch-report');


var _ = require('lodash');

// Assumes that there is a global called BatchData

var dataElement = document.getElementById('batch-data');
var data = dataElement.innerHTML;

var batchData = JSON.parse(_.unescape(data));

BatchReport(batchData);