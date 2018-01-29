var mapLocation = new google.maps.LatLng(48.919861, 9.455139); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 15, //change zoom here
        center: mapLocation/*,
        scrollwheel: false,
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#dbdbdb"
            }, {
                "visibility": "on"
            }]
        }]*/

    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    //change address details here
    var contentString = '<div class="map-info-box">' + '<div class="map-head">' + '<h3>EDSH</h3></div>' + '<p class="map-address"><i class="fa fa-map-marker"></i> Oberwiese 1, 71522 Backnang<br><i class="fa fa-phone"></i> 07191 64334<br><span class="map-email"><i class="fa fa-envelope"></i> info@edsh.de</span></p>' + '<a href="https://www.google.de/maps/place/Luftsportverein+Backnang-+Heiningen+e.V.+Flugplatz/@48.920222,9.453852,17z/data=!3m1!4b1!4m5!3m4!1s0x4799b5947510ed67:0x622057a2f2821858!8m2!3d48.920222!4d9.456046" target="_blank">Open on Google Maps</a></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    var image = 'img/flag.svg';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'EDSH', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,

        position: mapLocation
    });


    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);

    });

    google.maps.event.addListener(map, "click", function(event) {
        infowindow.close();
    });



    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}



google.maps.event.addDomListener(window, 'load', initialize);


/* ==========================================================================
   Google map modal
   ========================================================================== */

$('#modal-google-map').on('shown.bs.modal', function() {
    initialize();
});


