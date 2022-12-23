// creation de la variable value ou seras attribué la velur indiqué par l'utilisateur.
let value = prompt("saisir un nombre entier compris entre 1 et 10", " ");
// changement du type de la variable en number.
value = Number(value);
// tant que value n'est pas compris entre 1 et 10 compris on redemande à l'utilisateur de donner une valeur.
while(value < 1 || value > 10 || isNaN(value) == true){
    value = Number(prompt("valeur invalide, indiquez un nombre compris entre 1 et 10", " "));
};
// affiche la table de multiplication de la valeur indiqué par l'utilisateur.
for(let i = 1; i <= 10; i++){
    let result = `${value} x ${i} = ${value*i}`;
    console.log(result);
};