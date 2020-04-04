var templeID = getQueryVariable('id');
var pageDataURL = "https://github.com/SHodapp117/SHodapp117.github.io/blob/master/templeproject/data/temples.json";
var weatherDataURL = "https://api.openweathermap.org/data/2.5/weather?id=" + templeID + "&units=imperial&appid=003d0dc716b994bd0c126c319d745b07";
var iconURL = "https://openweathermap.org/img/w/";
var pageDataRequest;
var weatherDataRequest;


function populatePageContent(json) {
    var templeName = json.name;
    var titleText = "Details About The " + templeName + " Temple";
    var templeSvcSection = document.getElementById('temple-services-list');
    var templeSvcUL = document.createElement('ul');
    var templeCloseSection = document.getElementById('temple-closure-list');
    var templeClseUL = document.createElement('ul');
    var templeHistSection = document.getElementById('temple-history-list');
    var templeHistUL = document.createElement('ul');
    var templeSessSection = document.getElementById('temple-schedule-list');
    var templeSessUL = document.createElement('ul');

    document.title = "My Temple Stay | " + titleText;
    $('#temple-page-h1').html("The " + templeName + " Temple");
    $('#temple-info-h3').html(templeName + " Temple Information");
    $('#temple-address').html(json.address.address1 + "<br>" + json.address.city + ", " + json.address.state + " " + json.address.zip + json.address.zip_4);
    $('#temple-phone').html(json.phone);
    $('#temple-email').html(json.email);
    $('#temple-description').html(json.description);

    for (iSvc = 0; iSvc < json.services.length; iSvc++) {
        var svcItem = document.createElement('li');
        svcItem.textContent = json.services[iSvc];
        templeSvcUL.appendChild(svcItem);
    }

    for (iCls = 0; iCls < json.closures.length; iCls++) {
        var clsItem = document.createElement('li');
        clsItem.textContent = json.closures[iCls];
        templeClseUL.appendChild(clsItem);
    }

    for (iHst = 0; iHst < json.history.length; iHst++) {
        var hstItem = document.createElement('li');
        hstItem.textContent = json.history[iHst];
        templeHistUL.appendChild(hstItem);
    }

    for (iSes = 0; iSes < json.session_schedule.length; iSes++) {
        var sessItem = document.createElement('li');
        sessItem.textContent = json.session_schedule[iSes];
        templeSessUL.appendChild(sessItem);
    }

    templeSvcSection.appendChild(templeSvcUL);
    templeCloseSection.append(templeClseUL);
    templeHistSection.append(templeHistUL);
    templeSessSection.append(templeSessUL);
}

function populateWeatherData(json) {
    var weatherData = json;
    var weatherIcon = document.getElementById('weather-icon');
    var weatherAtGlance = document.getElementById('weather-at-glance');
    var currentCondition = document.getElementById('current-condition');
    var currentTemp = document.getElementById('current-temp');
    var currentHumidity = document.getElementById('current-humidity');
    var currentPrecip = document.getElementById('current-precip');
    var windSpeed = document.getElementById('wind-speed');

    if (weatherIcon) { weatherIcon.src = iconURL + weatherData.weather[0].icon + '.png' }
    if (weatherAtGlance) { weatherAtGlance.innerHTML = weatherData.weather[0].description + " " + Math.round(weatherData.main.temp) + "&deg" }
    if (currentCondition) { currentCondition.innerHTML = weatherData.weather[0].description }
    if (currentTemp) { currentTemp.innerHTML = Math.round(weatherData.main.temp) + "&deg; F"; }
    if (currentHumidity) { currentHumidity.innerHTML = weatherData.main.humidity + "%"; }
    if (currentPrecip && weatherData.hasOwnProperty('rain')) { 
        currentPrecip.innerHTML = weatherData.rain['1h'] + " inches"; 
    } else {
        currentPrecip.innerHTML = "Not Available"
    }
    if (windSpeed) { windSpeed.innerHTML = weatherData.wind.speed + " mph" }
}

function getImagesArray(json) {
    for (var iOut = 0; iOut < json.temples.length; iOut++) {
        matchFound = json.temples[iOut].id == templeID;
        if (matchFound) {
            for (var iIn = 0; iIn < json.temples[iOut].images.length; iIn++) {
                slideshowImages.push(json.temples[iOut].images[iIn]);
            }
        }
    }
    return slideshowImages;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    
    return(false);
}