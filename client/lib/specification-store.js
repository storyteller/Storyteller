var Postal = require('postal');
var FixtureLibrary = require('./fixture-library');
var Specification = require('./specification');
var _ = require('lodash');


function SpecificationStore(){
	this.library = null;
	this.subscriptions = [];

	var self = this;

	self.data = {};

	self.hasData = function(id){
		return self.data.hasOwnProperty(id);
	}

	self.getData = function(id){
		if (!self.hasData(id)) return null;

		return self.data[id];
	}

	self.storeData = function(id, data){
		var spec = new Specification(data, self.library);
		self.data[id] = spec;

		Postal.publish({
			channel: 'editor',
			topic: 'spec-data-available',
			data: {id: id}
		});
	}

	self.readResults = function(id, results){
		if (self.hasData(id)){
			var spec = self.getData(id);
			spec.readResults(results);
			Postal.publish({
				channel: 'editor',
				topic: 'spec-results-changed',
				data: {id: id}
			});
		}
	}

	self.requestData = function(id){
		Postal.publish({
			channel: 'engine-request',
			topic: 'spec-data-requested',
			data: {
				type: 'spec-data-requested',
				id: id
			}
		})

	}

	self.clearData = function(){
		_.keys(self.data).forEach(id => self.removeData(id));
	}

	self.removeData = function(id){
		delete self.data[id];
		Postal.publish({
			channel: 'editor',
			topic: 'spec-data-invalidated',
			data: {id: id}
		});
	}

	self.subscribe = function(channel, topic, callback){
		this.subscriptions.push(Postal.subscribe({
			channel: channel,
			topic: topic,
			callback: callback
		}));
	}

	self.setLibrary = function(library){
		self.library = library;

		for (var key in self.data){
			var old = self.data[key];

			var specData = old.write();
			var newSpec = new Specification(specData, self.library);
			self.data[key] = newSpec;
			Postal.publish({
				channel: 'editor',
				topic: 'spec-data-available',
				data: {id: key}
			});
		}

		Postal.publish({
			channel: 'explorer',
			topic: 'fixtures-loaded',
			data: {}
		});
	}

	self.recordResult = function(data){
		if (self.hasData(data.spec)){
			var spec = self.getData(data.spec);
			var step = spec.find(data.id);

			if (!step){
				throw new Error('Unable to find a step with id ' + data.id + ' for spec ' + data.spec);
			}

			step.logResult(data);

			Postal.publish({
				channel: 'editor',
				topic: 'spec-results-changed',
				data: {id: data.spec}
			});
		}
	}

	self.reset = function(){
		self.data = {};

		self.subscriptions.forEach(x => x.unsubscribe());


		self.subscribe('engine', 'step-result', self.recordResult);

		self.subscribe('engine', 'set-verification-result', self.recordResult);

		self.subscribe('engine', 'system-recycled', function(data){
			self.systemRecycled = data;
			self.setLibrary(new FixtureLibrary(data.fixtures));
		});

		self.subscribe('engine', 'spec-data', function(data){
			self.storeData(data.id, data.data);
		});

		self.subscribe('engine', 'spec-changed', function(data){
			if (self.hasData(data.id)){
				self.removeData(data.id);
			}
		});

		self.subscribe('engine', 'hierarchy-loaded', function(data){
			self.clearData();
		});

		self.subscribe('engine', 'spec-cancelled', function(data){
			alert('Got ' + JSON.stringify(data));
		});

	}

	self.errorCount = function(){
		if (self.library == null) return 0;

		return self.library.errorCount();
	}

	self.errorReport = function(){
		if (self.library == null) return [];

		return self.library.errorReport();
	}

	self.fixtures = function(){
		return self.library;
	}
}




module.exports = new SpecificationStore();