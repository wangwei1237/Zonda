// Generated by CoffeeScript 1.6.2
define(function(require, exports, module) {
  return module.exports = function(where, now, cells) {
    cells.eq(where).fadeIn(1000);
    return cells.eq(now).fadeOut(1000);
  };
});
