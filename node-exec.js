var sys = require('sys');
var child_process = require('child_process');
var fs = require('fs');
// var exec = require('child_process').exec;
// var child;

// child = exec("pwd", function (error, stdout, stderr) {
//   sys.print('stdout: ' + stdout);
//   sys.print('stderr: ' + stderr);
//   if (error !== null) {
//     console.log('exec error: ' + error);
//   }
// });

child = child_process.spawn("ls", {
    stdio: [
      'pipe',
      'pipe', 
      'pipe' 
    ]
});