const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      console.log(posData);
    }, //argument 1 an anonymous function executed if user clicks on allow in the alert message this will be executed
    error => {
      console.log(error);
    } //argument 2 anonymous function executed if user clicks block on the alert message
  ); 
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);


