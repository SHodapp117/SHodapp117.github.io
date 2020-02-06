
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