
window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt)
{
	var alpha = Math.round(evt.alpha);
	var beta = Math.round(evt.beta);
	var gamma = Math.round(evt.gamma);
		
	document.getElementById("a").innerHTML = "alpha = " + alpha.toString();
	document.getElementById("b").innerHTML = "beta = " + beta.toString();
	document.getElementById("g").innerHTML = "gamma = " + gamma.toString();
	
}