(function ($) {
    'use strict';
    $(document).ready(function(){
/*        $('div.iconArea').find('a.displayNone').on('click', function(e){
            e.preventDefault;
            $('div.mix').removeAttr('style');
        });*/
        /*$('.portfolioContainer').hover(function(){
        	$('.portHoverArea').show();
        }, function(){
        	$('.portHoverArea').hide();
        });*/

        $('ul.portMenu').find('li').on('click', function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

    });
}(jQuery));