$(function () {
    sizeBackgroundMain();
    $(window).scroll(function () {
        $('img#back').css('right', -($(window).scrollTop()) + 'px')

        const Info = $('#info').offset();
        if ($(window).scrollTop() >= (Info.top - 150)) {
            $('nav').addClass('no-transparent');
        } else {
            $('nav').removeClass('no-transparent')
        }

        const Contact = $('section#contact').offset();
        if ($(window).scrollTop() >= (Contact.top - 50)) {
            $('nav').addClass('contact-header');
            $('nav').removeClass('no-transparent');
        } else {
            $('nav').removeClass('contact-header');
        }
    })
});

function sizeBackgroundMain() {
    const backWidth = ($('#quetzi').offset().left * 1.2) + 'px';
    $('#back').css({
        'width': backWidth,
        'top': -($('#quetzi').height() * 0.1)
    });
}