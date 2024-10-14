const { add, subtract } = require("./math.js");

const fs = require("fs");

const http = require("http");

console.log(add(16, 2));
console.log(subtract(16, 2));
console.log(fs);
console.log(http);

fs.writeFileSync("./hello.txt", "Hello World");

const result = fs.readFileSync("./hello.txt", "utf-8");

console.log(result);

fs.readFile("./hello.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

// append
fs.appendFileSync("./hello.txt", " Hello buddy, good evening! \n");

fs.appendFile("./hello.txt", "Hello World, good evening!", (err) => {
  if (err) {
    console.log(err);
  }
});

// copy file
fs.cpSync("./hello.txt", "./hello-copy.txt");

delete file;
fs.unlinkSync("./hello-copy.txt");

// check state

console.log(fs.statSync("./hello.txt"));

// make folder

fs.mkdirSync("./test");

fs.mkdirSync("./test/doc/js", { recursive: true });
