"use strict";

var uuid = require('node-uuid');
var Arg = require('./../model/arg');
var Cell = require('./../model/cell');

class Comment{
	constructor(data){
		this.id = data.id || uuid.v4();

		var cell = new Cell('text', 'Textual comment');
		cell.editor = 'comment';

		this.type = 'comment';
		this.arg = new Arg(cell, {cells: data}, this.id);
	}

	children(){
		return [];
	}

	clearResults(){}

	write(){
		return {text: this.arg.value, type: 'comment', id: this.id}
	}

	pack(){
		return null;
	}

	preview(loader){
		return this.editor(loader);
	}

	editor(loader){
		return loader.comment({step: this, arg: this.arg});
	}

	buildResults(loader){
		return this.editor(loader);
	}

	isHolder(){
		return false;
	}

	clearActiveState(){
		this.arg.active = false;
	}

	findByPath(path){
		if (path == 'text') return this.arg;

		return null;
	}

	selectFirst(){
		return {holder: this.parent, step: this, cell: this.arg};
	}

	selectLast(){
		return this.selectFirst();
	}

	selectNext(){
		return null;
	}

	selectPrevious(){
		return null;
	}
}



module.exports = Comment;