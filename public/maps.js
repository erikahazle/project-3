// console.log('Connected')

// GOOGLE MAPS
// var infowindow = null;
// var map;

// function initialize() {
//   var myLatlng = new google.maps.LatLng(51.50722, -0.12750);
//   var mapOptions = {
//     zoom: ,
//     center: myLatlng
//   }
//   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  // addMarkersToMap(map);
// }

// function addMarkersToMap(map){
//     // console.log("sport_id is: " + sport_id);
//     $.ajax({
//       type: 'GET',
//       url: '/activities'
//       dataType: 'json'
//     }).done(function(data) {
//       $.each(data, function(index, data) {
//         console.log(data);
//         // debugger;
//         var latLng = new google.maps.LatLng(data.latitude, data.longitude);
//         var marker = new google.maps.Marker({
//             position: latLng,
//             map: map
//         });
//         console.log(latLng);
//         var contentString = '<div class="infowindow-content"><h3>' + data.name + '</h3>' +
//         '<div class="google-info-content"><p>' + data.description + '</p></div>' +
//         '<a href="/sports/' + data.sport_id + '/communities/' + data.id + '">Join the community</a></div>'
//         var infowindow = new google.maps.InfoWindow({
//           content: contentString
//         });
//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.open(map,marker);
//         });
//       })
//     })
// }

// $(document).ready(function() {
  
//   if($('#map-canvas').length > 0) {
//     google.maps.event.addDomListener(window, 'load', initialize);
//   }

// })