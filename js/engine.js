$(document).ready(function(){
        $("#singleImageCarousel").owlCarousel({
            items: 1,
            singleItem: true,
            loop: true
        });
    
        $("#forthImageCarousel").owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            items: 4
        });

        $("#feedback-carousel").owlCarousel({
            items: 1
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


