// Generated by CoffeeScript 1.6.3
define(function(require, exports, module) {
  var Backbone, Queue, _;
  _ = require("underscore");
  Backbone = require("backbone");
  return Queue = (function() {
    function Queue(name) {
      this.name = name;
      _.extend(this, Backbone.Events);
      this.data = [];
    }

    Queue.prototype.checkAll = function() {};

    Queue.prototype.setter = function(name, status) {
      return checkAll();
    };

    return Queue;

  })();
});
