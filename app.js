const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
.help()
.alias('help', 'h')
.argv;

//e357ea49a539dcbe06a167380cc71576

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.latitude, (errorMessage, weatherresults) => {
      if(errorMessage){
        console.log(errorMessage);
      }else {
        console.log(`Its currently ${weatherresults.temperature} but it feels like ${weatherresults.apparentTemperature}`);
      }
    });
  }
});
