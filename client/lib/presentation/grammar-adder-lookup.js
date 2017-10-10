var Postal = require('postal');
var CommentGrammar = require('./../grammars/comment-grammar');
var changes = require('./../model/change-commands');
var Fuse = require('fuse.js');

class Option {
	constructor(holder, grammar){
		this.title = grammar.title;
		this.lower = this.title.toLowerCase();
		this.key = grammar.key;
	}

	select(){
		var step = this.grammar.newStep();
		changes.stepAdded(this.holder, step);
	}
}



class GrammarLookup {
	constructor(holder){
		var grammars = holder.grammars();
		this.options = [new Option(holder, CommentGrammar)]
			.concat(grammars.map(x => new Option(holder, x)));

		
		this.grammars = {}
		for (var i = 0; i < grammars.length; i++){
			var grammar = grammars[i];
			console.log('grammar is ' + grammar);
			this.grammars[grammar.key] = grammar;
		}

		this.grammars[CommentGrammar.key] = CommentGrammar;

		this.holder = holder;
	}

	findMatches(query){
		const fuse = new Fuse(this.options, {
			keys: ['title', 'key']
		});

		var fragment = query.toLowerCase();

		var options = fuse.search(query);

		for (var i = 0; i < options.length; i++){
			options[i].holder = this.holder;
			options[i].grammar = this.grammars[options[i].key];
		}

		return options;
	}
}

module.exports = GrammarLookup;

