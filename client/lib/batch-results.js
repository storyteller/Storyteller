var FixtureLibrary = require('./fixture-library');
var Specification = require('./specification');
var ResultCache = require('./specs/result-cache');
var Counts = require('./specs/counts');
var _ = require('lodash');

function LifecycleSummary(name){
	this.name = name;
	this.total = 0;
}

class BatchResults{
	constructor(data){
		this.library = new FixtureLibrary(data.fixtures);

		this.specs = {};
		this.headers = {};
		this.succeeded = 0;
		this.failed = 0;
		this.total = data.records.length;

		this.title = data.title;
		this.suite = data.suite;
		this.time = data.time;
		this.success = data.success;

		this.acceptance = new LifecycleSummary('Acceptance');
		this.regression = new LifecycleSummary('Regression');

		this.records = data.records;

		data.records.forEach(record => {
			var id = record.specification.id;
			this.specs[id] = record;

			var header = new Specification(record.specification, this.library);
			ResultCache.record({id: record.specification.id, counts: record.results.counts, results: record.results});

			this[header.lifecycle.toLowerCase()].total++;

			if (header.status() == 'success'){
				this.succeeded++;
				record.status = 'success';
			}
			else{
				this.failed++;
				record.status = 'failed';
			}

			this.headers[id] = header;
		});
	}

	headerFor(id){
		return this.headers[id];
	}

	specFor(id){
		var record = this.specs[id];
		var spec = new Specification(record.specification, this.library);
		spec.readResults(record.results);

		return spec;
	}

	filter(lifecycle, status){
		if (lifecycle == 'any' && status == 'all'){
			return this.records;
		}

		var candidates = this.records;
		if (lifecycle != 'any'){
			candidates = _.filter(candidates, function(record){
				return record.specification.lifecycle.toLowerCase() == lifecycle;
			});
		}

		if (status != 'all'){
			candidates = _.filter(candidates, function(record){
				return record.status == status;
			});
		}

		return candidates;
	}


}



module.exports = BatchResults;