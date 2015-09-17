var Postal = require('postal');
var CommentGrammar = require('./../grammars/comment-grammar');
var changes = require('./../model/change-commands');

class Option {
	constructor(holder, grammar){
		this.title = grammar.title;
		this.lower = this.title.toLowerCase();
		this.grammar = grammar;
		this.holder = holder;
	}

	select(){
		var step = this.grammar.newStep();
		changes.stepAdded(this.holder, step);
	}
}

class GrammarLookup {
	constructor(holder){
		var grammars = holder.grammars().map(x => new Option(holder, x));
		this.options = [new Option(holder, CommentGrammar)].concat(grammars);
	}

	findMatches(query){
		var fragment = query.toLowerCase();

		return this.options.filter(x => {
			return x.lower.search(fragment) > -1;
		});
	}
}

module.exports = GrammarLookup;

