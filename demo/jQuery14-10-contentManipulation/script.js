$(document).ready(function(){

  $('.append').on('click', function(){
    $('.select').append($('.target'));
  });

  $('.prepend').on('click', function(){
    $('.select').prepend($('.target'));
  });


  $('.appendTo').on('click', function(){
    $('.target').appendTo($('.select'));
  });

  $('.prependTo').on('click', function(){
    $('.target').prependTo($('.select'));
  });

  $('.before').on('click', function(){
    $('.select').before($('.target'));
  });

  $('.after').on('click', function(){
    $('.select').after($('.target'));
  });
  

  $('.clone').on('click', function(){
    $('.select').clone().appendTo('.header');
  });




















});