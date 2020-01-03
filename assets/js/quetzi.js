var botui = new BotUI('my-botui-app');
botui.message.add({
    content: '¡Hola! Soy Quetzi'
}).then(function () { // wait till previous message has been shown.
    botui.message.add({
        delay: 1000,
        loading: true,
        content: 'Estoy aquí para ayudar a la comunidad docente a crear contenidos geniales.'
    }).then(function () {
        botui.message.add({
            delay: 3000,
            human: true,
            content: '¿Cómo haces eso?'
        }).then(function () {
            botui.message.add({
                delay: 1000,
                loading: true,
                type: 'html',
                content: 'A través de <strong>bits</strong> de información práctica que les muestra como desarrollar lo que imaginan.'
            }).then(function () {
                botui.message.add({
                    delay: 3000,
                    human: true,
                    content: '¿Bits de información?'
                }).then(function () {
                    botui.message.add({
                        delay: 1000,
                        loading: true,
                        type: 'html',
                        content: 'Revisa la sección de <a href="#bits">bits</a> para que veas de qué hablo.'
                    }).then(function () {
                        botui.message.add({
                            delay: 2000,
                            loading: true,
                            type: 'html',
                            content: 'No olvides suscribirte al <a href="#noticias">boletín de noticias</a> para mantenerte al tanto de mis novedades.'
                        });
                    });
                });
            });
        });
    });
});

$(function(){
    $('.container').each(function(){
        console.log($(this).closest('section').height())
        $(this).closest('section').css('padding-top',(($(this).closest('section').height() - $(this).height()) / 2 ));
    });
})