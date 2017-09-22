$('.about-tab-btn').on('click', function(){
    var $i = $(this).attr('tab-btn');
    if ($i == 2) {
        $('.about-tab' + 1).fadeOut(1);
        $('.about-tab' + 2).fadeIn('normal');
        $('[tab-btn=' + 2 + ']').removeClass('shadow');
        $('[tab-btn=' + 1 + ']').addClass('shadow');
    } else {
        $('.about-tab' + 1).fadeIn('normal');
        $('.about-tab' + 2).fadeOut(1);
        $('[tab-btn=' + 1 + ']').removeClass('shadow');
        $('[tab-btn=' + 2 + ']').addClass('shadow');
    }
    
});