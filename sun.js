const apiData = {
  url: 'https://fcc-weather-api.glitch.me/api/current?lat=30.91&lon=75.34&weather[0].icon',
}
const apiUrl = `${apiData.url}`
console.log(apiUrl)
fetch(apiUrl)
.then( (data) => data.json())
.then( (pokemon) => generateHtml(pokemon))

const generateHtml = (data) => {
console.log(data);
console.log(data.sys.sunrise);
var unixTimestamp = data.sys.sunrise;
var date = new Date(unixTimestamp * 1000);
var final = (date.toLocaleTimeString("it-IT")); /////////////

var unixTimestamp1 = data.sys.sunset;
var date = new Date(unixTimestamp1 * 1000);
var final1 = (date.toLocaleTimeString("it-IT")); /////////////

var sunset = data.sys.sunset
var sunrise = data.sys.sunrise
var nowTime = Math.floor(new Date().getTime()/1000.0)

if (nowTime < sunset && nowTime > sunrise){

  // Set the date we're counting down to
  var countDownDate = data.sys.sunset
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = Math.floor(new Date().getTime()/1000.0)
    console.log(now)

    
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (60 * 60 * 24));
    var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor((distance % (60)));
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = hours + ":"
    + minutes + ":" + seconds;
    var nowTime = Math.floor(new Date().getTime()/1000.0)

  }, 1000);
}
else {
    var tomorrow = Math.floor(sunrise + 84600 + 1800) 
    console.log(tomorrow)
    
    // Set the date we're counting down to
    var countDownDate = tomorrow
  
  // Update the count down every 1 second
    var x = setInterval(function() {
  
    // Get today's date and time
    var now = Math.floor(new Date().getTime()/1000.0)
    console.log(now)
    
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (60 * 60 * 24));
    var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor((distance % (60)));
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = "-" + hours + ":"
    + minutes + ":" + seconds;
    var nowTime = Math.floor(new Date().getTime()/1000.0)
  }, 1000);
  
  }

const html = `
  <div class = "sunrise">🌞</div>
  <div class = "sunrise">${final}</div>
  <div class = "sunrise">🌚</div>
  <div class = "sunset">${final1}</div>
  
  <style>
  body {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    text-align: center;
    font-size: 250px;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 50px;
    margin-left: 50px;
    color: white;
    background-color: black;
  }
  </style>
  <div class = "sunrise">🤰</div>
  <div id="demo"></div>
`
const pokemonDiv = document.querySelector('.pokemon')
pokemonDiv.innerHTML = html
}
