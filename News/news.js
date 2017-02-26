var currentImage;
var maxImage;
var directory;
var IE = (window.navigator.userAgent.indexOf("MSIE") > -1);
var IE8 = (window.navigator.userAgent.indexOf("MSIE 8") > -1);
var slideShowOn = false;
var slideShowID = null;
var picsDisplay = false;

function pageLoad()
{
	pageSetup();
	currentImage = 1;
	setImageSrc();
	pageScroll();
	document.getElementById("imageTable").style.display = "block";
}

function setImageSrc()
{
	var imageNumber = "000".substring(0, 3-currentImage.toString().length) + currentImage.toString();
	document.getElementById("image").src=directory+"/Image"+imageNumber+".jpg";
	document.getElementById("imageNumber").innerHTML = currentImage.toString() + "/" + maxImage.toString();
}

function ChangeImage(param)
{
	switch (param)
	{
		case ">":
			currentImage++;
			if (currentImage>maxImage)
				currentImage=1;
			break;
		case "<":
			currentImage--;
			if (currentImage==0)
				currentImage=maxImage;
			break;
	}
	setImageSrc();
}

function pageScroll()
{
	if (IE)
	{
		document.getElementById("imageTable").style.top = Math.max((IE8?145:153), document.documentElement.scrollTop + 6) + "px";
		document.getElementById("imageTable").style.left = Math.min(((document.body.clientWidth - 1016) / 2) + 695, document.body.clientWidth - 310) + document.documentElement.scrollLeft + "px";
	}
	else
	{
		document.getElementById("imageTable").style.top = Math.max(145, window.pageYOffset + 10) + "px";
		document.getElementById("imageTable").style.left = Math.min(((document.body.clientWidth - 1016) / 2) + 695, document.body.clientWidth - 310) + window.pageXOffset + "px";
	}
}

function showPics()
{
	if (picsDisplay)
		return;
	runSlideShow(true);
	picsDisplay = true;
	document.getElementById("imageRow").style.display = "block";
	document.getElementById("imageControlRow").style.display = "block";
	document.getElementById("imageHeader").innerHTML = "Mouse Off to Hide";
}

function hidePics()
{
	if (!picsDisplay)
		return;
	runSlideShow(false);
	picsDisplay = false;
	document.getElementById("imageRow").style.display = "none";
	document.getElementById("imageControlRow").style.display = "none";
	document.getElementById("imageHeader").innerHTML = "Mouse Over to Show";
}

function runSlideShow(state)
{
	if (slideShowOn == state)
		return;
	slideShowOn = state;
	if (slideShowOn)
	{
		slideShowID = window.setInterval('ChangeImage(">")', 2000);
		document.getElementById("imagePause").src="./../../Images/Pause.png";
		document.getElementById("imagePlay").src="./../../Images/Play-disabled.png";
		document.getElementById("imageStatus").innerHTML = "Slideshow On";
	}
	else
	{
		window.clearInterval(slideShowID);
		document.getElementById("imagePause").src="./../../Images/Pause-disabled.png";
		document.getElementById("imagePlay").src="./../../Images/Play.png";
		document.getElementById("imageStatus").innerHTML = "Slideshow Off";
	}
}
