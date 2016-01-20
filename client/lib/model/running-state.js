var Immutable = require('immutable');
var Counts = require('./counts');

class RunningState extends Immutable.Record({id: null, status: 'none'}){
    constructor(id){
        super({id: id, status: 'none'});
    }
    
    updateCounts(progress){
        var counts = new Counts(progress.counts);
        var newStatus = counts.status();

        if (this.status == newStatus) return this;
        
        return this.set('status', newStatus);
    }
}

module.exports = RunningState;