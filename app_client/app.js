(function () {

angular.module('reviewModule', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'ui.tinymce', 'ngResource']);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl  : 'landing/landing.html',
      controller   : 'landingCtrl',
      controllerAs : 'vm'
    })
    .when('/createReview', {
      templateUrl  : 'home/createReview.html',
      controller   : 'createReviewCtrl',
      controllerAs : 'vm'
    })
    .when('/createTemplate', {
      templateUrl  : 'templates/createTemplate.html',
      controller   : 'createTemplateCtrl',
      controllerAs : 'vm'
    })
    .when('/overview', {
      templateUrl: 'home/overview.html',
      controller: 'overview',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});

  //remove gnarly /#/ from html route
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  tinymce.init({
    plugins: "image",
    image_list: [ 
      {title: 'My image 1', value: 'http://www.tinymce.com/my1.gif'},
      {title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif'}
    ]
  });
}

angular
  .module('reviewModule')
  .config(['$routeProvider', '$locationProvider', config]);
})();