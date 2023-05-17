const path = require("path");
const { addNumbers, substractionNUmbers, divitionNumner } = require("./utlis");
const fs = require("fs");

console.log("Result of Add two numbers = ", addNumbers(5, 5));
console.log("Result of substraction two numbers = ", substractionNUmbers(5, 5));
console.log("Result of divition two numbers = ", divitionNumner(100, 5));

// create a file
fs.writeFile(
  path.join(__dirname, "/", "JustAfile.txt"),
  "File created by using node js",
  (err) => {
    if (err) throw err;
    console.log("File Created");
  }
);

// update File
fs.appendFile("JustAfile.txt", "\n Updated text using appendFile", (err) => {
  if (err) console.log(err);
  console.log("Updated File succesfullY");
});

// read a file
fs.readFile("JustAfile.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
