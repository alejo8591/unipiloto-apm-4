/*
* Servidor web sencillo con Node.JS donde se responde a una ruta
* en este caso "http://127.0.0.1:3333/" con un texto plano
* que dice "Diplomado Unipiloto APM-4"
* */
var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});

	res.end("Diplomado Unipiloto APM-4\n");
});

server.listen(3333);