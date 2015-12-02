$(function(){
    $(window).scroll(function(event) {
        event.preventDefault();
        var top = $(this).scrollTop();
        if(top!=0){
            var top_px = $(this).scrollTop() + 100;
            $('.wf-donation-drift-btn').animate({top:top_px}, 200);
        }
        
        /*var top_px = $(this).scrollTop() + 100;
        $('.wf-donation-drift-btn').animate({scrollTop:top_px}, '500');
        $('.wf-donation-drift-btn').css("top","px");*/
    });
});