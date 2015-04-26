var sys = require('sys');
var exec = require('child_process').exec;
var child;

child = exec("phantomjs echo-args.js one two three", function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});