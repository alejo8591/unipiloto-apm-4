var url = require('url');

// Exportando metodo logic.nabvar para poder utilizar en cualquier parte del ejercicio
exports.navbar = function(){
	// Returnando un arreglo con una estructura html para que funcione como templeate y se pueda llamar desde varias partes
	return [
		'<div class="navbar">',
		'<p><a href="/">Home</a></p>',
		'<p><a href="/squared">Exponencial</a><p></div>'
	].join('\n');
};

// Estructura del template para todo el ejercicio
/*
 * El template tiene la siguiente estructura
 * @title: lleva un titulo el cual depende de la pagina
 * @navbar: lleva un menu de navegacion muy basico
 * @content: lleva un contenido el cual cambia segun la url
*/
exports.page = function(title, nabvar, content){

	/*
	 * Tecnica templating sencilla para gestionar los elementos
	 * que se entregan en el arreglo; utilizando replace, metodo
	 * especifico de JS para este proposito
	*/
	return [
			'<!DOCTYPE html><html><head><meta charset="utf-8" />',
			'<title>{title}</title></head><body>',
			'<h1>{title}</h1>',
			'<table><tr>',
			'<td>{navbar}</td></tr>',
			'<tr><td>{content}</td>',
			'</tr></table></body></html>'
	].join('\n')
	.replace('{title}', title, 'g')
	.replace('{title}', title, 'g')
	.replace('{navbar}', nabvar, 'g')
	.replace('{content}', content, 'g');
};

/*
 * parametro que resuelve las URL en caso de que la operacion seleccionada sea squared
 * verifica que el parametro se un numero, de lo contrario lo declara como NaN (Not a Number)
*/
exports.loadParameters = function(req, res, next){

	req.requrl = url.parse(req.url, true);

	req.a = (req.requrl.query.a && !isNaN(req.requrl.query.a)) ? new Number(req.requrl.query.a) : NaN;

};