(function(){

angular
  .module('reviewModule')
  .directive('ratingStars', ratingStars);
  
  function ratingStars () {
    return {
      restrict: 'EA',
      scope: {
        thisRating : '=rating'
      },
      templateUrl: '/common/directives/ratingStar.html'
    };
  }

})();