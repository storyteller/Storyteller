var Comment = require('./comment');

var CommentGrammar = {
	newStep: function(){
		return new Comment({text: 'New comment'});
	},

	key: 'Comment',
	title: 'New Comment'
}

module.exports = CommentGrammar;