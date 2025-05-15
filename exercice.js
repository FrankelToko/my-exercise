//  -------------exercice 1 : fonction Random des nombre compris entre 1 et 10 et------
            
            

            const compareRandomNumber = (userNumber) => {
                let Min = 1;
                let Max = 10;
                const generatedNumber = Math.floor(Math.random() * Max) + Min;
                
                if (generatedNumber === userNumber) {
                  console.log("Good Work");
                } else {
                  console.log("Non apparié");
                }
                return generatedNumber;
              };
              



// -------exercice 2 : determiner le numbre de jour restant pour la fête de Noel-----

    const nombreJourRestantNoel = (dateString) => {
      const dateUser = new Date(dateString);
        
      if (isNaN(dateUser)) {
        return " La date entrée est invalide";
      }
      
      let annee = dateUser.getFullYear(); 
      let dateNoel = new Date(annee, 11, 25); 

      if (dateUser > dateNoel) { 
        annee = annee + 1;
        dateNoel = new Date(annee, 11, 25);
      }
    
      const diffMs = dateNoel - dateUser;
      const joursRestants = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
      if (joursRestants > 0) {
        return `${joursRestants}, ${dateUser.toLocaleDateString()}`;

      } else if (joursRestants === 0) {
        return "C'est aujourd'hui Noël";
      }
     return joursRestants;
    };
    



// -------------Exercice 3 : divition et produit de deux nombres passé en paramètre--------------

        let operatorNumber = (a, b) =>{
          let division = a / b;
          let produit = a * b ;
         return {division: division, produit: produit};
        };
    
      
// -------Exercice 4: la plus longue chaine de caratère d'un tableau ------------------------

                const plusLongueChaine  = (tableau) => {
                  if(tableau.length === 0) return "";
                  let plusLong = tableau[0];
                  for(let i = 1; tableau.length > i; i++){
                    if(tableau[i].length > plusLong.length){
                      plusLong = tableau[i];
                    }
                  }
                  return plusLong;
                };
                


// -------Exercice 5: plus grand nombre paire d'un ensemble d'entier ---------------


        const plusGrandPair = (tableau) => {
          let maxPair = null;

          for (let i = 0; i < tableau.length; i++) {
            if (tableau[i] % 2 === 0) {
              if (maxPair === null || tableau[i] > maxPair) {
                maxPair = tableau[i];
              }
            }
          }
          return maxPair;
        };



// -------Exercice 6 : retirer les caratère qui se repète dans une chaine ------------------------

        const removeChar = (chaine) => {
          const caractereDecompser = chaine.split("");
         
          const unique = caractereDecompser.filter(char => { 
          return caractereDecompser.indexOf(char)===caract.lastIndexOf(char);
          
          });
          return unique.join("");
        };
      
    


// -------Exercice 6 : somme des cube partant de 1 jusqu'au nombre -------

                let sommeDesCube = (Nombre) => {
                  let somme = 0;
                  for(let i=1; num >= i; i++){
                    somme = somme + i*i*i;
                  }
                  return somme;
                };



// -------Exercice 8 : comparaison de deux Objets------------------------

                const compareObjet = (objet1, objet2)  => {
                        for(let key in objet2){
                                if(!(key in objet1) || objet1[key]!== objet2[key]){
                                        return false;
                                }
                        }
                        return true;
                };


// -------Exercice 9 : supprimer du tableau les elements qui se repète-----------------------


                const supprimerElementRepeter = (tableau, ...valeurSupprimer) =>{
                        return tableau.filter(element => ! valeurSupprimer.includes(element));
                };



// -------Exercice 10 : extraire les elements d'un tableau à partir de leur index------------------------

                const extraireDansUnTableau = (tab, index) => {
                        return index.map(ind => tab[ind]);
                };


// -------Exercice 11 : supprimer la propriété d'un objet -----------------------

                let student = {
                        name : "David Rayy",
                        sclass : "VI",
                        rollno : 12 };

                        delete(student.rollno);
                        console.log(student);


// -------Exercice 12 : calcule du volume d'un cylindre -----------------------

                class Cylindre {
                        constructor(rayon, hauteur) {
                          this.rayon = rayon;
                          this.hauteur = hauteur;
                        }
                      
                        
                        volume() {
                          const volume = Math.PI * this.rayon ** 2 * this.hauteur;
                          return volume.toFixed(4); 
                        }
                      }
                      


// -------Exercice 13 : affiche l'heure toute les secondes-----------------------

                      const afficherHeureParSeconde = () => {
                        const dateActuelle = new Date();
                      
                        let heures = dateActuelle.getHours().toString().padStart(2, '0');
                        let minutes = dateActuelle.getMinutes().toString().padStart(2, '0');
                        let secondes = dateActuelle.getSeconds().toString().padStart(2, '0');

                        const heureFormatee = `${heures}:${minutes}:${secondes}`;
                        return heureFormatee;
                        
                      }
                      
                     
                

                      
// -------Exercice 14 : verifie si une chaine est Minuscule-------------------------   

                      const chaineMinuscule = (chaine) =>{
                        return chaine === chaine.toLowerCase();
                      }

                      
// -------Exercice 15 : ecriture d'une fonction avec deux paramètre qui renvoie une promesse------------------------  


let  somme = (a, b) => {
        return new Promise((resolve, reject) => {
          if (a === undefined || b === undefined) {
            reject("Must provide two parameters");
          } else {
            resolve(a + b);
          }
        });
      }
      



// -------implementation de la methode forEach------------

    let myForEach = (array, callback) => {
        const resultat = [];
        for(let i=0; array.length > i; i++){
           resultat = callback(array[i]);
        }
return resultat;
    }


// ----------- implémentation de la méthode map()---------------

let myMap = (array, callback) =>{
    const result = [];
    for(let i = 0; array.length > i; i++){
        result.push(callback(array[i]));
    }
    return result;
}


// ------implementation de la methode filter()-------------

let myFilter = (array, callback) => {
        const result = [];
        for(let i = 0; array.length > i; i++){
            if(! callback(array[i])){
                result.push(array[i]);
            }
        }
        return result;
    }
    
