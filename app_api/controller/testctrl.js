var mongoose = require('mongoose');
var test = mongoose.model('Test');

var sendJsonResponse = function (res, status, content) {
  console.log(content);
  res.status(status);
  res.json(content);
}

module.exports.testD = function(req, res) {
  console.log(req.body);
  var testMongo = new test(req.body);
  testMongo.save(function(err,testMongo){
    if(err) return console.error(err);
    console.dir(testMongo);
  })
  res.send('success');
}