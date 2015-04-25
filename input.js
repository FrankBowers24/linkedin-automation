var lineReader = require('line-reader');
var prompt = require('prompt');

prompt.start();

prompt.get(['LinkedIn Username', 'Password','Config Filename'], function (err, result) { 
  console.log('Command-line input received:');
  console.log('  LinkedIn Username: ' + result['LinkedIn Username']);
  console.log('  Password: ' + result['Password']);
  console.log('  Password: ' + result['Config Filename'])
});

var getConfigData = function (callback) {
  var urls = [];
  var skills = [];
  lineReader.eachLine('Contacts.csv', function (line, last) {
    var parts = line.split(',');
    if (parts[0] && parts[0].match('http')) {
      urls.push(parts[0]);
    }
    if (parts[1]) {
      skills.push(parts[1]);
    }

    if (last) {
      callback(urls, skills);
    }
  });
}

getConfigData(function (urls, skills) {
  //console.log(JSON.stringify([urls, skills]));
})