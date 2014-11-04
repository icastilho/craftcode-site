angular.module('siteApp', ['ngRoute'])

 .controller('SiteCtrl', function($scope, $routeParams) {
    $scope.sele = 'startups';
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'SiteCtrl',    
  })
   .when('/home', {
    templateUrl: 'home.html',
    controller: 'SiteCtrl',    
  })
  .when('/how', {
    templateUrl: 'how.html',
    controller: 'SiteCtrl',    
  })
  .when('/about', {
    templateUrl: 'about.html',
    controller: 'SiteCtrl',    
  })
  .when('/portfolio', {
    templateUrl: 'portfolio.html',
    controller: 'SiteCtrl',    
  })
  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'SiteCtrl'
  });  
   
});