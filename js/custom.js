$(document).ready(function() {

    function changeNavigationbar(){
      if ($(this).scrollTop() > 0) { // this refers to window
          $('.navbar-default').addClass('navbar-scroll');
      } else {
          $('.navbar-default').removeClass('navbar-scroll');
      }
    }
    changeNavigationbar();

    $(window).scroll(function() {
        changeNavigationbar();
    });



    // Google Map function
    function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      scrollwheel: false,
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    marker = new google.maps.Marker({
    position: new google.maps.LatLng(44.5403, -78.5463),
    map: map,
    icon: 'images/pin.png',
    animation: google.maps.Animation.DROP,
    title:"Hello World!"
    })
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);

});