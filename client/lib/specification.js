var StepHolder = require('./step-holder');
var _ = require('lodash');
var uuid = require('node-uuid');

function Specification(data, library){
	if (data == undefined || data == null){
		throw new Error('Null data being passed into Specification');
	}

	StepHolder.call(this, data.id, library);

	this.title = data.title;
	this.byId = {};
	this.type = 'specification';
	this.results = {};
	this.active = false;


	this.children = function(){
		return this.steps;
	}

	this.grammars = function(){
		return _.sortBy(library.fixtures, function(x){
			return x.title;
		});
	}

	this.write = function(){
		return {
			title: this.title,
			steps: this.writeSteps(),
			id: this.id
		}
	}

	this.pack = function(){
		return {
			id: this.id,
			steps: this.packSteps()
		}
	}

	this.previews = function(loader){
		return this.buildComponents(x => x.preview(loader));
	}

	this.editors = function(loader){
		return this.buildComponents(x => x.editor(loader));
	}

	this.buildResults = function(loader){
		var elements = [];

		if (this.results.timeout){
			elements.push(loader.errorBox({title: 'Timed out!', error: this.results.timeout.error}));
		}

		if (this.results.engine){
			elements.push(loader.errorBox({title: 'Engine Failure', error: this.results.engine.error}));
		}

		// TODO -- use _.flatten some day
		this.steps.forEach(step => {
			var element = step.buildResults(loader);
			if (element instanceof Array){
				elements = elements.concat(element);
			}
			else{
				elements.push(element);
			}
		});

		if (this.results.performance){
			elements.push(loader.perfTable({records: this.results.performance}));
		}

		var logs = (this.results.logging || []).map(x => loader.logComponent(x));

		return elements.concat(logs);
	}


	this.find = function(id){
		if (this.byId.hasOwnProperty(id)){
			return this.byId[id];
		}

		return null;
	}

	this.undoList = [];
	this.redoList = [];

	this.apply = function(change){
		change.revision = uuid.v4();
		change.apply(this);
		this.undoList.push(change);

		this.redoList = [];
	}

	this.revision = function(){
		if (this.undoList.length == 0) return null;

		return this.undoList[this.undoList.length - 1].revision;
	}

	this.baselineAt = function(revision){
		var index = this.undoList.findIndex(change => {
			return change.revision == revision;
		});

		if (index > -1){
			this.undoList = this.undoList.slice(index + 1);
		}
	}

	this.changeStatus = function(){
		return {applied: this.undoList.length, unapplied: this.redoList.length};
	}

	this.undo = function(){
		if (this.undoList.length == 0) return;

		var last = this.undoList.pop();
		last.unapply(this);

		this.redoList.push(last);
	}

	this.redo = function(){
		if (this.redoList.length == 0) return;

		var last = this.redoList.pop();
		last.apply(this);

		this.undoList.push(last);
	}

	var removeStepBase = this.removeStep;

	this.removeStep = function(step){
		delete this.byId[step.id];
		return removeStepBase(step);
	}



	this.storeStep = function(step){
		this.byId[step.id] = step;
	}

	this.readSteps(data);

	var self = this;
	var readHolder = function(holder){
		self.byId[holder.id] = holder;

		if (!holder.children)
			return;

		var children = holder.children();

		for (var i = 0; i < children.length; i++){
			readHolder(children[i]);
		}
	}

	var _activeCell = null;
	var _activeHolder = null;

	var replaceHolder = function(value){
		if (_activeHolder){
			if (_activeHolder == value) return false;

			_activeHolder.active = false;
		}

		value.active = true;
		_activeHolder = value;

		return true;
	}

	self.selectCell = function(id, cell){
		var step = this.find(id);
		if (!step){
			throw new Error('Unable to find a step with id: ' + id);
		}

		var arg = step.findByPath(cell);
		if (!arg){
			throw new Error("Unable to find a cell named " + cell + '" for id: ' + id);
		}

		this.activeCell = arg;
		replaceHolder(step.parent);
	}

	self.selectHolder = function(id){
		var holder = this.find(id);

		if (!holder){
			throw new Error('Unable to find the specified holder with id: ' + id);
		}

		this.activeHolder = holder;
	}

	self.logResult = function(result){
		self.results[result.position] = result;
	}

	self.clearResults = function(){
		self.results = {};
		self.steps.forEach(s => s.clearResults());
	}

	self.readResults = function(results){
		self.clearResults();

		self.results.logging = results.logging;
		self.results.performance = results.performance;

		results.results.forEach(x => {
			var child = self.find(x.id);
			if (child){
				child.logResult(x);
			}
		});
	}

	Object.defineProperty(self, 'activeCell', {
		enumerable: true,
		writeable: true,
		get: function(){
			return _activeCell;
		},
		set: function(value){
			if (_activeCell){
				if (_activeCell == value) return;

				_activeCell.active = false;
			}

			value.active = true;
			_activeCell = value;
		}
	});

	Object.defineProperty(self, 'activeHolder', {
		enumerable: true,
		writeable: true,
		get: function(){
			return _activeHolder;
		},
		set: function(value){
			if (replaceHolder(value)){
				if (_activeCell){
					_activeCell.active = false;
					_activeCell = null;
				}
			}

		}	
	});

	readHolder(this);

	// shouldn't be necessary, but still
	this.clearActiveState();
	var lastHolder = _.findLast(this.steps, function(x){
		return x.isHolder();
	});

	if (lastHolder){
		lastHolder.active = true;
		_activeHolder = lastHolder;
	}
	else {
		_activeHolder = this;
		this.active = true;
	}


}



module.exports = Specification;