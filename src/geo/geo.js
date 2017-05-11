//google key = AIzaSyChOnIMQJIXf9hSS82alKIfa8wa6cH7MJg


get_geo_position();


function on_success(position)
{
	document.getElementById("text").innerHTML = "lat. " + position.coords.latitude + " + long. " + position.coords.longitude + " --> " + position.coords.accuracy;
	var map_str = "https://maps.googleapis.com/maps/api/staticmap?" + "center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=17&size=400x300&maptype=satellite&key=AIzaSyChOnIMQJIXf9hSS82alKIfa8wa6cH7MJg"; 
	document.getElementById("map").setAttribute("src", map_str);
	
}




function on_error(e)
{
	document.getElementById("text").innerHTML = e.message;
}




var geo_params = {
	enableHighAccuracy:true,
	timeout:1000,
	maximumAge:0
};


function get_geo_position()
{
	geo = navigator.geolocation;
	geo.getCurrentPosition(on_success, on_error, geo_params);
	
}