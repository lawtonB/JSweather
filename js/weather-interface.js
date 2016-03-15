var apiKey = "d23ec3e8f93b21ade5903329633865b3";

$(document).ready(function() {
  $('#humidityLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
    });
    $('#tempLocation').click(function(){
    var cityTwo = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityTwo + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + cityTwo + " is" + (response.main.temp - 273.15) + " Celsius " + (response.main.temp - 273.15 + 32) + " Farenheight ");
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
  });
