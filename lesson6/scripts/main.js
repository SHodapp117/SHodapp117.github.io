
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

// pancake banner
const currentDate = new Date();
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
else {
    aside.style.display = 'none';
}

// font loader
WebFont.load({
    google: {
      families: [
         'Josefin Sans',
         'Raleway'
      ]
    }
  });