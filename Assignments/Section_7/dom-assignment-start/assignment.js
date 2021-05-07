// Task 1 - part 1
const task1 = document.getElementById('task-1');

// Task 1 - part 2
const taskNew = document.querySelector('#task-1');
// can also use the following
// since it will take only the first li tag
// const taskNew = document.querySelector("li");
// also other following way to select first li but it takes time for Javascript
// const taskNew = document.querySelector("ul li:first-of-type");

task1.style.backgroundColor = 'black';

taskNew.style.color ='white';

// Task 2 - part 1
const docTitle = document.querySelector('title');
// docTitle.textContent = 'Assignment - Solved!!';

// Task 2 - part 2
const docTitleNew = document.head.querySelector('title');
docTitle.textContent = 'Assignment - Solved!!';

// // Task 3 => works here all elements with h1 tag are selected so will get as array
// you need to access this way => [0]
const selectingH1 = document.getElementsByTagName('h1');
selectingH1[0].textContent = 'Assignment - Solved!!!';

// // Just trying => works
// const h1 = document.querySelectorAll('h1');
// h1[1].textContent = 'Second h1';

// // Just trying
// // here just selects first one so can access directly
// const h1 = document.querySelector('h1');
// h1.textContent = 'Second h1';

