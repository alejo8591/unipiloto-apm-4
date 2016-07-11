/* Script para sumar elementos seleccionado de un select con estilo diferente */
$(document).ready(function(){
    $('.error').hide();
    $('.result').hide();

    $('.submit').bind('click', function(event){
        var count = $('select option:selected').val();

        if(count === 0){
            $('p.result').hide();
            $('.error').show();
            $('.error').text('Debe seleccionar más de un elemento');
        }
        else{
            var selectOptions='';
            $('select option:selected').each(function(){
                selectOptions+=$(this).text() + ", ";
            });

            $('.error').hide();
            $('p.result').show();
            $('p.result').text('Ud. Selecciona el alimento: ' + selectOptions);
        }
        event.preventDefault();
    });
});