$('.go_back-arrow').on('mouseenter', function() {
    var $back_arrow_el = $(this);
    var $back_arrow_el_width = $back_arrow_el.outerWidth();
    var $back_arrow_el_offset = $back_arrow_el.offset();
    var $back_arrow_text = 'Click to go back to the list of parameters.';
    
    var $back_Arrow = $('<div />', {
        'class' : 'back_arrow',
        'text' :  $back_arrow_text
    }).appendTo('body').css({    
        'position' : 'absolute',
        'top' : $back_arrow_el_offset.top,
        'left' : Math.floor(($back_arrow_el_width) +$back_arrow_el_offset.left) 
    });
    
    $(this).on('mouseleave', function(){ 
        $back_Arrow.remove();
        $back_Arrow.off('mouseleave');
    });
}) 