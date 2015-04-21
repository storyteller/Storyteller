var Postal = require('postal');
var Specification = require('./specification');
var SpecificationStore = require('./specification-store');
var Hierarchy = require('./specs/hierarchy');
var changes = require('./change-commands');

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
		if (spec instanceof Specification || spec.id){
			this.id = spec.id;
			this.spec = spec;
		}
		else{
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

		if (!location.holder.isFirst){
			for (var key in location.holder){
				console.log(key + ' - ' + location.holder[key]);
			}
		}

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
		this.subscriptions.forEach(function(x){
			x.unsubscribe();
		});
	}

	moveFirst(){
		this.spec.navigator.moveFirst(); 
		this.refreshEditor();
	}

	moveLast(){
		this.spec.navigator.moveLast(); 
		this.refreshEditor();
	}

	moveNext(){
		if (this.spec.navigator.moveNext()) this.refreshEditor();
	}

	movePrevious(){
		if (this.spec.navigator.movePrevious()) this.refreshEditor();
	}


	refreshEditor(){
		if (this.spec){
			var counts = this.spec.changeStatus();

			this.view.setState({
				spec: this.spec,
				activeContainer: this.spec.activeHolder,
				components: this.loader.buildComponents(this.spec),
				outline: this.spec.outline(),
				loading: false,
				header: Hierarchy.findSpec(this.id),
				undoEnabled: (counts.applied > 0),
				redoEnabled: (counts.unapplied > 0),
				retryCount: this.spec['max-retries']
			});
		}
		else{
			this.view.setState({
				loading: true,
				undoEnabled: false,
				redoEnabled: false
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

	initializeData(){
		if (SpecificationStore.hasData(this.id)){
			this.spec = SpecificationStore.getData(this.id);
			this.refreshEditor();
		}
		else{
			this.view.setState({loading: true, spec: this.specHeader});
			SpecificationStore.requestData(this.id);
		}
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
			var navigator = this.spec.navigator;
			var location = navigator.location;
			if (location.holder){
				var next = location.holder.fixture.addAndSelect(location);
				navigator.replace(next);
				this.refreshEditor();
			}
		});

		this.subscribe('spec-results-changed', function(data){
			if (data.id == self.id){
				self.spec = SpecificationStore.getData(self.id);
				self.refreshEditor();
			}
		});

		this.subscribe('spec-data-invalidated', function(data){
			if (data.id == self.id){
				self.initializeData();
			}
		});

		this.subscribe('spec-data-available', function(data){
			if (data.id == self.id){
				self.initializeData();
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

	    this.subscribe('add-step', function(data, envelope) {
	        self.applyChange(data);
	        self.refreshEditor();
	    });

	    this.subscribe('remove-step', function(data, envelope) {
	        self.applyChange(data);
	        self.refreshEditor();
	    });

	    this.subscriptions.push(Postal.subscribe({
	    	channel: 'engine',
	    	topic: 'spec-body-saved',
	    	callback: function(data){
	    		self.specBodySaved(data);
	    	}
	    }));


	    if (this.spec){
			this.refreshEditor();
	    }
	    else{
	    	this.initializeData();
	    }



	}

	save(){
		applyOutstandingChanges();

		var message = {
			type: 'save-spec-body', 
			id: this.spec.id, 
			spec: this.spec.write(), 
			revision: this.spec.revision()
		};

		Postal.publish({
			channel: 'engine-request',
			topic: 'save-spec-body',
			data: message
		});

		this.view.setState({persisting: true});
	}

	run(){
		applyOutstandingChanges();
for (var key in this.spec){
	console.log(key);
}
		Postal.publish({
			channel: 'engine-request',
			topic: 'run-spec',
			data: {id: this.id, spec: this.spec.write()}
		});

		this.view.gotoResults();
	}

	selectCell(data){
		applyOutstandingChanges();

		this.spec.selectCell(data.step, data.cell);

		this.refreshEditor();
	}

	selectHolder(data){
		this.spec.selectHolder(data.holder);

		this.refreshEditor();
	}

	applyChange(data){
		this.spec.apply(data);
		this.refreshEditor();
	}

	undo(){
		this.spec.undo();
		this.refreshEditor();
	}

	redo(){
		this.spec.redo();
		this.refreshEditor();
	}

	specBodySaved(data){
		if (data.id != this.spec.id) return;

		this.spec.baselineAt(data.revision);

		this.view.setState({
			lastSaved: data.time,
			persisting: false
		});

	}



}





module.exports = EditorPresenter;