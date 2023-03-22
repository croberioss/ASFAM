$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            mensagem:{
                required: true
            }
        },

        messages: {
            nome:'Por favor, insira o seu nome',
            email:'Por favor, insira o seu email',
            mensagem: 'Por favor insira a sua mensagem'
        }
    })


})