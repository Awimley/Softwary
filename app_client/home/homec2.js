(function(){
  angular
    .module('reviewModule')
    .controller('homec2', homec2);

  homec2.$inject = ['$scope', '$log', '$http', 'testData'];
  function homec2 ($scope, $log, $http, testData){
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