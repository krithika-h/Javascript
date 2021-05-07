const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => { // we can name it in any way no need to mention arguments as resolve and reject
    setTimeout(() => {
      resolve('Done!'); //here we are passing string ie., done but we can also pass object arrays etc., anything
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => { //then actually gets the return data from setTimer
        console.log(data, posData); 
        // console.log('data',data); // outputs : data Done!
        // console.log('posData', posData); // outputs : posData GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1619614544583}
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
