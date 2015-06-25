var Postal = require('postal');
var Specification = require('./../model/specification');
var Hierarchy = require('./../stores/hierarchy');
var changes = require('./../model/change-commands');

function applyOutstandingChanges(){
	// If any thing is open, pack it in now
	Postal.publish({
		channel: 'editor',
		topic: 'apply-changes',
		data: {}
	});
}

function parentLocation(location){
	var holder = location.holder;
	return {holder: holder.parent, step: holder};
}

class EditorPresenter{
	constructor(spec){
		if (spec.id){
			this.spec = spec;
			this.id = spec.id;
		}
		else {
			this.id = spec;
		}

		this.latched = false;
		this.subscriptions = [];
	}

	locationForReordering(){
		var location = this.spec.navigator.location;
		if (location.step == location.holder.adder){
			location = parentLocation(location);
		}

		while (!location.holder.isHolder()){
			location = parentLocation(location);
		}	

		return location;

	}

	reorderUp(){
		applyOutstandingChanges();

		var location = this.locationForReordering();

		if (location.step && !location.holder.isFirst(location.step)){
			var change = changes.moveUp(location.holder, location.step);
			this.applyChange(change);
		}
	}

	reorderDown(){
		applyOutstandingChanges();
		
		var location = this.locationForReordering();

		if (location.step && !location.holder.isLast(location.step)){
			var change = changes.moveDown(location.holder, location.step);
			this.applyChange(change);
		}
	}

	deactivate(){
		this.deactivated = true;
		applyOutstandingChanges();

		this.subscriptions.forEach(function(x){
			x.unsubscribe();
		});
	}

	moveFirst(){
		applyOutstandingChanges();
		this.spec.navigator.moveFirst(); 
		this.refreshEditor();
	}

	moveLast(){
		applyOutstandingChanges();
		this.spec.navigator.moveLast(); 
		this.refreshEditor();
	}

	moveNext(){
		applyOutstandingChanges();
		if (this.spec.navigator.moveNext()) this.refreshEditor();
	}

	movePrevious(){
		applyOutstandingChanges();
		if (this.spec.navigator.movePrevious()) this.refreshEditor();
	}


	refreshEditor(){
		if (this.deactivated) return;

		if (this.spec.mode == 'header'){
			this.view.setState({
				loading: this.spec.mode == 'header'
			});
		}
		else {
			this.view.setState({
				spec: this.spec,
				activeContainer: this.spec.activeHolder,
				components: this.loader.buildComponents(this.spec),
				outline: this.spec.outline(),
				loading: this.spec.mode == 'header',
				retryCount: this.spec['max-retries']
			});
		}


	}

	subscribe(topic, callback){
		this.subscriptions.push(Postal.subscribe({
			channel: 'editor',
			topic: topic,
			callback: callback
		}));
	}

	activate(loader, view){
		if (view == null || view == undefined){
			throw new Error('Must pass the view component here');
		}

		this.loader = loader;
		this.view = view;
		this.specHeader = Hierarchy.findSpec(this.id);

		var self = this;

		this.subscribe('go-preview', () => this.view.gotoPreview());
		this.subscribe('go-editing', () => this.view.gotoEditor());
		this.subscribe('go-results', () => this.view.gotoResults());

		this.subscribe('go-home', () => this.moveFirst());
		this.subscribe('go-end', () => this.moveLast());

		this.subscribe('go-next', () => this.moveNext());
		this.subscribe('go-previous', () => this.movePrevious());
		this.subscribe('run-spec', () => this.run());
		this.subscribe('save-spec', () => this.save());
		this.subscribe('undo', () => this.undo());
		this.subscribe('redo', () => this.redo());

		this.subscribe('reorder-up', () => this.reorderUp());
		this.subscribe('reorder-down', () => this.reorderDown());

		this.subscribe('add-item', () => {
			applyOutstandingChanges();

			var navigator = this.spec.navigator;
			var location = navigator.location;
			if (location.holder){
				var next = location.holder.fixture.addAndSelect(location);
				navigator.replace(next);
				this.refreshEditor();
			}
		});

		this.subscribe('spec-changed', function(data){
			if (data.id == self.id){
				self.spec = Hierarchy.findSpec(self.id);
				self.refreshEditor();
			}
		});

		this.subscribe('select-cell', function(data, envelope) {
			if (!data.step){
				return;
			}

	        self.selectCell(data);
	    });

	    this.subscribe('select-holder', function(data, envelope) {
			if (!data.holder){
				return;
			}

	        self.selectHolder(data);
	    });

	    this.subscribe('changes', function(data, envelope) {
	        self.applyChange(data);
	    });

	    this.subscriptions.push(Postal.subscribe({
	    	channel: 'engine',
	    	topic: 'spec-body-saved',
	    	callback: function(data){
	    		self.specBodySaved(data);
	    	}
	    }));

		if (!this.spec){
			this.spec = Hierarchy.findSpec(this.id);
		}

		if (this.spec.mode == 'header'){
			Hierarchy.requestData(this.id);
		}

		this.refreshEditor();

	}

	save(){
		applyOutstandingChanges();

		Hierarchy.saveSpecData(this.spec);

		this.view.setState({persisting: true});
	}

	run(){
		Hierarchy.runSpec(this.spec);

		this.view.gotoResults();
	}

	selectCell(data){
		applyOutstandingChanges();

		this.spec.selectCell(data.step, data.cell);

		this.refreshEditor();
	}

	selectHolder(data){
		applyOutstandingChanges();

		this.spec.selectHolder(data.holder);

		this.refreshEditor();
	}

	applyChange(data){
		this.spec.apply(data);
		this.refreshEditor();

        Postal.publish({
        	channel: 'editor',
        	topic: 'spec-edited',
        	data: {}
        });
	}

	undo(){
		this.spec.undo();
		this.refreshEditor();

        Postal.publish({
        	channel: 'editor',
        	topic: 'spec-edited',
        	data: {}
        });
	}

	redo(){
		this.spec.redo();
		this.refreshEditor();

        Postal.publish({
        	channel: 'editor',
        	topic: 'spec-edited',
        	data: {}
        });
	}

	specBodySaved(data){
		if (data.id != this.spec.id) return;

		this.view.setState({
			lastSaved: data.time,
			persisting: false
		});

	}



}





module.exports = EditorPresenter;