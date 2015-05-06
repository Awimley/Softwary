(function(){
  angular
    .module('reviewModule')
    .directive('scrolling', scrolling);

    function scrolling ($window) {
    return function (scope, element, attr) {
      angular.element($window).bind("scroll", function () {
        if (this.pageYOffset >=3) {
            scope.boolClass = true;
            scope.boolClassChange = false;
            console.log('scrolled');
        } else {
            scope.boolClass = false;
            console.log('header back');
        }
        scope.$apply();
        })
      }
    }
})()