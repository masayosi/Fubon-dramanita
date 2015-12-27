var DonationReplace = function()
{
	var init = function()
	{
		var hd = $('.wf-donation-drift-btn');
		if(hd.length >= 0 )
		{
			//hd.remove();
			hd.load('wf_donation_btn.aspx?r=',function(){
			});
		}
	};

	init();
};

function inJQ2()
{
	var HR = new DonationReplace();
}

$(inJQ2);


