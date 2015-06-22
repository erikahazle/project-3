var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(51.50722, -0.12750);
  var mapOptions = {
    zoom: 12,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);








// var geocoder;
// var infowindow = null;
// var map;

// var geocoder;
// var map;

// function initialize() {
//   var mapOptions = {
//     zoom: 12,
//     center: new google.maps.LatLng(51.50722, -0.12750)
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }

// function loadScript() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
//       '&signed_in=true&callback=initialize';
//   document.body.appendChild(script);
// }







// function initialize() {
//   // geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(51.50722, -0.12750);
//   var mapOptions = {
//     zoom: 12,
//     center: latlng
//   }
//   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// }

$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize);

  $.get('/activities', function(response) {
    $.each(response, function(index, activity) {
      $('.activity-feed-wrapper').append('<div>' + activity.title + activity.address + '</div>');
    })
  })


})