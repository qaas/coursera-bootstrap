$(document).ready(function() {
    $('#sitecarousel').carousel({
        interval: 2000
    });
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#sitecarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#sitecarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#modallogin').click(function() {
        $('#loginmodal').modal('show')
    });
    $('#modalform').click(function() {
        $('#formmodal').modal('show')
    });

 })