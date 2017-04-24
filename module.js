// this module contains directory reading and filtering function.

module.exports = function(dir, ext, cb){
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dir,function(err,data){
    if (err){
      return cb(err)
    }
    else{
      cb(null, data.filter(function(item){
        var extension = path.extname(item).substring(1);
        if(extension === ext)
          return item;
      }));
    }
  });
};
