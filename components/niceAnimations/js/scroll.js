
/**

 * Created by vasil on 1/17/16.
 */

(function($){
    $(function () {
        var timeout = 15;
        var lastExecuted;
        window.scrollTo(0, 0);
        $(window).on('scroll', function() {

            if (!lastExecuted || Date.now() - lastExecuted > timeout) {
                lastExecuted = Date.now();
               $('[data-animation-name]').filter(function(){
                  return isScrolledIntoView(this);
               }).niceAnimations();
            }
        })
    })
    $('[data-animation-name]').filter(function(){
        return isScrolledIntoView(this);
    }).niceAnimations();
})(jQuery);

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    console.log(elemTop, docViewTop);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) || elemBottom - docViewBottom < ($elem.width() - 10);
}
