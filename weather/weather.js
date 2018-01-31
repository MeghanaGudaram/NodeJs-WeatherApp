const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
  url: `https://api.darksky.net/forecast/e357ea49a539dcbe06a167380cc71576/${lat},${long}`,
  json: true
  }, (error, response, body) => {
  if(error){
       callback('Unable to connect to api.darksky.net');
  }
  else if(response.statusCode === 400){
     callback('Unable to fetch weather');
  }
   else if(response.statusCode === 200){
     callback(undefined, {
       temperature: body.currently.temperature,
       apparentTemperature: body.currently.apparentTemperature
     });
  }
  });
}

module.exports.getWeather = getWeather;
