// Google maps integration
var geocoder;
var map;
var addresses = [];

// Function to create and place a google map. Sets the lat and long to London
function initialize() {
  geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(51.50722, -0.12750);

    var mapOptions = {
      zoom: 13,
      minZoom: 12,
      center: latlng,
      scrollwheel: false,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}],
      zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
      }
    }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

// Function for GeoCoding (we may have to put in a proper API key as we could potentially make to many calls. If you get errors this could be the cause)
function codeAddress() {
// Loop for adding multiple addresses to the map
  for (var x = 0; x < addresses.length; x++) {
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
          new google.maps.Marker({
            position: latlng,
            map: map
          });
        });
      }
    }

$(document).ready(function() {


  if ($('#map-canvas').length > 0) {
    google.maps.event.addDomListener(window, 'load', initialize);
    $.get('/activities', function(response) {
      $.each(response, function(index, activity) {
        // codeAddress(activity.address);
        // Pushes address to an array named addresses. This is used because we want to add many pins to map. 
        addresses.push(activity.address);
        // console.log(addresses);
        // $('.activity-feed-wrapper').append('<div>' + activity.title + activity.address + '</div>');
        $('.activity-feed-wrapper').append('<div><a href="/' + activity._id + '">' + activity.title + '</a></div>');
      })
      codeAddress();
    })
  }
  
  // ajax request to server
  // response holds array of activities returned.
  $.get('/activitylist', function(response) {
    var activities = response;
    console.log(response.activities);
    // console.log(activities);
    // (index, ) is the index position in the array
    // $.each(activities, function(index, activity) {
    //   console.log(activity);
    //   // pull #activity-item-template from the DOM of the script form
    //   // activity, is the data...  $('#activity-ul') is where appending to.
    //   View.render($('#activity-item-template'), activity, $('#activity-ul'));
    // })
  })

});
  //   $.get('/activity/:id', function(response) {
  //     console.log("yo" + this);
// })
