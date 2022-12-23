// creation des variables et demande d'un nombre de nom à enregistrer.
let num = Number(prompt("saisir un nombre de noms"));
let liste = [];

// demande le nombre de fois precisé precedament un nom à l'utilisateur et l'ajoute dans un tableau
for(let i=0; i< num; i++){
    let val = prompt("saisir un nom");
    liste.push(val);
};
// si le nombre de nom est surperieur a 3
if(num > 3){
    let retour = `vous avez enregistré ${num} qui sont: ${liste} C'est beaucoups de noms!`;
    console.log(retour);
}
else{
    let retour = `vous avez enregistré ${num} qui sont: ${liste}`;
    console.log(retour);
};


function affichage(tab){
    tab.forEach(element => {
        return console.log(element);
    });
};

let table = ["abc", "def", "ghi", "klm"];
affichage(table);