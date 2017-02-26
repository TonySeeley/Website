var Strapline;
var today = new Date;

function high(element)
{
	document.getElementById(element).style.background = "url(/Images/navbutton.png) repeat-x";
	document.getElementById("strapline").innerHTML = getStrapline(element);
}

function low(element)
{
	document.getElementById(element).style.background = "url(/Images/navbuttonbar.png) repeat-x";
	document.getElementById("strapline").innerHTML = Strapline;
}

function updatePage(element)
{
	Strapline = getStrapline(element);
	document.getElementById("strapline").innerHTML = Strapline;
	document.getElementById("updated").innerHTML = "Last updated: Sunday 25th April 2010";
	document.getElementById("footer").innerHTML = '&copy; '+today.getFullYear()+' Tony Seeley <a href="mailto:tony@seeleyonline.com">Contact Me</a>';
}

function getStrapline(element)
{
	switch (element)
	{
		case "m_home":
			return "Welcome to the Seeley Family web site";
		case "m_aboutus":
			return "About Tony, Lisa, James and Abi";
		case "m_news":
			return "Family news stories and recent events";
		case "m_photo":
			return "Photo's of the family";
		case "m_diet":
			return "Tony's diet site";
		case "m_slang":
			return "Cockney rhyming slang dictionary";
		case "m_blackadder":
			return "BlackAdder tribute site...";
	}
	return "";
}
