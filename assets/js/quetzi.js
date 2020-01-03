var botui = new BotUI('my-botui-app');
botui.message.add({
    content: '¡Hola! Soy Quetzi'
}).then(function () { // wait till previous message has been shown.

    botui.message.add({
        delay: 1000,
        human: true,
        content: 'Hello World from human!'
    });
});
botui.action.text({
    action: {
        placeholder: 'Enter your text here'
    }
}).then(function (res) { // will be called when it is submitted.
    console.log(res.value); // will print whatever was typed in the field.
});