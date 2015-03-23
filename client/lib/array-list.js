// Heavily adapted from https://github.com/codexar/ArrayList

var _ = require('lodash');


function ArrayList() {
  var list = [];
  list.__proto__ = ArrayList.prototype;

  for (var i = 0; i < arguments.length; i++){
    list.push(arguments[i]);
  }

  return list;
}
ArrayList.prototype = [];


_.extend(ArrayList.prototype, {
  removeAt: function (index) {
    if (~index) {
      this.splice(index, 1);
      return true;
    }
    return false;
  },

  remove: function (element) {
    return this.removeAt(this.indexOf(element));
  },

  add: function(element){
    this.push(element);

    return this;
  },

  insertAt: function(index, element){
    if (index == 0){
      this.unshift(element);
      return this;
    }

    this.splice(index, 0, element);

    return this;
  },

  isEmpty: function(){
    return !this.length;
  },

  toArray: function(){
    var arr = [];

    for (var i = 0; i < this.length; i++){
      arr.push(this[i]);
    }

    return arr;
  },

  last: function(){
    return this[this.length - 1];
  },

  contains: function(element){
    return this.indexOf(element) > -1;
  }

});


function thisToArgs(that, args) {
  args = Array.prototype.slice.call(args, 0);
  args.unshift(that);
  return args;
}

module.exports = ArrayList;