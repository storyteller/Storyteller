var expect = require('chai').expect;
var StubLoader = require('./stub-loader');
var EditorPresenter = require('./../lib/editor-presenter');
var Specification = require('./../lib/specification');
var ObjectMother = require('./object-mother');
var changes = require('./../lib/change-commands');
var Postal = require('postal');
var _ = require('lodash');
var SpecificationStore = require('./../lib/specification-store');
var uuid = require('node-uuid');

var listener = {
	events: [],

	clear: function(){
		this.events = [];
	},

	append: function(data){
		//console.log(JSON.stringify(data));
		this.events.push(data);
		
	}
};



function findPublishedMessage(topic){
	return _.find(listener.events, function(x){
		return x.topic == topic;
	});
}


function FakeView(){
	this.state = {};

	this.setState = function(o){
		_.assign(this.state, o);
	}
}

var loader = new StubLoader();

describe('EditorPresenter', function(){
	var view;

	beforeEach(function(){
		Postal.reset();
		SpecificationStore.reset();
		SpecificationStore.setLibrary(ObjectMother.library());

		Postal.subscribe({
		    channel  : "editor",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		    	data.channel = 'editor';
		        listener.append(data);
		    }
		});

		Postal.subscribe({
		    channel  : "engine-request",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		    	data.channel = 'engine-request';
		        listener.append(data);
		    }
		});


		view = new FakeView();
	})

	describe('when refreshing the editor with data', () => {
		var presenter = new EditorPresenter('spec1');

		beforeEach(function(){
			var specData = ObjectMother.specData();
			specData['max-retries'] = 3;
			SpecificationStore.storeData('spec1', specData);
			view = new FakeView();
			presenter.activate(loader, view);
			

		});

		afterEach(() => {
			presenter.deactivate();
		});

		it('should write the retryCount to the view', () => {
			expect(view.state.retryCount).to.equal(3);
		});
	});

	describe('when activating a new editor that has no data', function(){
		var presenter = new EditorPresenter('spec1');

		beforeEach(function(){
			view = new FakeView();
			presenter.activate(loader, view);
			presenter.deactivate();
		});

		it('should tell the view that it is loading', function(){
			expect(view.state.loading).to.be.true;
		});

		// smelly coupling to SpecificationStore, but I'll allow it
		it('should broadcast a message for the data request', function(){
			var message = findPublishedMessage('spec-data-requested');
			expect(message.id).to.equal('spec1');
			expect(message.channel).to.equal('engine-request');
		});
	});

	describe('when activating a new editor and the data is known', function(){
		var presenter = new EditorPresenter('spec1');
		var wasRefreshed = false;
		var ownedSpec = null;
		var buttonsEnabled = false;

		presenter.refreshEditor = function(){
			wasRefreshed = true;
			ownedSpec = this.spec;
			buttonsEnabled = true;

		}


		beforeEach(function(){
			SpecificationStore.storeData('spec1', ObjectMother.specData());
			view = new FakeView();
			presenter.activate(loader, view);
			presenter.deactivate();
		});

		it('should get the spec into itself', function(){
			expect(presenter.spec).to.equal(SpecificationStore.getData('spec1'));
		});

		it('should refresh the editor immediately', function(){
			expect(ownedSpec).to.equal(presenter.spec);
			expect(wasRefreshed).to.be.true;
		});

		it('should enable the undo/redo buttons', function(){
			expect(buttonsEnabled).to.be.true;
		});
	});

	describe('when data becomes available for the first time', function(){
		var presenter = new EditorPresenter('spec1');
		var wasRefreshed = false;
		var ownedSpec = null;
		var buttonsEnabled = false;

		presenter.refreshEditor = function(){
			wasRefreshed = true;
			ownedSpec = this.spec;
			buttonsEnabled = true;
		}


		beforeEach(function(){
			
			view = new FakeView();
			presenter.activate(loader, view);

			SpecificationStore.storeData('spec1', ObjectMother.specData());

			Postal.publish({
				channel: 'editor', 
				topic: 'spec-data-available', 
				data: {id: 'spec1'}
			});
		});

		it('should get the spec into itself', function(){
			expect(presenter.spec).to.equal(SpecificationStore.getData('spec1'));
		});

		it('should refresh the editor immediately', function(){
			expect(ownedSpec).to.equal(presenter.spec);
			expect(wasRefreshed).to.be.true;
		});

		it('should enable the undo/redo buttons', function(){
			expect(buttonsEnabled).to.be.true;
		});
	});

	describe('when data comes available, but does not match the spec', function(){
		var presenter = new EditorPresenter('spec1');
		var wasRefreshed = false;
		var buttonsEnabled = false;

		presenter.refreshEditor = function(){
			wasRefreshed = true;
		}

		presenter.enableUndoButtons = function(){
			buttonsEnabled = true;
		}

		beforeEach(function(){
			
			view = new FakeView();
			presenter.activate(loader, view);

			SpecificationStore.storeData('spec2', ObjectMother.specData());

			Postal.publish({
				channel: 'editor', 
				topic: 'spec-data-available', 
				data: {id: 'spec2'}
			});
		});

		it('should not have updated the view', function(){
			expect(wasRefreshed).to.be.false;
			expect(buttonsEnabled).to.be.false;
		});
	});

	describe('when responding to spec-data-invalidated that matches', function(){
		var presenter = new EditorPresenter('spec1');
		var wasInitializedAgain = false;

		beforeEach(function(){
			view = new FakeView();
			presenter.activate(loader, view);

			SpecificationStore.storeData('spec1', ObjectMother.specData());

			presenter.initializeData = function(){
				wasInitializedAgain = true;
			}

			Postal.publish({
				channel: 'editor', 
				topic: 'spec-data-invalidated',
				data: {id: 'spec1'}
			});
		});

		it('should intitialize data all over again', function(){
			expect(wasInitializedAgain).to.be.true;
		});


	});

	describe('when responding to spec-data-invalidated that does not match', function(){
		var presenter = new EditorPresenter('spec1');
		var wasInitializedAgain = false;

		beforeEach(function(){
			view = new FakeView();
			presenter.activate(loader, view);

			SpecificationStore.storeData('spec1', ObjectMother.specData());

			presenter.initializeData = function(){
				wasInitializedAgain = true;
			}

			Postal.publish({
				channel: 'editor', 
				topic: 'spec-data-invalidated',
				data: {id: 'different'}
			});
		});

		it('should NOT intitialize data all over again', function(){
			expect(wasInitializedAgain).to.be.false;
		});


	});

	describe('when responding to spec-results-changed that matches', function(){
		var spec = null;
		var presenter = null;
		var shell = null;
		var view = null;
		var wasEditorRefreshed = false;

		beforeEach(function(){
			spec = ObjectMother.specification();
			spec.id = 'foo';

			presenter = new EditorPresenter(spec);
			view = new FakeView();
			presenter.activate(loader, view);

			wasEditorRefreshed = false;
			presenter.refreshEditor = function(){
				wasEditorRefreshed = true;
			}

			Postal.publish({
				channel: 'editor',
				topic: 'spec-results-changed',
				data: {id: spec.id}
			});
		});

		it('should refresh the editor', function(){
			expect(wasEditorRefreshed).to.be.true;
		});
	});

	describe('when responding to a cell selected from the initial state', function(){
		// var identifier = {step: this.props.id, cell: this.props.cell.key};

		var spec = null;
		var presenter = null;
		var shell = null;
		var view = null;

		beforeEach(function(){
			spec = ObjectMother.specification();
			spec.id = 'foo';

			presenter = new EditorPresenter(spec);
			view = new FakeView();
			presenter.activate(loader, view);

			var stepId = spec.steps[0].steps[1].id;

			presenter.selectCell({step: stepId, cell: 'x'});
		});

		it('should make the right cell active', function(){
			expect(spec.steps[0].steps[1].args.find('x').active).to.be.true;
		});

		it('should make the section holding that cell active', function(){
			expect(spec.steps[0].active).to.equal(true);
		});

		it('should make the specfication itself not active', function(){
			expect(spec.active).to.be.false;
		});

		it('should update the editor state', function(){
			expect(view.state.activeContainer).to.equal(spec.steps[0]);
		});
	});

	describe('when responding to a cell selected from the initial state via Postal', function(){
		// var identifier = {step: this.props.id, cell: this.props.cell.key};

		var spec = null;
		var presenter = null;
		var view = null;

		beforeEach(function(){
			spec = ObjectMother.specification();
			spec.path = 'foo/bar';

			view = new FakeView();
			presenter = new EditorPresenter(spec);
			presenter.activate(loader, view);

			var stepId = spec.steps[0].steps[1].id;

			Postal.publish({
				channel: 'editor',
				topic: 'select-cell',
				data: {step: stepId, cell: 'x'}
			})
		});

		it('should make the right cell active', function(){
			expect(spec.steps[0].steps[1].args.find('x').active).to.be.true;
		});

		it('should make the section holding that cell active', function(){
			expect(spec.steps[0].active).to.equal(true);
		});

		it('should make the specfication itself not active', function(){
			expect(spec.active).to.be.false;
		});

		it('should update the editor state', function(){
			expect(view.state.activeContainer).to.equal(spec.steps[0]);
		});
	});

	describe('when responding to a cell selected that is different', function(){
		// var identifier = {step: this.props.id, cell: this.props.cell.key};

		var spec = null;
		var presenter = null;
		var view = null;

		beforeEach(function(){
			spec = ObjectMother.specification();
			spec.path = 'foo/bar';

			view = new FakeView();
			presenter = new EditorPresenter(spec);
			presenter.activate(loader, view);

			var stepId = spec.steps[0].steps[1].id;

			presenter.selectCell({step: spec.steps[0].steps[1].id, cell: 'x'});
			presenter.selectCell({step: spec.steps[0].steps[4].id, cell: 'result'});
		});

		it('should make the right cell active', function(){
			expect(spec.steps[0].steps[4].args.find('result').active).to.be.true;
		});

		it('should make the previously selected cell be inactive', function(){
			expect(spec.steps[0].steps[1].args.find('x').editing).to.be.false;
		});

		it('should make the section holding that cell active', function(){
			expect(spec.steps[0].active).to.equal(true);
		});

		it('should update the editor state', function(){
			expect(view.state.activeContainer).to.equal(spec.steps[0]);
		});
	});

	describe('when handling a spec change directly', function(){
		var spec = null;
		var presenter = null;
		var view = null;

		beforeEach(function(){
			spec = ObjectMother.specification();
			spec.path = 'foo/bar';

			view = new FakeView();
			presenter = new EditorPresenter(spec);
			presenter.activate(loader, view);

			var stepId = spec.steps[0].steps[1].id;

			presenter.applyChange(changes.cellValue(stepId, 'x', 11));

			presenter.deactivate();
		});

		it('should update the undo/redo button states', function(){
			expect(view.state.undoEnabled).to.be.true;
			expect(view.state.redoEnabled).to.be.false;
		});

		it('should apply the change to the spec itself', function(){
			expect(spec.steps[0].steps[1].findValue('x')).to.equal(11);
		});
	});

	describe('when handling multiple spec changes', function(){
		var spec = null;
		var presenter = null;
		var view = null;
		var step = null;

		beforeEach(function(){
			spec = ObjectMother.specification();
			spec.path = 'foo/bar';

			view = new FakeView();
			presenter = new EditorPresenter(spec);
			presenter.activate(loader, view);

			step = spec.steps[0].steps[1];


			var showQueue = function(){
				for (var i = 0; i < spec.undoList.length; i++){
					console.log((i + 1).toString() + ": " + JSON.stringify(spec.undoList[i]));
				}

				console.log('');
				console.log('');
			}

			presenter.applyChange(changes.cellValue(step.id, 'x', 11));
			presenter.applyChange(changes.cellValue(step.id, 'x', 12));	
			presenter.applyChange(changes.cellValue(step.id, 'x', 13));
			expect(presenter.spec.changeStatus()).to.deep.equal({applied: 3, unapplied: 0});
		});

		afterEach(function(){
			presenter.deactivate();
		});

		it('should update the undo/redo button states', function(){
			expect(view.state.undoEnabled).to.be.true;
			expect(view.state.redoEnabled).to.be.false;

		});

		it('can apply an undo', function(){
			presenter.undo();

			expect(view.state.undoEnabled).to.be.true;
			expect(view.state.redoEnabled).to.be.true;


			expect(step.findValue('x')).to.equal(12);
		});

		it('undos all queued changes', function(){
			presenter.undo();
			presenter.undo();
			presenter.undo();

			expect(view.state.undoEnabled).to.be.false;
			expect(view.state.redoEnabled).to.be.true;
			

			expect(presenter.spec.changeStatus()).to.deep.equal({applied: 0, unapplied: 3});
			expect(step.findValue('x')).to.equal(5);

		});

		it('can undo and redo changes', function(){
			presenter.undo();
			presenter.undo();

			presenter.redo();

			expect(view.state.undoEnabled).to.be.true;
			expect(view.state.redoEnabled).to.be.true;

			expect(step.findValue('x')).to.equal(12);
		});

	});

	describe('when handling a spec change from Postal subscription', function(){
		var spec = null;
		var presenter = null;
		var view = null;

		before(function(){
			spec = ObjectMother.specification();
			spec.path = 'foo/bar';

			view = new FakeView();
			presenter = new EditorPresenter(spec);
			presenter.activate(loader, view);

			var stepId = spec.steps[0].steps[1].id;

			Postal.publish({
				channel: 'editor',
				topic: 'changes',
				data: changes.cellValue(stepId, 'x', 11)
			});
		});

		after(function(){
			presenter.deactivate();
		});

		it('should update the undo/redo button states', function(){
			expect(view.state.undoEnabled).to.be.true;
			expect(view.state.redoEnabled).to.be.false;
		});

		it('should apply the change to the spec itself', function(){
			expect(spec.steps[0].steps[1].findValue('x')).to.equal(11);
		});
	});

	describe('when saving a spec', function(){
		var spec = null;
		var presenter = null;
		var view = null;
		var theWrittenData = {};
		var message;

		beforeEach(function(){
			spec = {
				write: function(){
					return theWrittenData;
				},

				revision: function(){
					return 'abc'
				},

				id: uuid.v4()
			}

			view = new FakeView();
			presenter = new EditorPresenter(spec);
			presenter.refreshEditor = function(){}

			presenter.activate(loader, view);

			presenter.spec = spec;

			presenter.save();

			message = findPublishedMessage('save-spec-body');
		});

		afterEach(function(){
			presenter.deactivate();
		});

		it('should tag the message to the spec', function(){
			expect(message.id).to.equal(spec.id);
		});

		it('should send the written spec data', function(){
			expect(message.spec).to.equal(theWrittenData);
		});

		it('should send the current revision', function(){
			expect(message.revision).to.equal(spec.revision());
		});

		it('should tell the view that it is trying to save', function(){
			expect(view.state.persisting).to.be.true;
		});
	});

	describe('when receiving the spec-body-saved message', function(){
		var spec = null;
		var presenter = null;
		var view = null;
		var theWrittenData = {};
		var message;
		var undoButtonsCalculated = false;

		beforeEach(function(){
			spec = {
				write: function(){
					return theWrittenData;
				},

				revision: function(){
					return 'abc'
				},

				id: uuid.v4(),

				baselineAt: function(rev){
					this.baselinedRev = rev;
				}
			}

			view = new FakeView();
			presenter = new EditorPresenter(spec);
			
			presenter.refreshEditor = function(){
				undoButtonsCalculated = true;
			}
			presenter.activate(loader, view);

			presenter.spec = spec;

			Postal.publish({
				channel: 'engine',
				topic: 'spec-body-saved',
				data: {id: spec.id, revision: 'abcd', time: '5 minutes ago'}
			})
		});

		afterEach(function(){
			presenter.deactivate();
		});

		it('should recalculate the undo button state', function(){
			expect(undoButtonsCalculated).to.be.true;
		});

		it('should tell the view that it is no longer being persisted', function(){
			expect(view.state.persisting).to.be.false;
		});

		it('should tell the view when last saved', function(){
			expect(view.state.lastSaved).to.equal('5 minutes ago');
		});

		it('should baseline the spec', function(){
			expect(spec.baselinedRev).to.equal('abcd');
		});
	});

	describe('when running a spec from the editor', function(){
		var spec = null;
		var presenter = null;
		var view = null;
		var theWrittenData = {};
		var message;
		var navigatedToResults = false;

		beforeEach(function(){
			spec = {
				write: function(){
					return theWrittenData;
				},

				revision: function(){
					return 'abc'
				},

				id: uuid.v4(),

				baselineAt: function(rev){
					this.baselinedRev = rev;
				},

				changeStatus: function(){
					return {applied: 0, unapplied: 0}
				},

				outline: function(){
					return {};
				}
			}

			view = new FakeView();
			view.gotoResults = function(){
				navigatedToResults = true;
			}


			presenter = new EditorPresenter(spec);
			presenter.activate(loader, view);

			presenter.spec = spec;

			presenter.run();

			message = findPublishedMessage('run-spec');
		});

		afterEach(function(){
			presenter.deactivate();
		});


		it('should send the message with the id and packed data and navigate to the results', function(){
			console.log(spec.id);

			expect(message).to.deep.equal({
				id: spec.id,
				spec: theWrittenData,
				channel: 'engine-request',
				topic: 'run-spec'
			});

			expect(navigatedToResults).to.be.true;
		});
	});
});
