/* Script para verificar elementos con el atributo `checked` */
$(document).ready(function(){
    $('.error').hide();

    $('.submit').click(function(event){
        
        var amount = 0;

        var count = $('input:checked').length;
        if(count === 0){
            $('p.result').hide();
            $('.error').show();
        }
        else {
            $('form').find(':checked').each(function(){
                if($(this).is(':checked')){
                    amount = amount + parseInt($(this).val());
                }
            });
            $('.error').hide();
            $('p.result').show();
            $('p.result').text('La suma de los lenguajes que le gustan es: ' + amount);
        }
        event.preventDefault();
    });
});