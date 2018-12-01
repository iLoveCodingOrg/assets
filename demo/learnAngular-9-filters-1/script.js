var app = angular.module('fillApp', []);
app.controller('FillController', function(){
  var ctr = this;
  ctr.carInventory = [
    {
      model: 'Corolla',
      make: 'Toyota',
      year: '2016-01-01',
      price: '301142',
      sixtyseconds: '10.212'
    },
    {
      model: 'Corolla',
      make: 'Toyota',
      year: '2015-01-01',
      price: '271492',
      sixtyseconds: '10.72'
    },
    {
      model: 'Camry',
      make: 'Toyota',
      year: '2014-01-01',
      price: '191315',
      sixtyseconds: '9.738'
    },
    {
      model: 'Accord',
      make: 'Honda',
      year: '2016-01-01',
      price: '287214',
      sixtyseconds: '9.244'
    },
    {
      model: 'Civic',
      make: 'Honda',
      year: '2014-01-01',
      price: '25689',
      sixtyseconds: '11.188'
    },
    {
      model: 'Civic',
      make: 'Honda',
      year: '2016-01-01',
      price: '20212',
      sixtyseconds: '8.896'
    },
    {
      model: 'Model S 70D',
      make: 'Tesla',
      year: '2016-01-01',
      price: '102000',
      sixtyseconds: '5.412'
    },
    {
      model: 'Model S 70D',
      make: 'Tesla',
      year: '2017-01-01',
      price: '80000',
      sixtyseconds: '4.587'
    },
    {
      model: 'Model S 70D',
      make: 'Tesla',
      year: '2014-01-01',
      price: '90000',
      sixtyseconds: '4.645'
    },
  ];
  
});