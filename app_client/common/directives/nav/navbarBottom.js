(function(){
  angular
    .module('reviewModule')
    .directive('naviBottom', naviBottom);

  function naviBottom () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/nav/navbarBottom.html'
    };
  }
})();