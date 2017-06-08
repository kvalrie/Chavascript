//window.prompt()
//window.alert();
//window.confirm();

var lettres = ['b','o','n','j','o','u','r'];
var lettres_devinée = ['_','_','_','_','_','_','_'];
var chances = 10;

var guessletter = function (){
		var demande = prompt('ta lettre ici :'+"          " +lettres_devinée+ "      chances: " + chances)
		chances = chances - 1;
	
	for (let i = 0; i < lettres.length ; i++) {
			
			if (demande == lettres[i]) {
				chances++;
				lettres_devinée.splice(i,1, lettres[i]);
		
				console.log(lettres_devinée)
				


				
		} 
		

				
				
				
		
	}
	if (chances > 10) {
		chances = chances - 1;
	}
	if (chances == 0) {
		alert('Retournes chez ta mere.')
		return;
	}
	if (demande == 'fdp' ) {
		return;
	}

	if (lettres_devinée[0] == '_' || lettres_devinée[1] == '_' || lettres_devinée[2] == '_' || lettres_devinée[3] == '_' || lettres_devinée[4] == '_' || lettres_devinée[5] == '_' || lettres_devinée[6] == '_'  ) {

guessletter();}
	
else 
{
	alert('Bravo Ordure')
	return;
}



}

guessletter();





/*Info : le nombre d'essais est illimité


1/Itérer à travers les lettres
2/Voir si la lettre deviné se trouve dans le mot
    Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
3/Afficher dans la console les lettre devinés

4/Le jeu doit savoir quand la partie est finie et féliciter le joueur


Bonus: Se rapprocher du vrais pendu :

Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois.
Si une lettre est entrée deux fois, ne rien faire.
compter le nombre de tentatives ratés */