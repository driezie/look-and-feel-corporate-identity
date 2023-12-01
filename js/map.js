function initialize() {
    var myLatlng = new google.maps.LatLng(9.9674588,76.2839576);
    var mapOptions = {
      zoom: 14,
      draggable: true,
      scrollwheel: false,
      center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p><b>Test</b></br>'+
        '222 Limestone Crescent</br>'+                 
        '<a href="https://www.google.com/" target="_blank">View on map</a>'
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Abbey Road Entertainment'
    });
     infowindow.open(map,marker);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);