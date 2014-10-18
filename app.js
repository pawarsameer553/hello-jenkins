var express = require('express');
//this is a new line added fo test 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello Jenkins');
});
 
app.listen(process.env.PORT || 5000); 
module.exports = app;
