var Postal = require('postal');
var Specification = require('./specification');
var ResultCache = require('./specs/result-cache');
var QueueState = require('./specs/queue-state');
var Hierarchy = require('./specs/hierarchy');
var EditorPresenter = require('./editor-presenter');

class ResultsPresenter extends EditorPresenter{
	constructor(id){
		super(id);
	}

	refreshEditor(){

		if (this.spec.mode == 'header'){
			this.view.setState({
				loading: true
			});
		}
		else {
			var spec = this.spec;

			if (QueueState.stateFor(this.id) != 'running'){
				var completed = ResultCache.lastResultFor(this.id);

				if (completed == null){
					this.view.setState({
						loading: false,
						spec: spec,
						components: this.loader.noResults()
					});

					return;
				}

				spec = new Specification(completed.data, Hierarchy.fixtures());
				spec.readResults(completed.results);
			}

			this.view.setState({
				loading: false,
				spec: spec,
				components: this.loader.buildComponents(spec),
			});
		}
	}

}

module.exports = ResultsPresenter;