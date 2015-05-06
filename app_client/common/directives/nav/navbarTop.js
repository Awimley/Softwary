(function(){
  angular
    .module('reviewModule')
    .directive('naviTop', naviTop);

  function naviTop () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/nav/navbarTop.html'
    };
  }
})();