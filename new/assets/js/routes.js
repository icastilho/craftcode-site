angular.module('siteApp', ['ngRoute'])

 .controller('SiteCtrl', function($scope, $routeParams, $http) {
    $scope.sele = 'startups';
    $scope.msg = {
        name: '',
        email: '',
        subject: '',
        text: ''
    };
    $scope.msgEnviada = false;
    
    $scope.sendMail = function (){
        $http.get('https://api.mailgun.net/v2/samples.mailgun.org/messages', {
            from: $scope.msg.email,
            to: 'contato@craftcode.com.br',
            subject: $scope.msg.subject,
            text: $scope.msg.text
        });
        $scope.msg = {};
        $scope.msgEnviada = true;
    }
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