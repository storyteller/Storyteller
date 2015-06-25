var expect = require('chai').expect;
var _ = require('lodash');

var data = require('./hierarchy-data');
var Hierarchy = require('./../lib/stores/hierarchy');
var Postal = require('postal');
var Counts = require('./../lib/model/counts');
var Suite = require('./../lib/model/suite');

var QueueState = require('./../lib/stores/queue-state');
var ResultCache = require('./../lib/stores/result-cache');
var ResultsPresenter = require('./../lib/presentation/results-presenter');

function publishEngineMessage(topic, data){
	Postal.publish({
		channel: 'engine',
		topic: topic,
		data: data
	});
}

function hierarchyIsPublishedFromEngine(){
	var cloned = JSON.parse(JSON.stringify(data));

	publishEngineMessage('hierarchy-loaded', {hierarchy: cloned});
}

describe('ResultsPresenter', () => {
	var presenter = null;

	beforeEach(() => {
		Postal.reset();
		Hierarchy.reset();

		hierarchyIsPublishedFromEngine();

		presenter = new ResultsPresenter('embeds');

		presenter.loader = {
			buildComponents(spec){
				return [spec]
			}
		}

		presenter.view = {
			setState(state){
				this.state = state;
			}
		}
	});

	it('sets loading to true if the current spec is a header', () => {
		presenter.spec = {mode: 'header'};

		presenter.refreshEditor();

		expect(presenter.view.state).to.deep.equal({loading: true});
	});

	it('sets the main spec as the view spec if it is running', () => {
		QueueState.markRunning('embeds');

		expect(QueueState.stateFor('embeds')).to.equal('running');

		presenter.spec = {mode: 'full'};

		presenter.refreshEditor();

		expect(presenter.view.state.spec).to.equal(presenter.spec);
		expect(presenter.view.state.loading).to.false;
	});


});