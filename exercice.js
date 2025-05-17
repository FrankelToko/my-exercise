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

    const getRemainingDays = (dateString) => {
      const dateUser = new Date(dateString);
        
      if (isNaN(dateUser)) {
        return "not valid";
      }
      
      let year = dateUser.getFullYear(); 
      let dateChristmas = new Date(year, 11, 25); 

      if (dateUser > dateChristmas) { 
        year = year + 1;
        dateChristmas = new Date(year, 11, 25);
      }
    
      const diffMs = dateChristmas - dateUser;
      const remainigDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
      if (remainigDays > 0) {
        return `${remainigDays}, ${dateUser.toLocaleDateString()}`;

      } else if (remainigDays === 0) {
        return "to days is Chris";
      }
     return remainigDays;
    };
    



// -------------Exercice 3 : divition et produit de deux nombres passé en paramètre--------------

        let divideAndMultiply = (a, b) =>{
          let divide = a / b;
          let product = a * b ;
         return {divide: divide, product: product};
        };
    
      
// -------Exercice 4: la plus longue chaine de caratère d'un tableau ------------------------

                const maxCharacter  = (array) => {
                  if(array.length === 0) return "";
                  let max = array[0];
                  for(let i = 1; array.length > i; i++){
                    if(array[i].length > max.length){
                      max = array[i];
                    }
                  }
                  return max;
                };
                


// -------Exercice 5: plus grand nombre paire d'un ensemble d'entier ---------------


        const maxNumberPair = (array) => {
          let maxPair = null;

          for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
              if (maxPair === null || array[i] > maxPair) {
                maxPair = array[i];
              }
            }
          }
          return maxPair;
        };



// -------Exercice 6 : retirer les caratère qui se repète dans une chaine ------------------------

        const removeCharacter = (character) => {
          const decomperCharater = character.split("");
         
          const unique = decomperCharater.filter(char => { 
          return decomperCharater.indexOf(char)===caract.lastIndexOf(char);
          
          });
          return unique.join("");
        };
      
    


// -------Exercice 6 : somme des cube partant de 1 jusqu'au nombre -------

                let sommeDesCube = (number) => {
                  let sum = 0;
                  for(let i=1; number >= i; i++){
                    sum = sum + i*i*i;
                  }
                  return sum;
                };



// -------Exercice 8 : comparaison de deux Objets------------------------

                const compareObjet = (object1, object2)  => {
                        for(let key in objet2){
                                if(!(key in object1) || object1[key]!== object2[key]){
                                        return false;
                                }
                        }
                        return true;
                };


// -------Exercice 9 : supprimer du tableau les elements qui se repète-----------------------


                const deleteItemRepeter = (array, ...valueDelete) =>{
                        return array.filter(item => ! valueDelete.includes(item));
                };



// -------Exercice 10 : extraire les elements d'un tableau à partir de leur index------------------------

                const getCurrentArray = (array, index) => {
                        return index.map(ind => array[ind]);
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
                        const today = new Date();
                      
                        let hours = today.getHours().toString().padStart(2, '0');
                        let minutes = today.getMinutes().toString().padStart(2, '0');
                        let seconds = today.getSeconds().toString().padStart(2, '0');

                        const hoursFormate = `${hours}:${minutes}:${seconds}`;
                        return hoursFormate;
                        
                      }
                      
                     
                

                      
// -------Exercice 14 : verifie si une chaine est Minuscule-------------------------   

                      const isLowerCase = (sting) =>{
                        return sting === sting.toLowerCase();
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
    
