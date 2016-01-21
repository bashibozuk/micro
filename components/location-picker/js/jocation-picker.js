/**
 * Created by vasil on 1/21/16.
 */
(function($){

    $.fn.locationPicker = function() {
        $(this).forEach(function() {

            var $this = $(this);
            var $next = $this.next();
            if (!$next.is('span.input-group-addon')) {
                $this.after('<span class="input-group-addon"><span class="glyphicon glyphicon-glob"></span></span>');
                $next = $this.next();
            }

            $next.on('click', function() {
                $('')
            })

        });
    }

})(jQuery);
