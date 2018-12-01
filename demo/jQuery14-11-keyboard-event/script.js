$(document).ready(function($){

  $('button').on('click', function() {
    $(this).text('I have been clicked');
  })

  $('body').on('keydown', function (e) {
    if(e.ctrlKey === true){
      if(e.keyCode === 74 || e.keyCode === 67){
        $('button').click();
      }

    }
    console.log('I have been keydown', e);
  });
});
