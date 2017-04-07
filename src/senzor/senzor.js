
window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt)
{
	var alpha = Math.round(evt.alpha);
	var beta = Math.round(evt.beta);
	var gamma = Math.round(evt.gamma);
		
	document.getElementById("a").innerHTML = "alpha = " + alpha.toString();
	document.getElementById("b").innerHTML = "beta = " + beta.toString();
	document.getElementById("g").innerHTML = "gamma = " + gamma.toString();
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.height, canvas.width);
	
	var raza = 40;
	var centru = {x:canvas.width/2, y:canvas.height/2};
	ctx.beginPath();
	ctx.arc(centru.x + gamma * (canvas.width/2 - raza)/90, centru.y + beta * (canvas.height/2 - raza)/90, raza, 0, 2 * Math.PI);
	ctx.stroke();
}