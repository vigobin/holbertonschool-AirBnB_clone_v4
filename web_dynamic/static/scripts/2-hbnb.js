$(document).ready(function () {
  const newdict = {};
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      newdict[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete newdict[$(this).attr('data-name')];
    }
    const list = [];
    $.each(newdict, function (index, value) {
      list.push(index);
    });
    if (list.length === 0) {
      $('.amenities h4').html('&nbsp');
    } else {
      $('.amenities h4').text(list.join(', '));
    }
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
