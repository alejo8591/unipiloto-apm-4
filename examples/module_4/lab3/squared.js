'use strict';
var logic = require('./logic');

exports.get = function(req, res){

	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	res.end(

		logic.page('Exponente', logic.navbar(),
			[
				(!isNaN(req.a) ? ('<p> {a} Exponente ^ {a} = {sq} </p>')
                    .replace('{a}', req.a)
                    .replace('{a}', req.a)
                    .replace('{sq}', (req.a * req.a)) : ''),
				'<p>Ingrese un número para calcular</p>',
				'<form name="squared" action="/squared" method="get">',
				'De: <input type="text" name="a">',
				'</form>'
			].join('\n')
		)
	);
};