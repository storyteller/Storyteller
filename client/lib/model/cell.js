module.exports = function(key, description){
	this.key = key;
	this.default = null;
	this.description = description || key;
	this.editor = 'text';
	this.options = [];
	this.size = null;

	this.isCell = true;

	return this;
}