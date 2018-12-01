var app = angular.module('myApp', []);

app.controller('FirstController', [function(){
  
}]);


app.filter('evenOdd', [function(){
  return function(input){
    if(!input || isNaN(input)){
      return '';
      
    }else{
      if(input%2 == 0){
        return input + ', even';
      }else{
        return input + ', odd';
      }
      
    }
    
  }
}]);


app.filter('mask', [function(){
  
  return function(input, value){
    if(input){
  
      var stars = '';
      var startsCount = input.length - value;

      for(var i = 0; i<startsCount; i++){
        stars += "*";
      }    
   
      return input.substr(0, value) + stars;
    }
  }
  
}])