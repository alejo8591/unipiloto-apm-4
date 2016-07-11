/* Script para validar con una expresión regular el email */
$(document).ready(function(){
    
    $('.error').hide();
    
    $('.submit').bind('click', function(event){
        var data = $('.infobox').val();

        if(valid_email(data)){
            $('.error').hide();
            localStorage.setItem('email', data);
            event.preventDefault();
        }
        else{
            $('.error').html('<h1>Ingrese una dirección de correo valida</h1>');
            $('.error').show();
            event.preventDefault();
        }

        event.preventDefault();
    });

    function valid_email(email){
        var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
        return pattern.test(email);
    }
});
