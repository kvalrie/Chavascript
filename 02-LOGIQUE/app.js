var langue = "FR"

if (langue == "FR"){

	console.log("Bonjour")
}
else if(langue == "ES"){
	console.log("hola")
}else{
	console.log("hello")
}

//exo 2 

var score = 20;
var resultat = " ";

if ( score >= 90){
	resultat = " rang A";

}else if ( score <= 50){
	resultat = " rang C";
}

else if (score < 90){
	resultat = " rang B";
}

console.log (resultat)



var singulier = " Hugo";
var nbHugo = "1";
var resultat = " ";

if (nbHugo > 1) {
	resultat = singulier + "s";
}else {
	 resultat = "there is only one " + singulier + " ."
}
console.log(resultat)


