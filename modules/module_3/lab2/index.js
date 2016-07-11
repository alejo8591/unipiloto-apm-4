
/* objetos y funciones */
var my_object = new Object();

var other_object = {};


my_object = {
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};

my_object.address = 'Cra xxxxxxxxxx';

 
console.log(my_object.firstName);

console.log(my_object['lastName']); 

var key;

for(key in my_object){
	console.log(my_object[key]);
}


// Funciones 
function test(){ index.js
 lab3
 .floo
 .flooignore
 LICENSE
 README.md
 README.md index.html index.js index.js 


10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
  lastName: 'Romero',
  phone: 1137373
};
my_object.address = 'Cra xxxxxxxxxx'
 
console.log(my_object.firstName);
console.log(my_object['lastName']); 
var key;
for(key in my_object){
  console.log(my_object[key]);
}
// Funciones 
function test(){
  console.log('ejecutando una funcion');
}
test();
// usando funcion anonima
var bye_bye = function(){
  console.log('Que tengan una feliz semana santa');
}
bye_bye();

	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();