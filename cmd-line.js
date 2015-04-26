//  THIS IS A PHANTOMJS SCRIPT
var system = require('system');
var fs = require('fs');

system.stdout.writeLine('Email address: ');
var email = system.stdin.readLine();
system.stdout.writeLine('Password: ');
var password = system.stdin.readLine();

console.log("Your username is: ", email);
console.log("Your password is: ", password);

console.log('*****************');

var contacts = fs.read('Contacts.csv');
console.log('contacts: ', contacts);

phantom.exit();