/**
 * Created by vasil on 1/17/16.
 */
(function ($) {


    $.fn.niceAnimations = function(stop) {
        $(this).each(function(i) {
            var $el = $(this);
            var animationName = 'animation-' + $el.attr('data-animation-name');
            if (!animationName) {
                return true;
            }
            if (stop && $el.hasClass(animationName)) {
                $el.removeClass(animationName);
            } else{
                $el.addClass(animationName);
            }
        })
    }


})(jQuery)