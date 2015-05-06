var ctrl = require('../controller/testctrl');

module.exports = function(app){
  app.post('/api', ctrl.testD);
}