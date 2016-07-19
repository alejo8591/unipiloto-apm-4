var logic = require('./logic');


// Metodo que se exporta o publica para poder ser usado en la resolucion de URLs
exports.get = function(req, res){

	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	// En el envio y cierre de la cabecera con peticion GET cargamos de logic
	// la estructura basica de una pagina que su base es `exports.page`
	res.end(
		logic.page('Operación Matemática', logic.navbar(), '<p>Operación Matemática</p>')
	);
};