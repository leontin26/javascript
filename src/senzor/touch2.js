
window.addEventListener("touchstart", on_touchstart);
window.addEventListener("touchmove", on_touchmove);

var touch_colors = ["#FF0000", "#00FF00", "#0000FF", "#0F0F00", "#F0F0F0"];
 
var touch_id = []; 
 
function on_touchstart(evt)
{
	var touches = evt.touches;
	
	var canvas = document.getElementById("canvas");
	 
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < touches.length; i++)
	{
		touch_id.push({id:touches[i].identifier, color:touch_colors[i]});
		ctx.beginPath();
		
		ctx.arc(touches[i].pageX, touches[i].pageY, 10, 0, 2 * Math.PI);
		ctx.strokeStyle = touch_id[i].color;
		ctx.stroke();
	}
}

function on_touchmove(evt)
{
	var touches = evt.changedTouches;
	
	var canvas = document.getElementById("canvas");
	 
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < touches.length; i++)
	{
		var color = "#FFFFFF";
		var lastX = 0; 
		var lastY = 0;
		var j = -1;		
		
		for (j=0; j<touch_id.length; j++)
			if (touches[i].identifier == touch_id[j].id){
				color = touch_id[j].color;
				lastX = touch_id[j].lastX;
				lastY = touch_id[j].lastY;
				break;
			}		
			
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineWidth = 10;
		ctx.lineTo(touches[i].pageX, touches[i].pageY);
		touch_id[j].lastX = touches[i].pageX;
		touch_id[j].lastY = touches[i].pageY;
		
		ctx.arc(touches[i].pageX, touches[i].pageY, 5, 0, 2 * Math.PI);
		ctx.strokeStyle = color;
		ctx.stroke();
	}
}