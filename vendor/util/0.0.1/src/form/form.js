// Generated by CoffeeScript 1.6.3
define(function(require, exports, module) {
  var $, Backbone, Cell, Form, _;
  $ = require("jquery");
  _ = require("underscore");
  Backbone = require("backbone");
  Cell = require("./cell");
  Form = (function() {
    function Form(form) {
      this.form = form;
    }

    Form.prototype.listen = function() {};

    Form.prototype.taskRunner = function(cell) {};

    Form.prototype.dump = function(callback) {};

    Form.prototype.registerTask = function(task, cell) {};

    return Form;

  })();
  return module.exports = Form;
});
