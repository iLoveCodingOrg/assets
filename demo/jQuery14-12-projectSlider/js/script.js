$(document).ready(function($){
  var imageWidth;

  var imageBox      = $('.slider ul'),
      imageQuantity = $('.slider ul').children('li').length, // 3
      currentImage  = 1;

  $('.slider ul li').first().children('img').load(function(){
    imageWidth    = this.width;
    console.log(imageWidth);
    imageBox.css('width', imageWidth*imageQuantity);
  });

  $('.nav button').on('click', function(){
    var whichButton = $(this).data('nav');
    
    if(whichButton === 'next'){
      if(currentImage === imageQuantity){
        currentImage = 1;
        transition(currentImage, imageWidth);
      }else{
        currentImage++; // 4
        transition(currentImage, imageWidth);
      }

    }else if(whichButton === 'prev'){
      if(currentImage === 1){
        currentImage = imageQuantity;
        transition(currentImage, imageWidth);
      }else{
        currentImage--;
        transition(currentImage, imageWidth);        
      }
    }

  });

  function transition(currentImageInput, ImageWidthInput){
    var pxValue = -(currentImageInput-1) * ImageWidthInput

    imageBox.animate({
      'left' : pxValue
    });
  }
});



// -(1-1) * width = -0
// -(2-1) * width = -500
// -(3-1) * width = -1000

























