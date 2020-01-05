//var colors1=[];
/*var randomNo1=Math.floor(Math.random()*3);
var randomNo2=Math.floor(Math.random()*6);*/

var colors=[];

var square=document.getElementsByClassName("square");

var colorDisplay=document.getElementById("givenRGB");

var result=document.getElementById("Result");

var easy=document.getElementById("easy");

var hard=document.getElementById("hard");

var newColor=document.getElementById("newColors");

var e=0; var h=0;




document.addEventListener("DOMContentLoaded", function(event)
{
	hard.click();
});






function randomColors(length)
{
	for(var j=0;j<length;j++)
	{
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		colors[j]="rgb("+r+", "+g+", "+b+")";

		square[j].style.background=colors[j];
	}

	var randomNo=Math.floor(Math.random()*length);
	colorDisplay.textContent=colors[randomNo];
}

randomColors(6);	



newColor.addEventListener("click", function()
{
	result.textContent="";
	heading.style.background="steelblue";
	newColor.textContent="NEW COLORS"

	for(var i=0;i<6;i++)
	{
		square[i].style.background="black";
	}

	if(e==1)
		randomColors(3);
	else if(h==1)
		randomColors(6);
});





hard.addEventListener("click", function()
{
	randomColors(6);
	hard.classList.add("selected");
	easy.classList.remove("selected");
	result.textContent="";
	document.getElementById("heading").style.background="steelblue";
	h=1;
	e=0;

	for(var i=0;i<6;i++)
	{
		square[i].addEventListener("click", function()
		{	
			var pickedColor=this.style.background;
			if(pickedColor===colorDisplay.textContent)
			{
				result.textContent="Correct!";
				onCorrect(pickedColor,6);
				newColor.textContent="PLAY AGAIN?";
			}

			else
			{
				this.style.background="black";
				result.textContent="Try Again!";
			}
		});
	}
});



easy.addEventListener("click", function()
{
	randomColors(3);
	easy.classList.add("selected");
	hard.classList.remove("selected");
	result.textContent="";
	document.getElementById("heading").style.background="steelblue";

	e=1;h=0;

	for(var j=3;j<6;j++)
	{
		square[j].style.background="black";
	}

	for(var i=0;i<3;i++)
	{
		square[i].addEventListener("click", function()
		{	
			var pickedColor=this.style.background;
			if(pickedColor===colorDisplay.textContent)
			{
				result.textContent="Correct!";
				onCorrect(pickedColor,3);
				newColor.textContent="PLAY AGAIN?";
			}
			else
			{
				this.style.background="black";
				result.textContent="Try Again!";
			}
		});
	}
});





function onCorrect(color,length){
	for(var i=0;i<length;i++)
	{
		square[i].style.background=color;
		document.getElementById("heading").style.background=color;
	}
};