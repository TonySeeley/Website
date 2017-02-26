var currentImage;
var maxImage;
var directory;

function pageLoad()
{
	pageSetup();

	var Selector = '<select id="imgDDL" onChange="javascript:ChangeImage('+"'none'"+');">';
	for (var i=1; i<=maxImage; i++) {
		Selector += '<option value="'+i.toString()+'" >Picture '+i.toString()+' of '+maxImage.toString();
	}
	Selector += '</select>';
	document.getElementById("imgControl").innerHTML = Selector;

	currentImage = 1;
	ChangeImage("--");
}

function ChangeImage(param)
{
	switch (param)
	{
		case "+":
			currentImage++;
			if (currentImage>maxImage) 
				currentImage=1;
			break;
		case "-":
			currentImage--;
			if (currentImage==0)
				currentImage=maxImage;
			break;
		case "++":
			currentImage=maxImage;
			break;
		case "--":
			currentImage=1;
			break;
	}

	if (param=="none")
		currentImage = parseInt(document.getElementById("imgDDL").value, 10);
	else
		document.getElementById("imgDDL").value = currentImage.toString();

	var imageNumber = "000".substring(0, 3-currentImage.toString().length) + currentImage.toString();
	document.getElementById("IMG").src=directory+"/Image"+imageNumber+".jpg";
}
