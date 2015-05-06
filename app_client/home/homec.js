(function(){
  angular
    .module('reviewModule')
    .controller('homec', homec);

  homec.$inject = ['$scope', '$log', '$http', 'testData'];
  function homec ($scope, $log, $http, testData){
    var vm = this;
    vm.data = {};
    
    vm.postTest = function() {
      $log.debug(vm.data);
      testData.testPost(vm.data)
        .success(function(data){
          console.log('you are here :)');
          console.log(data);
        })
        .error(function(e){
          console.log(e);
        })
    } 
    }



})()