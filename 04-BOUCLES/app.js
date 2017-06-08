

var increment = 0;
var resultat;

while (increment <= 20){
	
		
		if ((Math.floor(increment/2))*2 != increment){
		console.log( increment + " est impair" );
		}	
		else
		{
		console.log( increment + " est pair" );
		}

		increment = increment + 1;

	}

var j;
for (var i = 0; i<=10; i++) {

	j = i * 9;

	console.log(i + " * 9 = " + j );
}


var score = 0;

while(score <= 100){

	 if(score> 90)
	 {
	 	resultat = " vous avez le grade A";
	 }
	  else if(score> 80 && score <= 90)
	 {
	 	resultat = " vous avez le grade B";
	 }
	  else if(score> 70 && score <=80)
	 {
	 	resultat = " vous avez le grade C";
	 }
	  else if(score> 65 && score <=70)
	 {
	 	resultat = " vous avez le grade D";
	 }
	 else 
	 {
	 	resultat = " vous avez le grade F";
	 }


	console.log("Pour "+ score + resultat)	

	score= score+1



}

//PYRAMIDE

var pyramide = " ";

for (var i = 0 ; i <= 100; i++) {

	pyramide = "*" + pyramide;
	
	console.log(pyramide);
}

	













/*

Exercice : assigner des grades

Écrire une boucle qui va itérer de 0 à 100
Écrire une fonction qui va retourner des grades selon les scores reçu
si le score au dessus de 90 le grade est A
si le score au dessus de 80 le grade est B
si le score au dessus de 70 le grade est C
si le score au dessus de 65 le grade est D
si le score n'entre pas dans ces catégories le grade est F
afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".

Exercice : pyramide

Écrire une boucle qui va dessiner dans la console (ligne par ligne) le résulat suivant
	*  
	* *  
	* * *  
	* * * *  
	* * * * *
	*/