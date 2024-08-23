const s = "hello,world";

console.log(s.substring(0, 5));
console.log(s.slice(0, 5));
//split it into an array
console.log(s.split(","));


//arrays

const arr2 = new Array(1, 2, 3, 4, 5);
//or 
//can use different data types
const arr = [1, 2, 3, 4, 5, true, "hello"];

// console.log(arr[1]);

arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.isArray);
console.log(arr.length);
console.log(arr.join());

//objects
const person = {
    name: "john",
    lastname: "doe",
    age: 30,
    hobbies: ["music", "photography"],
    address: {
        street: "123 main st",
        city: "new york",
        state: "ny"
    },
    sayHello: function () {
        console.log("hello");
    }


};
console.log(person.name, person.lastname);
console.log(person.age);
console.log(person.hobbies[0]);
console.log(person.address.state);
person.sayHello();

const { name, lastname, hobbies, address: { state } } = person;
console.log(name, lastname);

person.age = 31;
console.log(person);

//arrays of objects
const todos = [
    {
        id: 1,
        text: "take out trash",
        isCompleted: true,

    },
    {
        id: 2,
        text: "meeting with boss",
        isCompleted: true,

    },
];
//gives 1 index text property value
console.log(todos[1].text);
//convert object to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//while loop
let i = 0;
while (i < todos.length) {
    console.log(todos[i].text);
    i++;
}

//for of loop
for (let todo of todos) {
    console.log(todo.text);
}

//foreach
todos.forEach(function (todo) {
    console.log(todo.text);
});
console.log("foreach done");

//map
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompleted);

//find
const todo = todos.find(function (todo) {
    return todo.id === 1;
});
console.log(todo);

//conditional ternary operator
const x = 10;
const color = x > 10 ? "red" : "blue";
console.log(color);

//contition
if (x > 10) {
    console.log("x is greater than 10");
} else if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than 5");
}
// === vs ==
// == will check if the values are the same and will convert the types to do so
// === will check if the values and types are the same without converting the types
// so === is much faster and more reliable than ==

//switch
const grade = "A";
switch (grade) {
    case "A":
        console.log("Great job!");
        break;
    case "B":
    case "C":
        console.log("Well done");
        break;
    case "D":
        console.log("You passed");
        break;
    case "F":
        console.log("Better try again");
        break;
    default:
        console.log("Invalid grade");
}

//ternary operator
const isAuthenticated = true;
const className = isAuthenticated ? "logged-in" : "logged-out";
console.log(className);

//functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5, 10));
console.log(addNums(5));
console.log(addNums(5, 10, 15, 20));
console.log(addNums());
console.log(addNums(5, 10, 15, 20, 25, 30));

function Person (name, lastname) {
    this.name = name;
    this.lastname = lastname;
}
const person1 = new person("john", "doe");
console.log(person1.name, person1.lastname);

//arrow functions
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums2(5, 10));
console.log(addNums2(5));
console.log(addNums2(5, 10, 15, 20));
console.log(addNums2());


//instantiate object
function Person2(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

const person2 = new Person2("john", "doe");
console.log(person2.name, person2.lastname);

//classes
class Person3 {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    //methods
    sayHello() {
        console.log("hello");
    }

    //computed property
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }

    //setter
    set fullName(name) {    
        const words = name.split(" ");
        this.name = words[0];
        this.lastname = words[1];
    }
}
const person3 = new Person3("john", "doe");
console.log(person3.name, person3.lastname);




