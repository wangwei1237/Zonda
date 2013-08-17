// Generated by CoffeeScript 1.6.2
define(function(require, exports, module) {
  return module.exports = function(where, now, cells) {
    var dis;

    dis = cells.first().parent().outerWidth();
    /*
    # It seem do not need this
    if @is_first_run_slide
      cells.eq(now).fadeIn "fast"
      @is_first_run_slide = false
      return null
    */

    if (now === 0 && where === (cells.size() - 1)) {
      cells.eq(where).show().css({
        left: -dis
      });
      cells.eq(now).stop().animate({
        left: dis
      });
      cells.eq(where).stop().animate({
        left: 0
      });
      return null;
    }
    if (where > now) {
      cells.eq(where).show().css({
        left: dis
      });
      cells.eq(now).stop().animate({
        left: -dis
      });
      cells.eq(where).stop().animate({
        left: 0
      });
      return null;
    }
    if (where === 0 && now === (cells.size() - 1)) {
      cells.eq(where).show().css({
        left: dis
      });
      cells.eq(now).stop().animate({
        left: -dis
      });
      cells.eq(where).stop().animate({
        left: 0
      });
      return null;
    }
    if (where < now) {
      cells.eq(where).show().css({
        left: -dis
      });
      cells.eq(now).stop().animate({
        left: dis
      });
      cells.eq(where).stop().animate({
        left: 0
      });
      return null;
    }
  };
});
