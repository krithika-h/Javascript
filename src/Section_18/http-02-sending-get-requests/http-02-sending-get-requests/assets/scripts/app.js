const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

//xhr.response gives json data , we can't directly use it so change use any of the following 2 ways
xhr.responseType = 'json'; //changing the json data to usable data

xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response); //8th line or this line can be used(alternatives)
  const listOfPosts = xhr.response;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
};

xhr.send(); //in respone, you can see the data which u get

// //example changing non json to json :
// const person = { // this is NOT JSON - it's a normal ("raw") JavaScript object!
//   name: 'Max',
//   age: 30,
//   hobbies: [
//       { id: 'h1', title: 'Sports' },
//       { id: 'h2', title: 'Cooking' }
//   ],
//   isInstructor: true
// };

// const jsonData = JSON.stringify(person); // convert raw JS data to JSON data string
// console.log(jsonData); // a string with machine-readable JSON data in it
// console.log(typeof jsonData); // string
// console.log(person)
// console.log(typeof person)

