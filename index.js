var request = require('request');

var url = process.argv[2] || '';
var timeout = process.argv[3] || 5000;

var doRequest = function(){
    request(url, function (error, response, body) {
      console.log(response.statusCode);
      if (!error && response.statusCode !== 200) {
        console.log(body) // Show the HTML for the Google homepage.
      }
    });
};

doRequest();
setInterval(function(){
    doRequest();
},timeout);
