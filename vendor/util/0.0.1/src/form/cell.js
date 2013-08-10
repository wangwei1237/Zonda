// Generated by CoffeeScript 1.6.3
define(function(require, exports, module) {
  var ALIAS, Cell, Wrap, filter;
  filter = function(attrs) {
    var attr, tasks;
    tasks = {};
    for (attr in attrs) {
      if (!/task-/.test(attrs.name)) {
        return null;
      }
      tasks[attrs.name] = attrs.value;
    }
    return tasks;
  };
  ALIAS = {
    "INPUT:text": "text",
    "INPUT:password": "password",
    "INPUT:radio": "radio",
    "INPUT:checkbox": "checkbox",
    "TEXTAREA": "textarea",
    "SELECT": "select"
  };
  Wrap = function(form) {
    var cells, sel, type;
    cells = [];
    for (sel in ALIAS) {
      type = ALIAS[sel];
      $(form).find(sel).each(function() {
        return cells.push(new Cell(type, this));
      });
    }
    return cells;
  };
  Cell = (function() {
    function Cell(type, cell) {
      var attrs, value;
      this.type = type;
      cell = $(cell);
      this.name = cell.attr("name");
      this["default"] = cell.attr("default");
      value = cell.attr("value");
      if (this["default"] !== void 0 && value === void 0) {
        cell.val(this["default"]);
      }
      attrs = cell.prop("attributes");
      this.tasks = filter(attrs);
    }

    return Cell;

  })();
  return module.exports = Wrap;
});
