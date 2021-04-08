const task3Element = document.getElementById('task-3');

// task 1
function one() {
    alert("!!!! This is first function");
}

function two(name) {
    alert("!! Welcome to this page " + name);
}


// task 2
// one();
two("Rose");

// task 3
task3Element.addEventListener('click',one);

// task 4
function three(name1, name2, name3) {
    let result = name1 + name2+ name3;
    return result;
}

let result = three('Tom ','Max ','Louis');
alert(result);