var HeaderReplace = function()
{
	var init = function()
	{
		var hd = $('.header');
		if(hd.length >= 0 )
		{
			//hd.remove();
			hd.load('header.html',function(){
				$('.nav li').hover(function () {
					if($(this).index() != 1)
					{
						$('ul', this).stop().slideToggle(100,function(){
					         return false;
					      });
					}
				});
			});
		}
	};

	init();
};

function inJQ()
{
	var HR = new HeaderReplace();
}

$(inJQ);


