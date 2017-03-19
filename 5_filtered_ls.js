// ## FILTERED LS (Exercise 5 of 13)
//
//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.
//
//   The list of files should be printed to the console, one file per line. You
//   must use asynchronous I/O.

var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list){
  if(err) {
    throw err;
  }
  list.filter(function(file){
    var extention = path.extname(file).substring(1);
    if(extention === ext)
      console.log(file);
  }); // filter
}
);
