$(document).ready(function(){

  // ANIMATE 1
  // $('.main-class')
  //   .animate({
  //     "margin-top":"40px",
  //     "background-color": "blue"
  //   }, 1000, 'easeInOutElastic', function(){
  //     $('.header').hide();
  //   });

  // ANIMATE 2
  $('body').animate({
    'background-color': 'red'
  },3000)

  $('.main-class').animate({
    "margin-top":"40px",
  }, {
    duration: 3000,
    easing: 'easeInOutElastic',
    complete: function(){
      $('.header').hide();
    },
    start: function(){
      $('.footer').hide();
    },
    step: function(){
      console.log('a step was taken');
    },
    queue: false
  }).animate({
    'background-color': 'red'
  },3000);


});