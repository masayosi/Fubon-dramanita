
//下拉選單

//scrollbar
jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
    $('.nav li').hover(function () {
        console.log(123);
        $('ul', this).stop().slideToggle(100,function(){
         return false
        });
    });
$('.gotop').click(function(){
    $("body,html,.article").animate({
        scrollTop: 0
    }, 500);
});
});
