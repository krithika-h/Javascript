const fs = require('fs');


fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString()); //if u print just data, then u'll get buffer data
});

// writing to a file, first argument creates that file, 2nd is data, 3rd is error option
fs.writeFile('user-data.txt', 'username=Max', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Wrote to file!');
  }
});


