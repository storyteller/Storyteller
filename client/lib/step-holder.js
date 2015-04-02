
var uuid = require('node-uuid');
var ArrayList = require('./array-list');
var _ = require('lodash');
var Comment = require('./comment');
var Adder = require('./adder');
var OutlineNode = require('./outline-node');

function StepHolder(id, fixture, addText){
	if (fixture == null) throw new Error('Missing argument for "fixture"');

	var self = this;

	self.id = id || uuid.v4();
	self.fixture = fixture;

	self.steps = new ArrayList();
	self.active = false;
	self.adder = new Adder(self, addText);

	self.contextualControl = function(loader){
		return this.fixture.contextualControl(this, loader);
	}

	self.addStep = function(step){
		step.parent = self;

		self.steps.add(step);
	}

	self.isHolder = function(){
		return true;
	}

	self.removeStep = function(step){
		var position = self.steps.indexOf(step);
		self.steps.removeAt(position);

		return position;
	}

	self.insertStep = function(index, step){
		step.parent = self;

		self.steps.insertAt(index, step);
	}

	self.clear = function(){
		self.steps = new ArrayList();
	}

	self.packSteps = function(){
		return _.map(self.steps, function(step){
			return step.pack();
		}).filter(function(x){
			return x != null;
		});
	}

	self.writeSteps = function(){
		return _.map(self.steps, function(step){
			return step.write();
		});
	}

	self.readSteps = function(data){
		if (!data.steps){
			return;
		}

		data.steps.forEach(function(x){
			var step = self.buildStep(x);
			self.addStep(step);
		});
	}


	self.buildStep = function(data){
		if (data.type == 'comment') return new Comment(data);

		var grammar = this.fixture.find(data.key);
		if (!grammar){
			throw new Error('Unable to find grammar ' + data.key + ' in fixture ' + this.fixture.key);
		}

		var step = grammar.buildStep(data);
		step.grammar = grammar;


		return step;
	}

	self.buildComponents = function(func){
		return _.map(self.steps, func);
	}

	self.findByPath = function(path){
		if ( !(path instanceof Array)){
			path = path.split('.');
		}

		if (path.length == 0) return null;

		var next = path.shift();
		var position = parseInt(next);

		if (position >= this.steps.length){
			throw new RangeError('Index is out of range.');
		}

		var child = this.steps[position];
		if (path.length == 0){
			return child;
		}

		return child.findByPath(path);
	}

	self.clearActiveState = function(){
		this.active = false;
		this.steps.forEach(function(x){
			x.clearActiveState();
		});
	}

	self.outline = function(){
		return new OutlineNode(this);
	}

	self.selectFirst = function(){
		if (this.steps.length == 0) return {holder: this, step: this.adder, cell: null};

		return this.steps[0].selectFirst();
	}

	self.selectNext = function(location){
		if (location.holder != this) return null;

		if (location.step == this.adder) return null;

		if (location.step == null) return this.selectFirst();

		if (location.step == _.last(this.steps)) return null;

		var index = _.indexOf(this.steps, location.step);

		return this.steps[index + 1].selectFirst();
	}
}

module.exports = StepHolder;