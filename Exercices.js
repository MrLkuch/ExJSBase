// Définition de variables


// creation de la variable nom et affectation d'une valeur.
let nom = "John";
// affichage de la variable nom.
console.log(nom);
// affectation d'une nouvelle valeur à la variable nom.
nom = "Jane";
// affichage de la variable nom.
console.log(nom);




// Boucles


// boucles ou une variable i est cree, et affiche sa valeur a chaque boucle, i augmentant de 1 jusqu'a atteindre 10.
for (let i = 1; i <= 10; i++) {
    console.log(i)
};


// console.log()


// affichage de la chaine de caractere "Bonjour tout le monde!".
console.log("Bonjour tout le monde!");
// affichage de la somme de 3 et 4.
console.log(3+4);
// affichage de la variable nom.
console.log(nom);



// Concaténation de chaînes de caractères



// creation de la variable firstName et affectation d'une valeur.
let firstName = "John";
// creation de la variable lastName et affectation d'une valeur.
let lastName ="Doe";

// concatenation des variables firstName et lastName, et affecté a une nouvelle variable concat.
let concat = `${firstName} ${lastName}`;
// affichage de la variable concat.
console.log(concat);





// Conditions

// creation de la variable age et affectation d'une valeur.
let age = 21 ;


// condition, si la variable age est egale ou superieur a 18 affiche la chaine de caractere "Vous êtes majeur".
if (age >= 18) {
    console.log("Vous êtes majeur")
}
// si la condition precedente n'est pas validé affiche alors la chaine de caractere "Vous êtes mineur".
else{
    console.log("Vous êtes mineur")
};



// Avancé
// Création et parcours d'un tableau


// creation d'un tableau nommé couleurs et affectation de valeurs.
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];

// boucle affichant chaque valeurs du tableau couleurs une à une.
couleurs.forEach(element => {
    console.log(element)
});



// Utilisation de Array.push() et Array.pop()


// creation d'un tableau nommé numbers et affectation de valeurs.
let numbers = [1, 2, 3, 4, 5];
// ajout de la valeur 6 a la fin du tableau numbers.
numbers.push(6);
// affichage du tableau numbers.
console.log(numbers);
// suppression de la derniere variable du tableau numbers.
numbers.pop();
// affichage du tableau numbers.
console.log(numbers);



// Fonctions

// 1
// fonction qui verifie le modulo du nombre mis en parametre avec si le resultat est 0 la fonction renvoie true, sinon false.
function pair(num){
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }

};
console.log(pair(6));
console.log(pair(11));

// 2
// fonction qui ajoute chaque valeurs d'un tableau additionant valeurs apres valeurs avant de renvoyer la somme total.
function add(tab) {
    let result = 0;
    
    tab.forEach((element) => {
        result+=element;
    });

    return result;
}

let tableau = [5, 12, 4, 6, 7];
console.log(add(tableau));

// 3
/* fonction qui a pour parametre une chaine de caractere, separe chaque caractere et les met dans un tableau,
puis inverse l'ordre de celui-ci et rejoin chaque element du tableau pour reformé une chaine de caractere. */
function inverse(chaine){
    result = chaine.split('');
    result = result.reverse();
    result = result.join('');
    return result;
};

let phrase = "bonjour";
console.log(inverse(phrase));