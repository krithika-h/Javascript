// Task 1

const numbers = [1, 2, 3, 2.3, 24, 15, 5, 5.5,39, 50, 8, 9, -5, -3];

// 1.1 filter numbers greater than 5
const filtering = numbers.filter(n => n>5);
console.log('Filetering....',filtering);

// 1.2 mapping each number of array to property inside object
const mapping = numbers.map((nums, indx, numbers) => {
    const mapObject = {index: indx, num: nums};
    return mapObject;
}
);
console.log('Mapping....',mapping);

// 1.3 reduce by multiplying all the numbers in array to single number
const newArray = [1,2,3,4,6]
const reducing = newArray.reduce((prevValue, curValue) => prevValue*curValue, 1);
console.log('Reducing....',reducing);


// Tast 2
const findMax = (...nums) => {
    let maxValue = nums[0];
    for (const num of nums) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    return maxValue;
};

console.log(findMax(...numbers));

// Task 3
// 3.1 
const findMinMax = (...nums) => {
    let maxValue = nums[0];
    let minValue = nums[0];
    for (const num of nums) {
        if (num > maxValue) {
            maxValue = num;
        }
        if (num < minValue) {
            minValue = num;
        }
    }
    return [maxValue, minValue];
};
console.log(findMinMax(...numbers));

// 3.2 destructing where [] goes left side of equal sign
// min holds the first return value of findMinMax function and max holds 2nd return value
const [min, max] = findMinMax(...numbers);
console.log(min, max);

// Task 4 using set() method to avoid duplicate values
const uniqueValues = new Set();
uniqueValues.add(24);
uniqueValues.add(15);
uniqueValues.add(09);
uniqueValues.add(-09);
uniqueValues.add(39);
uniqueValues.add(-09);
uniqueValues.add(39);

console.log(uniqueValues);

