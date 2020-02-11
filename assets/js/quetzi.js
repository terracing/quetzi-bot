$(function(){
    $(window).scroll(function () {
        console.log($(window).scrollTop())
        $('img#back').css('right',-($(window).scrollTop()) + 'px')
    })
    
});