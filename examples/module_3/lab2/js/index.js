
/* Script para validar si el caracter es número o no */
$(document).ready(function(){

        /* Método para ocultar nodos en javaScript */
	$('.error').hide();


        /* a la espera de un evento del tipo click */
	$('.submit').click(function(event){

		var data = $('.infobox').val();

		var len = data.length;

		var c;

                for(var i = 0; i < len; i++){
                	c = data.charAt(i).charCodeAt(0);

                	if(c < 48 || c > 57){
                		$('.error').show();
                		event.preventDefault();
                		break;
                	} else {
                		$('.error').hide();
                	}
                }

                event.preventDefault();

	});
});