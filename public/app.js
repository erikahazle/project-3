// console.log('I am working');
var geocoder;
var infowindow = null;
var map;

var geocoder;
var map;


function initialize() {
  // geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(51.50722, -0.12750);
  var mapOptions = {
    zoom: 12,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}



$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize);

  $.get('/activities', function(response) {
    $.each(response, function(index, activity) {
      $('.activity-feed-wrapper').append('<div>' + activity.title + '</div>');
    })
  })


})