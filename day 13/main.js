
// console.log("hello world");


// console.error("this is an error");

// console.warn("this is a warning");

//var, let, const
//dont use var
let age = 0;
age = 15;
console.log(age);
//const
const gravity = 9.8;
// gravity = 9.8;
console.log(gravity);

//data types
//number, string, undefined, null, boolean, symbol
let score;
score = 50;
console.log(typeof score);

score = 'tens';
console.log(typeof score);

score = true;
console.log(typeof score);

score = undefined;
console.log(typeof score);

score = null;
console.log(typeof score);

//strings
//old way
const name = 'john';
const greeting = 'hello, ' + name;
console.log(greeting);

//new way
const name1 = 'john';
//this is not single quote its backtick
const greeting1 = `hello, ${name1}`;
console.log(greeting1);

console.log(greeting1.length);