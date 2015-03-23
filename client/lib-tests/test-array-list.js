var expect = require('chai').expect;
var ArrayList = require('../lib/array-list');


describe('ArrayList', function () {

    it('should create a new empty list', function () {
        var list = new ArrayList;
        expect(list.isEmpty()).to.be.true;
        expect(list.length).to.equal(0);
    });


    it('should allow you to add elements', function(){
        var list = new ArrayList();

        list.add(1);
        list.add(2);
        list.add(3);

        expect(list[0]).to.equal(1);
        expect(list[1]).to.equal(2);
        expect(list[2]).to.equal(3);
    
        expect(list.length).to.equal(3);
    });

    it('should allow you to add a range of elements', function(){
        var list = new ArrayList(1, 2, 3, 4);

        expect(list[0]).to.equal(1);
        expect(list[1]).to.equal(2);
        expect(list[2]).to.equal(3);
        expect(list[3]).to.equal(4);
    
        expect(list.length).to.equal(4);
    });

    it('should allow you to remove by index in the middle', function(){
        var list = new ArrayList(1, 2, 3, 4);

        list.removeAt(2);

        expect(list.toArray()).to.deep.equal([1, 2, 4]);
    });

    it('should allow you to remove by index at the beginning', function(){
        var list = new ArrayList(1, 2, 3, 4);

        list.removeAt(0);

        expect(list.toArray()).to.deep.equal([2, 3, 4]);
    });

    it('should allow you to remove by index at the end', function(){
        var list = new ArrayList(1, 2, 3, 4);

        list.removeAt(3);

        expect(list.toArray()).to.deep.equal([1, 2, 3]);
    });

    it('should allow you to remove an element by value', function(){
        var list = new ArrayList(1, 2, 3, 4);

        list.remove(3);

        expect(list.toArray()).to.deep.equal([1, 2, 4]);
    });

    it('should allow you to insert by position at the front', function(){
        var list = new ArrayList(1, 2, 3, 4);

        list.insertAt(0, 5);

        expect(list.toArray()).to.deep.equal([5, 1, 2, 3, 4]);
    });

    it('should allow you to insert by position in the middle', function(){
        var list = new ArrayList(1, 2, 3, 4);

        list.insertAt(2, 5);

        expect(list.toArray()).to.deep.equal([1, 2, 5, 3, 4]);
    });

    it('should expose a last method for the last member', function(){
        var list = new ArrayList(1, 2, 3, 4);

        expect(list.last()).to.equal(4);
    });

    describe('contains() method', function(){
        var list = new ArrayList(1, 2, 3, 4);

        it('should work for the negative case', function(){
            expect(list.contains(10)).to.be.false;
        });

        it('should work for the positive case', function(){
            expect(list.contains(1)).to.be.true;
        });
    });
});