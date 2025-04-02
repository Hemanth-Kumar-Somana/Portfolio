// JavaScript to highlight active link in navbar
$(document).ready(function () {
    $('a.nav-link').on('click', function () {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

// Optional custom JS to ensure navbar closes when clicking outside of it
$(document).ready(function(){
    $('.navbar-toggler').click(function() {
        $('#navbarNavAltMarkup').toggleClass('show');
    });
});
