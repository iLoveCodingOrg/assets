var app = angular.module('learningServiceFactoryApp', []);

app.controller('FirstController', ['helperService', 'helperFactory', function(hs, hf){
  var ctr = this;
  ctr.number = 0;
  
  ctr.numberSquare = function(numberInput){
    return hs.square(numberInput);
  }
  
  ctr.numberCube = function(numberInput){
    return hf.cube(numberInput);
  }
  
}]);


app.service('helperService', [function(){
  this.square =  function(input){
    return input * input;
  }
  
  this.cube =  function(input){
    return input * input * input;
  }

}]);


app.factory('helperFactory', [function(){
  return {
    square: function(input){
      return input * input;
    },
    
    cube: function(input){
      return input * input * input;
    }
  }

}]);