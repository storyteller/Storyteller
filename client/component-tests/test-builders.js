var should = require('chai').should();

var builders = require('./../components/editing/editors/builders');


describe('Building an editor', function() {
  function undefinedEditor() {
    builders.findEditor(null);
    builders.findEditor(undefined);
  }

  function nonExistentEditor() {
    return builders.findEditor('idontexist');
  }

  it('should throw an error if editor does not exist', function() {
    nonExistentEditor.should.throw(Error);
  });

  it('should not throw an error on an unedfined editor', function() {
    undefinedEditor.should.not.throw(Error);
  });

  it('should default to building a text editor', function() {
    builders.findEditor(null).should.equal(builders['text']);
  });
});

