// Task 1

class Course {

    get price() {
        return '$' + this._price;
    }

    set price(value) {
        if (value < 0) {
            throw 'Invalid Value';
        }
        this._price = value;
    }

    constructor (title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }
    
    calculation() {
        return this.length/this._price;
    }

    outputs() {
        console.log(`Title : ${this.title}, Length : ${this.length}, Price : ${this.price}`)
    }
}

// console.log('Task 1')
const dummy_1 = new Course('HTML', 20, 30);
const dummy_2 = new Course('CSS', 40, 50);

// console.log(dummy_1);
// console.log(dummy_2);

// console.log('Task 2')
// console.log(dummy_1.calculation());
// console.log(dummy_2.calculation());

// dummy_1.outputs();
// dummy_2.outputs();

class PracticalCourse extends Course {
    constructor(title, length, price, numexercies) {
        super(title, length, price);
        this.numOfExercise = numexercies;
    }
}

const newObject = new PracticalCourse('Javascript', 15, 24, 09);
// console.log(newObject);
// newObject.outputs();

class TheoreticalCourse extends Course {
    // we can omit adding constructor also, so we'll get the parent class's constructor
    // constructor(title, length, price) {
    //     super(title, length, price);
    // }

    publish() {
        console.log('Just publishing....')
    }
}

// console.log('Task 3');
const anotherObject = new TheoreticalCourse('Typescript', -500, 200)
console.log(anotherObject);
anotherObject.publish();
anotherObject.outputs();




  