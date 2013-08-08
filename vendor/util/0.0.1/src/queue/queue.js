// Generated by CoffeeScript 1.6.3
define(function(require, exports, module) {
  var Backbone, Queue, _;
  _ = require("underscore");
  Backbone = require("backbone");
  return Queue = (function() {
    function Queue(NAME) {
      this.NAME = NAME;
      _.extend(this, Backbone.Events);
      this.data = [];
    }

    Queue.prototype.checkAll = function() {
      var cell, _counter, _i, _len, _ref;
      _counter = this.data.length;
      _ref = this.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if (cell.status === "error") {
          this.trigger("" + this.NAME + ":queue:error", cell);
        }
        if (cell.status === "success") {
          _counter -= 1;
        }
      }
      if (_counter === 0) {
        return this.trigger("" + this.NAME + ":queue:success");
      }
    };

    Queue.prototype.setter = function(name, status) {
      var cell, _i, _is_new, _len, _ref;
      _is_new = true;
      _ref = this.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if (cell.name === name) {
          _is_new = false;
          cell.status = status;
        }
      }
      if (_is_new) {
        this.data.push({
          name: name,
          status: status
        });
      }
      return this.checkAll();
    };

    return Queue;

  })();
});
