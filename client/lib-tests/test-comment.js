var expect = require('chai').expect;
var Comment = require('./../lib/model/comment');

describe('Comment', function(){
	it('assigns an id on creation', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});
		expect(comment.hasOwnProperty('id')).to.be.true;
	});

	it('the id has to be on arg as well', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});
		expect(comment.arg.id).to.equal(comment.id);
	});

	it('does not blow up on children', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});
		expect(comment.children().length).to.equal(0);
	});

	it('returns null for pack', function(){
		var comment = new Comment('foo');

		expect(comment.pack()).to.be.null;
	});

	it('writes out data for persistence', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});

		var data = comment.write();

		expect(data).to.deep.equal({type: 'comment', text: 'foo', id: comment.id});
	});

	it('is not changed by default', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});

		expect(comment.arg.changed).to.be.false;
	});

	it('is not a holder', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});

		expect(comment.isHolder()).to.be.false;
	});

	it('findByPath works for text', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});
		expect(comment.findByPath('text')).to.equal(comment.arg);
	});

	it('clearActiveState removes active on the arg', function(){
		var comment = new Comment({type: 'comment', text: 'foo'});
		comment.arg.active = true;

		comment.clearActiveState();

		expect(comment.arg.active).to.be.false;
	});

});
