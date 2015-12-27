(function(i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r;
i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
a = s.createElement(o),
m = s.getElementsByTagName(o)[0];
a.async = 1;
a.src = g;
m.parentNode.insertBefore(a, m)}
)(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-68101481-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');




// function bga(str)
// {
//     ga('send', 'event', 'btn' ,'click', str);
// }

function sbga(str)
{
   var path = window.location.pathname.split('/')//得到網址資訊裡的路徑並用split把他分開
   for(var i = 0; i < path.length; i++){
       if(path[i].match('.html')){ //如果符合有html
           path = path[i].replace('.html',""); //把html去掉
       }
   }
   if(path == 'bosstwo' || path == 'bossbig' || path == 'big-activity' || path == 'two-activity')
   {
        ga('send','event','btn','click', path + '/' + str);
   }
  
}