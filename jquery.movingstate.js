/*! jQuery.MovingState
    v0.1.0
    @negic
    MIT License
*/
(function($, o) {
    o = {};
    $.fn.movingstate = function(options) {
        var opts = $.extend({}, $.fn.movingstate.defaults, options);

        this.on(opts.event, function(e) {

            o.status = (o.status === 0) ? 1 : ((o.status === 1) ? 2 : o.status);

            if (o.status === 1) {
                opts.start(e);
            }

            if (o.timeId) {
                opts.move(e);
                clearTimeout(o.timeId);
            }

            o.timeId = setTimeout(function(){
                o.status = 0;
                opts.end(e);
            }, opts.delay);
        });
    };
    $.fn.movingstate.defaults = {
        start: function() {
        },
        move : function() {
        },
        end  : function() {
        },
        delay: 500,
        event: 'scroll'
    };
})(jQuery);