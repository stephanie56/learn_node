// MY FIRST I/O! (Exercise 3 of 13)
//
//   Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.
//
//   The full path to the file to read will be provided as the first
//   command-line argument (i.e., process.argv[2]).

var fs = require('fs');
var path = process.argv[2];

var str = fs.readFileSync(path).toString();
var length = str.split("\n").length - 1;
console.log(length);
