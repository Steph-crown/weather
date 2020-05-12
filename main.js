//placeholder function
function $(x){return document.getElementById(x)}
window.addEventListener("load", start, false)

function start()
{

//Prevents form from submitting when submit button is clicked
$('form').addEventListener("submit", e => {
 	e.preventDefault();
 });
}

function find(){

	//My api key. Dont steal it.
	apiKey = "c5619a8f65f4a15b20a1dfd389425e9d";
	
	//Input of city name
	cityName = $("city")
	
	//Input of state name
	state = $("state")
	
	//Gets the url
	url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "," + state.value + "&appid=" + apiKey;
	
	//fetches the data
/*	fetch(url).then(function(response){
	
		//Converts it to an object
		response.json().then(function(data){
		
			//Gets temperature
			temp = data.main.temp;
			
			//Gets weather description
			weather = data.weather[0].description
			
			//Gets weather icon code
			icon = data.weather[0].icon
			
			//Gets country name
			country = data.sys.country
			
			//Gets city name
			city = data.name
			
			//Display the gotten data
			display(temp, weather, country, city, icon)
			})
			})
			
	//Alerts for errors like network error
	.catch(function(err){alert('error' + err)})
	}*/
	
	fetch(url)
	.then(response => response.json())
	.then(data => {
		//Gets temperature
		temp = data.main.temp;
		
		//Gets weather description
		weather = data.weather[0].description
		
		//Gets weather icon code
		icon = data.weather[0].icon
		
		//Gets country name
		country = data.sys.country
		
		//Gets city name
		city = data.name
		
		//Display the gotten data
		display(temp, weather, country, city, icon)
		})
	}
		

function display(temp, weather, country, city, icon)
	{
	
	//Gets a customised image icon for the weather
	var imag = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" + icon + ".svg"
	
	//Compiles the markup
	markup = "<div class='top'><img src='" + imag + "'>" + parseInt(temp-273) + "<sup>&#8451</sup></div>"+
				"<div class='bottom'>" + city +  "<sup><span>"+country+"</span></sup><br>" + weather + "</div>"
	
	//Displays the result
	$('result').innerHTML = markup
	}