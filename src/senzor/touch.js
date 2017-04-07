window.addEventListener("touchstart", on_touchstart);

var touch_colors = ["#ff0000", "#00ff00", "#0000ff", "#0f0f00"];
 
function on_touchstart(evt)
{
	var touches = evt.changedTouches;
	
	var canvas = document.getElementById("canvas");
	
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < touches.length; i++)
	{
		ctx.beginPath();
		ctx.strokeStyle = touch_color[i];
		ctx.arc(touches[i].pageX, touches[i].pageY, 10, 0, 2 * Math.PI);
		ctx.stroke();
	}
	
}