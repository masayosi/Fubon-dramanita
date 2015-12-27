function tabInit()
{
  var nowTabNum = 0;
  var $tb  = $('ul#page');
  var $tli = $tb.find('li'); 
  var $img = $('img#content');
  
  var ary = [
    'img/content/boss-article/two-activity/boss-question/two-page1.png',
    'img/content/boss-article/two-activity/boss-question/two-page2.png',
    'img/content/boss-article/two-activity/boss-question/two-page3.png',
    'img/content/boss-article/two-activity/boss-question/two-page4.png',
    'img/content/boss-article/two-activity/boss-question/two-page5.png',
    'img/content/boss-article/two-activity/boss-question/two-page6.png',
    'img/content/boss-article/two-activity/boss-question/two-page7.png',
    'img/content/boss-article/two-activity/boss-question/two-page8.png',
    'img/content/boss-article/two-activity/boss-question/two-page9.png',
    'img/content/boss-article/two-activity/boss-question/two-page10.png'
            ];

//   $tli.eq(0).on('click',function(){
//        $img.attr('src',ary[0]);
//   });
   
  for(var a = 0 ; a < $tli.length ; a++)
  {
      $tli.eq(0).addClass('active');
      $tli.eq(a).on('click',function(){
         var selfNum = $(this).index(); 
         $img.attr('src',ary[selfNum]);
        
         nowTabNum = selfNum;
         changeTabColor(); 
         $("body,html,.article").animate({
          scrollTop: 0
        }, 500);
        //console.log('this:' + $(this).index());
        
      });
    
    // $tli.eq(a).delay(500*a).animate({'width':60});//測試檢查迴圈
  }
  
//改變tab顏色
function changeTabColor()
{
    
  for(var a=0;a<$tli.length;a++)
  {
    if(nowTabNum == a)
    {
        $tli.eq(a).addClass('active');
    }
    else
    {
        $tli.eq(a).removeClass('active');
    }
  }
}
}


function init()
{
    tabInit();
}



$(init);