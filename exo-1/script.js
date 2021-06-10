// JQUERY est une bibliothèque de fonctions qui permet d'alléger le code JS

// Le code JQUERY est à placer avant l'appel du fichier JS dans HTML pour que la bibliothèque soit prise en compte. (ou peu importe s'il y a "defer")

console.log('exercice 1');

$(document).ready(function(){
	console.log('Je peux maintenant écrire du code jQuery');
}); // permet de vérifier que la bibliothèque est bien active

// $ est un symbole fortement utilisé avec JQUERY. Il permet donc de vite comprendre qu'un code comporte du JQUERY.