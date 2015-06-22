console.log('I am working');

$(document).ready(function() {


  $.get('/activities', function(response) {
    $.each(response, function(index, activity) {
      $('.activity-feed-wrapper').append('<div>' + activity.title + '</div>');
    })
  })


})