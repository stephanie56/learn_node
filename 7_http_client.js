// HTTP COLLECT (Exercise 8 of 13)
//
//   Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
  res.setEncoding('utf8');
  var str = [];
  res.on('data', function(data){
    str.push(data);
  }).on('end', function(e){
    var result = str.join('');
    console.log(result.length + '\n' + result);
  });
});
