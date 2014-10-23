angular.module('siteApp', ['ngRoute'])

 .controller('SiteCtrl', function($scope, $routeParams) {
    
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
  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'SiteCtrl'
  });  
   
});