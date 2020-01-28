$(function() {
    $('.sidenav').sidenav({
        inDuration: 900,
        outDuration: 900
    });
    $('.modal').modal();

    $(window).scroll(function(){
        const Bits = $('section#bits').offset();
        if($(window).scrollTop() >= Bits.top) {
            $('body > header').fadeIn(200)
        } else {
            $('body > header').fadeOut(200)
        }

        const Contact = $('section#contact').offset();
        if($(window).scrollTop() >= (Contact.top - 50)) {
            $('body > header').addClass('contact-header');
        } else {
            $('body > header').removeClass('contact-header')
        }
    })
})