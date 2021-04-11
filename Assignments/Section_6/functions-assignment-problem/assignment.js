// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// Task 1
const sayHello = name => console.log('Hi '+name);
sayHello('Tom');

// Task 2 --part 1
const greetUser = (phrase, name) => {
  console.log(`${phrase} ${name}`);
};
greetUser('Hello','Rose');

// Task 2 --part 2
const hardCoded = () => {
  console.log('this is hardcoded value');
};
hardCoded();

// Task 2 --part 3
const oneReturnValue = name => 'hi ' + name;
console.log(oneReturnValue('john'));

// Task 3 
const defaultGreeting = (name, phrase = 'Hii..') => {
  console.log(`${phrase} ${name}`);
};
defaultGreeting('Rose','Welcome');
defaultGreeting('Rose');


// Task 4

function checkInput (callBack, ...inputs) {
  let emptyValue = false;
  for(const texts of inputs) {
    if(!texts) {
      emptyValue = true;
      break;
    }
  }
  if (!emptyValue) {
    callBack();
  }
}

checkInput(
  () => console.log("There is no empty string"),
  "hi",
  "hello",
  "1524",
  "9396",
  "strings"
);

