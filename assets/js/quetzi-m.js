$(function () {
    $('.sidenav').sidenav({
        inDuration: 900,
        outDuration: 900
    });

    var botui = new BotUI('my-botui-app');

    closeModal = function () {
        botui.message.removeAll();
    }
    $('.modal').modal({
        'onCloseEnd': closeModal
    });

    $(window).scroll(function () {
        const Bits = $('section#bits').offset();
        if ($(window).scrollTop() >= Bits.top) {
            $('body > header').fadeIn(200)
        } else {
            $('body > header').fadeOut(200)
        }

        const Contact = $('section#contact').offset();
        if ($(window).scrollTop() >= (Contact.top - 50)) {
            $('body > header').addClass('contact-header');
        } else {
            $('body > header').removeClass('contact-header')
        }
    })


    $('#bot-modal').on('click', function () {
        botui.message.removeAll();
        botui.message.add({
            content: '¡Hola! Soy Quetzi'
        }).then(function () {
            botui.action.button({
                delay: 1000,
                autoHide: false,
                action: [{
                    icon: 'hand-peace-o',
                    text: 'Hola',
                    value: 'hello'
                }]
            }).then(function (res) {
                botui.action.hide();
                botui.message.add({
                    delay: 2000,
                    loading: true,
                    content: 'Estoy aquí para ayudar a la comunidad docente a crear contenidos geniales.'
                }).then(function () {
                    botui.action.button({
                        delay: 2000,
                        action: [{
                                icon: 'paper-plane',
                                text: '¿Cómo haces eso?',
                                value: 'como'
                            },
                            {
                                icon: 'meh-o',
                                text: 'Otro día',
                                value: 'nah'
                            }
                        ]
                    }).then(function (res) {
                        if (res.value == 'como') {
                            botui.message.add({
                                delay: 2000,
                                loading: true,
                                content: 'A través de bits de información práctica que les muestra como desarrollar lo que imaginan.'
                            }).then(function () {
                                botui.action.button({
                                    delay: 1000,
                                    action: [{
                                            icon: 'spinner',
                                            text: '¿Bits de qué?',
                                            value: 'bits'
                                        },
                                        {
                                            icon: 'plane',
                                            text: 'Ah, sí, los bits',
                                            value: 'nah'
                                        }
                                    ]
                                }).then(function (res) {
                                    if (res.value == 'bits') {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            content: 'Revisa la sección de [bits](#bits) para que veas de qué hablo.'
                                        }).then(function () {
                                            botui.message.add({
                                                delay: 2000,
                                                loading: true,
                                                content: 'No olvides suscribirte al [boletín de noticias](#newsletter) para mantenerte al tanto de mis novedades.'
                                            });
                                        });
                                    } else {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            content: 'No olvides suscribirte al [boletín de noticias](#newsletter) para mantenerte al tanto de mis novedades.'
                                        });
                                    }

                                });
                            });
                        } else {
                            botui.message.add({
                                delay: 2000,
                                loading: true,
                                content: 'No olvides suscribirte al [boletín de noticias](#newsletter) para mantenerte al tanto de mis novedades.'
                            });
                        }
                    });
                });
            });
        });
    })
})