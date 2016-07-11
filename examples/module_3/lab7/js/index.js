/* Script para habilitar campos a medida que se va ingresando información */
$(document).ready(function(){
    
    $('.error').hide();

    $('.userid').blur(function(){
        var data = $('.userid').val();

        var len = data.length;

        if(len < 1){
            $('.userid').next().show();
            $('.password').attr('disabled', true);
            $('.confpass').attr('disabled', true);
        }
        else {
            $('.userid').next().hide();
            $('.password').removeAttr('disabled');
            $('.confpass').removeAttr('disabled');
        }
    });

    $('.password').blur(function(){
        var data = $('.password').val();

        var len = data.length;

        if (len < 1 ){
            $('.password').next().show();
            $('.confpass').attr('disabled', true);
        }
        else{
            $('.password').next().hide();
            $('.confpass').removeAttr('disabled');
        }
    });

    $('.confpass').blur(function(){
        if($('.password').val() !== $('.confpass').val()){
            $('.confpass').next().show();
        }
        else{
            $('.confpass').next().hide();
        }
    });
});



