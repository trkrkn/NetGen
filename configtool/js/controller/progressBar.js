function progressBarBack()
{
	var x=document.getElementById("progress_bar").style.width;
	if(x=="100%")
	{
		x="90%";
		document.getElementById("progress_bar").style.width=x;
	}
	else
	{
	x = x.substring(0,2);
	x=parseInt(x);
	x-=10;
	document.getElementById("progress_bar").style.width=x+"%";
	}
}

function progressBarContinue()
{
	var x=document.getElementById("progress_bar").style.width;
	x = x.substring(0,2);
	x=parseInt(x);
	x+=10;
	document.getElementById("progress_bar").style.width=x+"%";
}