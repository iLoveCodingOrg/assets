var app = angular.module('FullflashApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', 
    {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });
  
  $routeProvider.when('/about', 
    {
      templateUrl: 'about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    });
}]);

app.controller('HomeController', ['$location', function($location){
  var ctr = this;
  ctr.text = "Home Text";
  
  ctr.gotoPage = function(page){
    $location.path(page);
  }
}]);

app.controller('AboutController', ['$location', function($location){
  var ctr = this;
  ctr.text = "About Text";

  ctr.gotoPage = function(page){
    $location.path(page);
  }
}]);