var sys = require('sys');
var readline = require('readline');
var exec = require('child_process').exec;
var child;


var get_password = function (callback) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.setRawMode(true);
  password = ''
  process.stdin.on('data', function (char) {
    char = char + ""

    switch (char) {
      case "\n":
      case "\r":
      case "\u0004":
        // They've finished typing their password
        process.stdin.setRawMode(false);
        callback(password);
        // console.log("\nyou entered: " + password)
        process.stdin.pause()
        break
      case "\u0003":
        // Ctrl C
        console.log('Cancelled')
        process.exit()
        break
      default:
        // More passsword characters
        process.stdout.write('*')
        password += char
        break
    }
  });
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log("Enter your LinkedIn Email: ")
rl.on('line', function (email) {
  // console.log("Email: ", email);
  rl.close();
  console.log("Enter Your LinkedIn Password: ");
  get_password(function (password) {
  	console.log("");
    child = exec("phantomjs echo-args.js " + email + " " + password,
      function (error, stdout, stderr) {
        console.log(stdout);
        // console.log('stderr: ' + stderr);
        // if (error !== null) {
        //   console.log('exec error: ' + error);
        // }
      });
  });
});