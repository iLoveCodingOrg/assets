$(document).ready(function(){
  // Event Deligation
  $('body').on('click', 'a.deligation', function(){
    $(this).css('color', 'red');
  });

  // Event Bubbling
  $('a.bubbling').on('click', function(e){
    $(this).css('font-weight', 'bold');
    e.stopPropagation();
    console.log(e);
  });

  $('.main-class').on('click', function(){
    $(this).css({
      'background-color': 'black',
      'color': 'white'
    })
  });

  // Prevent Defaults

  $('a.preventDefaults').on('click', function(e){
    $(this).css('font-size', '200%');
    e.preventDefault();
  })























});