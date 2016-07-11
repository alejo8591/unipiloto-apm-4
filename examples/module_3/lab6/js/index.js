$(document).ready(function(){
    $('.error').hide();
    $('.submit').click(function(event){
        $('.infobox').each(function(){
            var data = $(this).val();
            var len = data.length;

            if(len < 1){
                $(this).parent().find('.error').show().text("Por favor ingrese texto");
            }
            else{
                $(this).parent().find('.error').hide();
            }
        });
        event.preventDefault();
    });
});