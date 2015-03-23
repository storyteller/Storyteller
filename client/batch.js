var BatchReport = require('./components/batching/batch-report');
var React = require('react');

// Assumes that there is a global called BatchData
React.render(BatchReport({data: BatchData}), document.body);

