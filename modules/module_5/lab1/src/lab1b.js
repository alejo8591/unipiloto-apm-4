var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

for(var i = 0; i < chars.length; i++){
	var vowel = 'no es vocal: ' + chars[i];
	for(var j = 0; j < vowels.length; j++){
		if(chars[i] === vowels[j]){
			vowel = 'si es vocal: ' + chars[i];
		}
	}
	alert("Las vocales del abecedario son: " + vowel);
}