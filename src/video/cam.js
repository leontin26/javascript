
var video = document.getElementById("video");


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

var constraints = { audio: true, video: true };

navigator.mediaDevices.getUserMedia(constraints)
.then(on_cam_success)
.catch(on_cam_err);