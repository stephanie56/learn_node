var module = require('./module');
var dir = process.argv[2];
var ext = process.argv[3];

// if dir and ext doesn't exit, throws err;
// else, use dir to get a list of file names in directory
module(dir, ext, function(err, data){
  if(err)
    throw err;
  console.log(data);
});
