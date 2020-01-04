$(function(){
    $('.container').each(function(){
       $(this).closest('section').css('padding-top',(($(this).closest('section').height() - $(this).height()) / 2 ));
    });
    $('.botui-message:nth-child(1)').fadeIn(1000, function(){
        $('.botui-message:nth-child(2)').fadeIn(1000, function(){
            setTimeout(function(){
                $('.botui-message:nth-child(2)').fadeOut(500, function(){
                    $('.botui-message:nth-child(3)').fadeIn(1000, function() {
                        setTimeout(function(){
                            $('.botui-message:nth-child(4)').fadeIn(1000, function(){
                                setTimeout(function(){
                                    $('.botui-message:nth-child(5)').fadeIn(1000, function(){
                                        setTimeout(function(){
                                            $('.botui-message:nth-child(5)').fadeOut(500, function(){
                                                $('.botui-message:nth-child(6)').fadeIn(1000, function() {
                                                    setTimeout(function(){
                                                        $('.botui-message:nth-child(7)').fadeIn(1000, function(){
                                                            setTimeout(function(){
                                                                $('.botui-message:nth-child(8)').fadeIn(1000, function() {
                                                                    setTimeout(function(){
                                                                        $('.botui-message:nth-child(8)').fadeOut(500, function(){
                                                                            $('.botui-message:nth-child(9)').fadeIn(1000, function() {
                                                                                setTimeout(function(){
                                                                                    $('.botui-message:nth-child(10)').fadeIn(1000, function(){
                                                                                        setTimeout(function(){
                                                                                            $('.botui-message:nth-child(10)').fadeOut(500, function(){
                                                                                                $('.botui-message:nth-child(11)').fadeIn(1000);
                                                                                            });     
                                                                                        }, 1000);
                                                                                    });
                                                                                }, 1000);
                                                                            });
                                                                        });
                                                                    }, 1000);
                                                                });
                                                            }, 1000);
                                                        });
                                                    }, 3000);
                                                });
                                            });
                                        }, 1000);
                                    });
                                }, 1000);
                            });
                        }, 3000);
                    });
                });
            }, 1000);
        });
    });

})