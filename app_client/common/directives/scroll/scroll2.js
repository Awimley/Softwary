(function(){
  angular
    .module('reviewModule')
    .directive('scrolling2', scrolling2);
    function scrolling2 ($window) {
    return function (scope, element, attr) {
      angular.element($window).bind("scroll", function () {
        if (this.pageYOffset >=3) {
            document.getElementById("title-top").className = "";
            scope.boolClass2 = false;
            console.log('title should be there');
        } else {
            document.getElementById("title-top").className = "hideMe";
            scope.boolClass2 = true;
            console.log('title gone');
        }
        scope.$apply();
        })
      }
    }
})()