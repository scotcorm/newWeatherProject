// const btn = document.querySelector('button');
// const output = document.querySelector('#output');
// const intake = document.querySelector('#intake'); // Add the id attribute to your input element
// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';

// btn.addEventListener('click', getInput);

// function getInput() {
//   const xhr = new XMLHttpRequest();
//   let tempVal = intake.value;
//   let tempURL = url + tempVal;

//   // Clear previous results
//   output.innerHTML = '';

//   xhr.onload = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         let data = JSON.parse(xhr.responseText);
//         outputHTML(data);
//         // console.log(data);
//       } else {
//         // Handle API request errors here
//         output.innerHTML = 'Please enter a city!';
//       }
//     }
//   };

//   xhr.open('GET', tempURL);
//   xhr.withCredentials = true;
//   const ApiHeader = process.env.WEATHER_API_HEADER;

//   const ApiKey = process.env.WEATHER_API_KEY;
//   xhr.setRequestHeader(ApiHeader, ApiKey);
//   xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

//   xhr.send();
// }

// function outputHTML(data) {
//   // Display the data on the page as needed
//   // For example, if you want to display the temperature:
//   output.innerHTML = `<img src="${data.current.condition.icon}"> \n In ${data.location.name} the Temperature is: ${data.current.temp_c}°C`;
// }

// server.js

// import 'dotenv/config'
// require('dotenv').config(); // Load environment variables from .env file
const btn = document.querySelector('button');
const output = document.querySelector('#output');
const intake = document.querySelector('#intake');
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
import { req_header, req_value } from './server.js';

btn.addEventListener('click', getInput);

function getInput() {
  const xhr = new XMLHttpRequest();
  let tempVal = intake.value;
  let tempURL = url + tempVal;

  // Clear previous results
  output.innerHTML = '';

  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        outputHTML(data);
        // console.log(data);
      } else {
        // Handle API request errors here
        output.innerHTML = 'Please enter a city!';
      }
    }
  };

  xhr.open('GET', tempURL);
  xhr.withCredentials = true;

  xhr.setRequestHeader(req_header, req_value); // Use the API key from environment variables
  xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

  xhr.send();
}

function outputHTML(data) {
  // Display the data on the page as needed
  // For example, if you want to display the temperature:
  output.innerHTML = `<img src="${data.current.condition.icon}"> \n In ${data.location.name} the Temperature is: ${data.current.temp_c}°C`;
}
