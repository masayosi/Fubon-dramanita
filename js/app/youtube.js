// var videoIdList = ["1VGdGMmYkXU","q1EJn6v_NQ8","v8r5x5N2AOY","enyTQw5xPsY"]

  // var defaultVideoId = $('.video-list li').eq(0).attr('')
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '400',
      width: '708',
      // videoId: '',
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
  }
  function onPlayerReady(event) {
    var defvideoId = $('.video-list li[default]').attr('video-id')
    if(!defvideoId){
      defvideoId = $('.video-list').find('li').eq(0).attr('video-id')
    }
    player.loadVideoById(defvideoId)
  //   event.target.playVideo();
  }
  var done = false;
  // function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
  // }
  // function stopVideo() {
  //   player.stopVideo();
  // }


function init (){
  var $videoEvent = $('.video-list li')
  $videoEvent.on('click',function(){
    var base_path = "img/content/article/charity-about-photo/"
    var videoId = $(this).attr("video-id")    
    var videoTitle = $(this).attr("video-title-img")    
    // console.log(videoId)
    // console.log(videoTitle)
    $('.player img').attr('src',base_path + videoTitle)
    player.loadVideoById(videoId)
    player.playVideo()
  })

}

$(init)




