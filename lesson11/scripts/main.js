// current date
var cd = new Date();

var daysOfWeek = [ 
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday' ];

var months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    "August", 
    'September', 
    'October', 
    'November', 
    'December'];

// display full current date
document.getElementById('currentDate').innerHTML = daysOfWeek[cd.getDay()] + ", " + cd.getDate() + " " + months[cd.getMonth()] + 
" " + cd.getFullYear();

// hamburger menu
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

// hero weather data
let factor, temp, windSpeed;
temp = 50;
windSpeed = 10;

if (temp <= 50 && windSpeed >= 3) {
    factor = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    document.querySelector('#windChill').innerHTML = factor.toFixed(2) + '&deg;';
}
else {
    document.querySelector('#windChill').innerHTML = factor;
}

document.querySelector('#current-temp').innerHTML = temp + '&deg;'; //'50&deg;'
document.querySelector('#wind-speed').innerHTML = windSpeed + 'mph'; //'10mph'
document.querySelector('#humidity').innerHTML = '40&percnt;';

// Five Day Weatherforecast 
function getFiveDayForecast(cityId) {

    // five day forecast data
    const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=ed727a759e7ac69ef5e052c8da5f94d9&units=imperial";
    
    fetch(apiURL2)
      .then((response) => response.json())
      .then(
        jsObject => {
            let counter = 1;
            jsObject.list.forEach(
                forecast => {
                    if(forecast.dt_txt.includes('18:00')) {
                        let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
                        let dayOfWeek = daysOfWeek[forecastDate.getDay()];
                        let imageURL = 'https://openweathermap.org/img/w/' + jsObject.list[counter].weather[0].icon + '.png';
    
                        document.querySelector(`#day${counter}`).innerHTML = dayOfWeek;
    
                        document.querySelector(`#temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg;' + 'F';
    
                        document.querySelector(`#img${counter}`).setAttribute('src', imageURL);
    
                        counter++;
                    }
                }
            );
        }
      );
    }
// pancake banner
const currentDate = new Date();
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
else {
    aside.style.display = 'none';
}

// adjust rating
function adjustRating(rating) {
    document.querySelector('#rating').textContent = rating;
}

