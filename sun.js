const apiData = {
    url: 'https://fcc-weather-api.glitch.me/api/current?lat=30.91&lon=75.34',
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

  var countDownDate = data.sys.sunset;

// Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("owntimer").innerHTML = hours + ":"
  + minutes + ":"+ seconds;

  // If the count down is finished, update to the next 24 hours
  if (distance <=0) { //need to catch the exact moment it goes to zero, hence <= not just <
    //clearInterval(x); //don't clear the interval, we want to carry on ticking away
    //document.getElementById("owntimer").innerHTML = "EXPIRED"; // this was just for debugging
    countDownDate = countDownDate + (24 * 60 * 60 * 1000);
  }
}, 1000);


  const html = `
    <div class = "sunrise">🌞</div>
    <div class = "sunrise">${final}</div>
    <div class = "sunrise">🌚</div>
    <div class = "sunset">${final1}</div>
    
    <style>
    body {
      font-family: Atkinson Hyperlegible;
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
    <div id="owntimer"></div>

  `
  const pokemonDiv = document.querySelector('.pokemon')
  pokemonDiv.innerHTML = html
}
