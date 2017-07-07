$(document).ready(function(){
        $("#singleImageCarousel").owlCarousel({
            items: 1,
            singleItem: true,
            loop: true
        });
    
        $("#forthImageCarousel").owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            items: 4,
            dots: false
        });

        $("#feedback-carousel").owlCarousel({
            items: 1
        });

        //Map for google map
        var map;

        var header = $("header");

        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
    }
);

/*
    Function for opening tab content
 */
function openTabContent(evt, tabId) {


    //Remove active tab-content
    $(".tabcontent.content-active").removeClass("content-active");

    //
    $(".tabcontent").each( function () {
        $(this).addClass("content-hidden");
    });

    $(".tablinks.link-active").removeClass("link-active");


    $("#" + tabId).addClass("content-active").removeClass("content-hidden");
    evt.currentTarget.className +=" link-active";
}

function initMap() {

    var myLatLng = {lat: -25.363, lng: 131.044};

    map = new google.maps.Map(document.getElementById('map-wrapper'), {
        center: myLatLng,
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
