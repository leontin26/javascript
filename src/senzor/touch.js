
window.addEventListener("touchstart", on_touchstart);

var touch_colors = ["#FF0000", "#00FF00", "#0000FF", "#0F0F00"];
 
function on_touchstart(evt)
{
	var touches = evt.changedTouches;
	
	var canvas = document.getElementById("canvas");
	 
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < touches.length; i=i+1)
	{
		ctx.beginPath();
		ctx.strokeStyle = touch_colors[i];
		ctx.arc(touches[i].pageX, touches[i].pageY, 10, 0, 2 * Math.PI);
		ctx.stroke();
	}
}