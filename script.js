const btn = document.getElementById('submit');
const output = document.getElementById('output');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
btn.addEventListener('click', getWeather);
async function getWeather(){
  const cityName = document.getElementById('city').value;
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
  // console.log(cityName);
  // console.log(url);
  try {
    if(!cityName){
      output.innerHTML = 'Please enter a city!';
      throw new Error('Please enter a city');
    }
    const response = await fetch(url, options);
    const result = await response.json();
    displayWeather(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(weatherData) {
  output.innerHTML = `<img src="${weatherData.current.condition.icon}" alt="weather icon"> \n In ${weatherData.location.name}, currently the Temperature is: ${weatherData.current.temp_c}°C`;
}
