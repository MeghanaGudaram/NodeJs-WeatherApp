var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Meghana'
  };
  setTimeout(()=>{
    callback(user);
  }, 3000);
};
// https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia
getUser(2, (userObject) => {
  console.log(userObject);
});
