$(document).ready(function(){
	$('.error').hide();

	$('.submit').on('click', function(event){
	       var data = $('.infobox').val();
	       var len = data.length;
	       var c;
               var age = 0;
               var flag = 0;

        for(var i = 0; i < len; i++){
        	c = data.charAt(i).charCodeAt(0);
                // Validando campos negativos
                if(c==45 && i == 0){
                        continue;
                }
                // Validando que sean numeros
        	if(c < 48 || c > 57){
        		$('.error').show();
                        flag=1;
        		event.preventDefault();
        		break;
        	} else {
        		$('.error').hide();
        	}
                // Validando rango de edad
                if (flag === 0){
                        age = parseInt(data);

                        if(age < 18 || age > 70 ){
                                $('.error').show();
                                $('.error').text('Edad invalida debes ser mayor de 18 años o menor de 70');
                                event.preventDefault();
                        }
                };
        }

        event.preventDefault();

	});
});