$('.navbar-toggler').on("click", function () {
    if ($('.navbar')[0].classList.contains('rd-navbar')) {
        $('.navbar')[0].classList.remove('rd-navbar');
    } else {
        $('.navbar')[0].classList.add('rd-navbar');
    }
});