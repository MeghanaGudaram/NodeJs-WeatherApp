var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(3, '4').then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 5);
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log('Result: ', res);
}, (errorMessage) =>{
  console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey it worked!');
//     resolve('Hey it worked!');
//     reject('Oops, it didnt work!');
//   }, 3000)

  //reject('Oops, it didnt work!');
//});

// somePromise.then((message) => {
//   console.log('Success: ' + message);
// }, (errorMessage) => {
//   console.log('Error: ' + errorMessage);
// });
