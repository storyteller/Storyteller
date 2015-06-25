function Counts(rights, wrongs, errors, invalids){
	if (arguments.length == 1){
		var data = arguments[0];

		this.rights = parseInt(data.rights);
		this.wrongs = parseInt(data.wrongs);
		this.errors = parseInt(data.errors);
		this.invalids = parseInt(data.invalids);
	}
	else {
		this.rights = parseInt(rights);
		this.wrongs = parseInt(wrongs);
		this.errors = parseInt(errors);
		this.invalids = parseInt(invalids);
	}


}

Counts.prototype.toString = function(){
	return this.rights + ' right, ' + this.wrongs + ' wrong, ' + this.errors + ' errors, ' + this.invalids + ' invalids';
}

Counts.prototype.anyResults = function(){
	return (this.rights + this.wrongs + this.errors + this.invalids) > 0;
}

Counts.prototype.success = function(){
	return (this.wrongs + this.errors + this.invalids) == 0;
}

module.exports = Counts;