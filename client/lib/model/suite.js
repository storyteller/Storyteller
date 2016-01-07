"use strict";

var _ = require('lodash');

class Suite{
	constructor(data, parent){
		this.name = data.name;
		this.path = data.path;
		this.parent = parent;
		this.isExpanded = true;

		this.isHierarchy = parent == null || parent == undefined;

		this.suites = (data.suites || []).map(x => new Suite(x, this));
		this.specs = data.specs || [];
	}

	hasSpec(id){
		return this.specs.includes(id);
	}

	childSuite(name){
		return _.find(this.suites, x => x.name == name);
	}

	hasAnySpecs(){
		return this.specs.length > 0 || _.any(this.suites, s => s.hasAnySpecs());
	}

	filter(filter, specs){
		var filtered = new Suite(this, null);
		filtered.isHierarchy = this.isHierarchy;
		filtered.specs = this.specs.filter(id => filter(specs.get(id))); 
		filtered.suites = this.suites
			.map(s => s.filter(filter))
			.filter(x => x.hasAnySpecs());

		return filtered;
	}

	summary(specDict){
		var specs = this.allSpecs().map(x => specDict.get(x));

		var totals = {
			total: specs.length,
			acceptance: specs.filter(x => {
				return x.lifecycle == 'Acceptance';
			}).length,

			regression: specs.filter(x => {
				return x.lifecycle == 'Regression';
			}).length,

			success: specs.filter(x => {
				return x.status() == 'success';
			}).length,

			failed: specs.filter(x => {
				return x.status() == 'failed';
			}).length,

			none: specs.filter(x => {
				return x.status() == 'none';
			}).length
		}

		return totals;
	}


	allSpecs(){
		var specs = [];
		var gather = function(suite){
			specs.push(suite.specs);
			suite.suites.forEach(s => gather(s));
		}

		gather(this);

		return _.flatten(specs);
	}

	icon(specDict){
		if (this.specs.length == 0 && this.suites.length == 0) return 'none';

		var specs = this.allSpecs();

		var running = _.find(specs, x => specDict.get(x).status() == 'running');
		if (running){
			return running.icon();
		}

		var firstFailure = _.find(specs, x => specDict.get(x).status() == 'failed');
		if (firstFailure) return 'failed';

		var firstSuccess = _.find(specs, x => specDict.get(x).status() == 'success') ;
		if (firstSuccess) return 'success';

		return 'none';
	}


	allSuites(){
		var suites = [];
		var gather = function(suite){
			suites.push(suite.suites);
			suite.suites.forEach(s => gather(s));
		}

		gather(this);

		return _.flatten(suites);
	}
}



module.exports = Suite;