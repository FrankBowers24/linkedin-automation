var exec = require('child_process').exec;
var child;
var prompt = require('prompt');

prompt.start();

var schema = {
  properties: {
    Email: {
      required: true
    },
    Password: {
      hidden: true
    }
  }
};


prompt.get(schema, function (err, result) {
  child = exec("phantomjs echo-args.js " + result.Email + " " + result.Password,
    function (error, stdout, stderr) {
      console.log(stdout);
    });
});