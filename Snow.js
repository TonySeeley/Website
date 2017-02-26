var image = "./Images/SnowFlake.gif";
var count = 0;
var scrnWidth = 0;
var scrnHeight = 0;
var reduce = 30;
var axPos = new Array();
var ayPos = new Array();
var axVar = new Array();
var ayVar = new Array();
var axSin = new Array();
var ie = (window.navigator.userAgent.indexOf("MSIE") > -1);

function ImgSetup(amount)
{
	count = amount;
	if (ie) {
		scrnWidth = document.body.clientWidth - reduce;
		scrnHeight = document.body.clientHeight - reduce;
	} else {
		scrnWidth = self.innerWidth - reduce;
		scrnHeight = self.innerHeight - reduce;
	}

	for (i = 0; i < count; i++) {
		axPos[i] = Math.random() * scrnWidth + 10;
		ayPos[i] = Math.random() * scrnHeight;
		axVar[i] = 0.02 + Math.random() / 10;
		ayVar[i] = 0.5 + Math.random();
		axSin[i] = 0;

	    if (true) {
			document.write("<div id=\"dot"+i+"\" style=\"POSITION:absolute; Z-INDEX:1; VISIBILITY:visible; TOP:1px; LEFT:1px;\"><img src=\""+image+"\" border=\"0\"></div>");
	    	} else {
			document.write("<layer name=\"dot"+i+"\" left=\"1\" top=\"1\" visibility=\"show\"><img src=\""+image+"\" border=\"0\"></layer>");
		}
	}
}

function ImgDraw()
{
	if (ie) {
		scrnWidth = document.body.clientWidth - reduce;
		scrnHeight = document.body.clientHeight - reduce;
	} else {
		scrnWidth = self.innerWidth - reduce;
		scrnHeight = self.innerHeight - reduce;
	}

	for (i = 0; i < count; i++) {
		ayPos[i] += ayVar[i];
		if (ayPos[i] > scrnHeight || axPos[i] > scrnWidth) {
			axPos[i] = Math.random() * scrnWidth + 10;
			ayPos[i] = 0;
			axVar[i] = 0.02 + Math.random() / 10;
			ayVar[i] = 0.5 + Math.random();
			axSin[i] = 0;
		}

		axSin[i] += axVar[i];
		if (true) {
			document.getElementById("dot" + i).style.pixelTop = ayPos[i];
			document.getElementById("dot" + i).style.pixelLeft = axPos[i] + 10 * Math.sin(axSin[i]);
//			document.all["dot" + i].style.pixelTop = ayPos[i];
//			document.all["dot" + i].style.pixelLeft = axPos[i] + 10 * Math.sin(axSin[i]);
		} else {
			document.layers["dot" + i].top = ayPos[i];
			document.layers["dot" + i].left = axPos[i] + 10 * Math.sin(axSin[i]);
		}
	}

	setTimeout("ImgDraw()", 10);
}
