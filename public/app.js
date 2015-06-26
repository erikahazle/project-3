// Google maps integration
var geocoder;
var map;
var addresses = [];


/**************************
GOOGLE MAPS
**************************/

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
      animation: google.maps.Animation.DROP,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}],
      zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
      }
    }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
  
// Create the info window on the map


// Function for GeoCoding (we may have to put in a proper API key as we could potentially make to many calls. If you get errors this could be the cause)
function codeAddress() {
// Loop for adding multiple addresses to the map
  for (var x = 0; x < addresses.length; x++) {
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
        // console.log(data.results);
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
          new google.maps.Marker({
            position: latlng,
            map: map
          });
        });
      }
    }

/****************************
USER ACTIONS
****************************/

function deleteActivity(button, activityId) {
  $.ajax({
    type: 'POST',
    url: '/deleteactivity',
    data: {activity_id: activityId},
    dataType: 'json'
  }).done(function(response) {
    console.log(response);
    button.parent().remove();
  })
}

$(document).ready(function() {

  if ($('#map-canvas').length > 0) {
    google.maps.event.addDomListener(window, 'load', initialize);
    $.get('/activities', function(response) {
      var activities = response
      $.each(response, function(index, activity) {
        addresses.push(activity.address);
      })
      codeAddress();
    })
  }
  
  $('.book-button').on('click', function(e) {
    e.preventDefault();
    $this = $(this);
    console.log('button click')
    var activity_id = ($(this).data('activity'));
    $.ajax({
      method: 'POST',
      url: '/bookactivity',
      dataType: 'json',
      data: { activity_id: activity_id }
    }).done(function(response) {
      $this.html('Booked');
      $this.css('background-color', 'pink');
    })
  })

  $('.cancel-activity').on('click', function(e) {
    var activityDeleteButton = $(this);
    var activity_id = $(this).data('activity');
    deleteActivity(activityDeleteButton, activity_id);
  })
  
  if ($('#imgset').length > 0) {
    $.get('/imagelist', function(response) {
        $.each(response, function(index, activity) {
          // --
           // $('.activity-feed-wrapper').append('<a href="' + activity._id + '"><li><div class="activity-info">' + activity.title + '</div><a href="/' + activity._id + '"><img class="activity_img" src="images/' + activity.image + '"></a></li></a>');
           $('.activity-feed-wrapper').append('<a href="http://localhost:3000/activitylist"><li><div class="activity-info">' + activity.title + '</div><a href="/http://localhost:3000/activitylist"><img class="activity_img" src="images/' + activity.image + '"></a></li></a>');
           // --
        })
    })
  }

})

