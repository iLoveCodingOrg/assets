var app = angular.module('myApp', []);

app.controller('FirstController', [function(){
  
}]);

app.directive('myPhone', [function(){
  return {
    restrict: 'C',
    //template: '<div>1.800.My-Phone</div>',
    templateUrl : '/view/phone.html',
    link: function($scope, element, attr){
      element.on('click', function(){
        element.text('new Text');
        element.addClass('awesome');
      })
    }
  }
}]);