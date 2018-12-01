$(document).ready(function($){

  $('a').on('click', function(e){
    getLocation();
  })

  function getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(loc){
        var latlng = loc.coords.latitude + ',' + loc.coords.longitude;
        getCity(latlng);
      });
    }
  }

  function getCity(latlngInput){
    $.ajax({
      url : 'https://maps.googleapis.com/maps/api/geocode/json',

      data : {
        'latlng' : latlngInput
      },

      dataType : 'json',

      success: function(r){
        $('.content').text(r.results[1].formatted_address);
      },

      error : function(e){
        console.log('error', e);
      }
    });    
  }


});