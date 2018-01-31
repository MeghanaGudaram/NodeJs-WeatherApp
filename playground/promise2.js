const request = require('request');
var geocodeAddress = (address) => {
  var encodedAddress = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address);
  return new Promise((resolve, reject) => {
    request({
      url:encodedAddress,
      json: true
    }, (error, response, body) => {
      if(error){
        reject('Unable to connect to google servers');
      }
      else if(body.status==='ZERO_RESULTS'){
        reject('Unable to find location for the address');
      }
      else if(body.status === 'OK'){
        resolve(body.results[0].formatted_address);
      }
    });
  });
};
geocodeAddress('28262').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
