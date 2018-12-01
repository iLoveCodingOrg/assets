var app = angular.module('FullflashApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', 
    {
      templateUrl: 'views/view-user.html',
      controller: 'ViewUserController',
      controllerAs: 'view'
    });
  
  $routeProvider.when('/edit', 
    {
      templateUrl: 'views/edit-user.html',
      controller: 'EditUserController',
      controllerAs: 'edit'
    });
}]);

app.controller('EditUserController', ['$location', 'profileService', function($location, profile){
  var ctr = this;
  ctr.name    = profile.name;
  ctr.age     = profile.age;
  ctr.passion = profile.passion;
  
  ctr.gotoPage = function(page){
    $location.path(page);
  }
  
  ctr.save = function(){
    profile.name    = ctr.name;
    profile.age     = ctr.age;
    profile.passion = ctr.passion;
    
    ctr.gotoPage('/');
  }
}]);

app.controller('ViewUserController', ['$location', 'profileService', function($location, profile){
  var ctr = this;
  ctr.name    = profile.name;
  ctr.age     = profile.age;
  ctr.passion = profile.passion;

  ctr.gotoPage = function(page){
    $location.path(page);
  }
}]);

app.service('profileService', [function(){
  this.name     = 'Aziz';
  this.age      = '26';
  this.passion  = 'Coding';
}])