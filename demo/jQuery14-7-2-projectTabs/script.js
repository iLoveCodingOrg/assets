$(document).ready(function(){

  $('.tabx .tab1')
  .slideDown()
  .siblings()
  .slideUp();

  $('.tabx-menu a').on('click', function(){
    var tabValue = '.tabx .' + $(this).data('tabx');
    
    $(tabValue)
      .slideDown()
      .siblings()
      .slideUp();
  });

});