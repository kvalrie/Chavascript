//addition
 var chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 var add = 0;

for (var i = 0; i < chiffres.length ; i++){

	add = add + chiffres[i];
	
	console.log(add);

}	// si je veux mettre la derniere valeur de add uniquement je met le console.log en dehors de la boucle.

//meilleurs choix

var nom_acteurs = ["Pitt", "Depp", "Douglas"];	
var ordre = ["premier", "Deuxieme", "troisieme"];
for ( var i= 0; i < nom_acteurs.length; i++){

	console.log("le "+ ordre[i] + " est " + nom_acteurs[i]);

}

//clones
var nintendo = ["Mario", "Luigi","Peach"]
var clone = nintendo.slice();
nintendo.splice(3,0, "Bowser");
console.log(clone);
console.log(nintendo);

//


var personnage = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];

var random = Math.floor((Math.random()*personnage.length) + 1);
// mon var random est mon i . 
//donc a vec mon console.log je l'affiche un a la fois.

console.log(personnage[random]);











