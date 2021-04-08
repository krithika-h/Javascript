const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert(`The random number is greater than 0.7 : ${randomNumber}`)
} else {
  alert(`The random number is lesser than 0.7 : ${randomNumber}`)
}

let newArray = [24, 15, 09, 93, 96, 1, 2, 3]

for (let i = 0; i < newArray.length; i++) {
  console.log(`Task 2 1st way: ${newArray[i]}`)
}

for (const i of newArray) {
  console.log(`Task 2 2nd way: ${i}`)
}

for (let i = newArray.length - 1; i >= 0; i--) {
  console.log(`Task 3 backwards: ${newArray[i]}`)
}

const anotherRandomNum = Math.random();

if ((randomNumber > 0.7 && anotherRandomNum > 0.7) || randomNumber < 0.2 || anotherRandomNum < 0.2) {
  alert('Random number is greater than 0.7 or lesser than 0.2')
}