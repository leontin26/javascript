
var video = document.getElementById("video");
video.addEventListener("touchstart", capteaza);

function on_cam_success(stream) 
{
	video.srcObject = stream;
  
}


//------------------------------------------------------------------

function on_cam_err(err) 
{
	alert("error" + err.message);

}  
  
//------------------------------------------------------------------

var constraints = { audio: true, video: { facingMode: "environment" }};

navigator.mediaDevices.getUserMedia(constraints)
.then(on_cam_success)
.catch(on_cam_err);

//------------------------------------------------------------------

function capteaza()
{
	var c = document.getElementById("canvas");
	c.width = video.width;
	c.height = video.height;
	
	var ctx = c.getContext("2d");
	
	ctx.drawImage(video, 0 ,0, 640, 480);
}

//------------------------------------------------------------------


