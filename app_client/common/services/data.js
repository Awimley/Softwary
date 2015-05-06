 (function(){
 angular
  .module('reviewModule')
  .service('testData', testData);

  testData.$inject = ['$http'];
  function testData ($http) {
   var testPost = function (postData) {
    return $http.post('/api', postData);
    }
  return {
    testPost : testPost
  };
  }
  
  
 })()