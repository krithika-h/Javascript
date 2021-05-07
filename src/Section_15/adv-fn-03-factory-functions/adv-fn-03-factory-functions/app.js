// function add(num1, num2) {
//   return num1 + num2;
// }

// // function sendDataToServer() {}

// console.log(add(1, 5)); // 6
// console.log(add(12, 15)); // 27

// function addRandom(num1) {
//   return num1 + Math.random();
// }

// console.log(addRandom(5));

// let previousResult = 0;

// function addMoreNumbers(num1, num2) {
//   const sum = num1 + num2;
//   previousResult = sum;
//   return sum;
// }

// console.log(addMoreNumbers(1, 5));

// const hobbies = ['Sports', 'Cooking'];

// function printHobbies(h) {
//   h.push('NEW HOBBY');
//   console.log(h);
// }

// printHobbies(hobbies);

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log('amount',amount);
    console.log('tax',tax);
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19); //0.19 tax
const calculateIncomeTaxAmount = createTaxCalculator(0.25); //0.25 tax

console.log(calculateVatAmount(100)); //100 amount
console.log(calculateVatAmount(200)); //200 amount