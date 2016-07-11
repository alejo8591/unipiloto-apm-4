$(document).ready(function(){
	/* Método para agregar nodos después de */
	$('body').append('<ul class="ul"></ul>');
	/* Agregando nodos al elemento anterior */
	$('.ul').append(
		'<li>1</li>'  +
		'<li>2</li>'+
		'<li>3</li>');
});