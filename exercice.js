// exercice 1 : 
 
// -----------exemple 1-----------

            // const readline = require('readline');

            // const rl = readline.createInterface({
            //     input : process.stdin,
            //     output : process.stdout
            // });

            // const randomNuber = Math.floor(Math.random()*10 + 1);
            // rl.question("entre un nombre compris entre 1 et 10 :", function(num){
            //     const guess = Number(num);

            //     if (guess === randomNuber){
            //         console.log("Goog Work");
            //     }else{
            //         console.log("Error");
            //     }
            //     rl.close();
            // });    
            
            
// -----------exemple 2-------

            // const readline = require('readline');

            // const rl = readline.createInterface({
            //   input: process.stdin,
            //   output: process.stdout
            // });
            
            // const randomNumber = Math.floor(Math.random() * 10) + 1;
            
            // const askUser = () => {
            //   rl.question("Entre un nombre compris entre 1 et 10 : ", (num) => {
            //     const guess = Number(num);
            
            //     if (guess === randomNumber) {
            //       console.log("Good Work");
            //        rl.close();
            //     } else {
            //       console.log("Error");
                 

            //       askUser(); 
            //     }
            //   });
            // };
            
            // askUser(); 
            
            //  -----exemple 3 --------:

            // const randomNumber = (num) => {
            //     const randomNum = Math.floor(Math.random() * 10) + 1;
                
            //     if (randomNum === num) {
            //       console.log("Good Work");
            //     } else {
            //       console.log("Non apparié");
            //     }
            //     console.log(`le nombre approprié était : ${randomNum}`);
            //   };
              
            //   randomNumber(5);



    // exercice 2 :

    // const noel = (dateStr) => {
      
    //   const dateUser = new Date(dateStr);
    
    
    //   if (isNaN(dateUser)) {
    //     console.log(" La date entrée est invalide");
     
    //   }
    
  
    //   let annee = dateUser.getFullYear();
    
      
    //   let dateNoel = new Date(annee, 11, 25); 

    //   if (dateUser > dateNoel) {
    //     console.log(" Noël est déjà passé cette année !");
        
    //     annee = annee + 1;
    //     dateNoel = new Date(annee, 11, 25);
    //   }
    
    //   const diffMs = dateNoel - dateUser;
    //   const joursRestants = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
    //   if (joursRestants > 0) {
    //     console.log(` Il reste ${joursRestants} jours avant Noël à partir du ${dateUser.toLocaleDateString()}.`);
    //   } else if (joursRestants === 0) {
    //     console.log("C'est aujourd'hui Noël");
    //   }
    //   else if(joursRestants){

    //   }
    // };
    // noel("2025-00-00"); 
    // noel("2025-12-24");



// --------------------Exercice 3 : --------------

        // let number = (a, b) =>{
        //   let div = a / b;
        //   console.log("la division est égale à : ", div);
        //   let produit = a * b ;
        //   console.log("le produit est égale à : ", produit);
        // };

        // number(4, 5);
    
      
// -------Exercice 4 ------------------------

                // const chaine  = (tableau) => {
                //   if(tableau.length === 0) return "";
                //   let plusLong = tableau[0];
                //   for(let i = 1; tableau.length > i; i++){
                //     if(tableau[i].length > plusLong.length){
                //       plusLong = tableau[i];
                //     }
                //   }
                //   return plusLong;
                // };
                // const mots = ["chat", "chocolat", "voiture", "hippopotame", "chien"];
                // console.log("La chaîne la plus longue est :", chaine(mots));

// -------Exercice 5 ------------------------ plus grand nombre paire d'un ensemble d'entier 


        // const plusGrandPair = (tableau) => {
        //   let maxPair = null;

        //   for (let i = 0; i < tableau.length; i++) {
        //     if (tableau[i] % 2 === 0) {
        //       if (maxPair === null || tableau[i] > maxPair) {
        //         maxPair = tableau[i];
        //       }
        //     }
        //   }
        //   return maxPair;
        // };

        //   const nombres = [1, 2, 7, 8, 10, 4, 26];
        //   console.log("Le plus grand entier pair :", plusGrandPair(nombres));


// -------Exercice 6 ------------------------

        // const remove = (str) => {
        //   const caract = str.split("");
        //   console.log(caract);
        //   const unique = caract.filter(char => { 
        //   return caract.indexOf(char)===caract.lastIndexOf(char);
          
        //   });
        //   return unique.join("");
        // };
      
        // const texte = "javascript";
        // console.log("Résultat :", remove(texte)); 


// -------Exercice 6 ------------------------somme des cube partant de 1 jusqu'au nombre 

                // let number = (num) => {
                //   let sum = 0;
                //   for(let i=1; num >= i; i++){
                //     sum = sum + i*i*i;
                //   }
                //   return sum;
                // };


                // console.log(number(5));


// -------Exercice 8------------------------

                // const compareObjet = (objet1, objet2)  => {
                //         for(let key in objet2){
                //                 if(!(key in objet1) || objet1[key]!== objet2[key]){
                //                         return false;
                //                 }
                //         }
                //         return true;
                // };

                // const a = {nom: "Frankel", age: 22};

                // const b = {age : 22};

                // console.log(compareObjet(a,b));
                // console.log(compareObjet(b,a));


// -------Exercice 9-----------------------
                // const filterTab = (tab, ...valeurSupp) =>{
                //         return tab.filter(element => ! valeurSupp.includes(element));
                // };

                // const tableau = [1, 2, 3, 4, 5, 2, 3];
                // const result = filterTab(tableau, 2, 3);
                // console.log("Resulta", result);


// -------Exercice 10------------------------

                // const extraire = (tab, index) => {
                //         return index.map(ind => tab[ind]);
                // };

                // let tableau = ["a", "b", "c", "d", "e"];
                // let a = [0, 2, 4];

                // const resultat = extraire(tableau, a);
                // console.log("Valeurs extraites :", resultat);


// -------Exercice 11-----------------------

                // var student = {
                //         name : "David Rayy",
                //         sclass : "VI",
                //         rollno : 12 };

                //         delete(student.rollno);
                //         console.log(student);


// -------Exercice 12-----------------------

                // class Cylindre {
                //         constructor(rayon, hauteur) {
                //           this.rayon = rayon;
                //           this.hauteur = hauteur;
                //         }
                      
                        
                //         volume() {
                //           const volume = Math.PI * this.rayon ** 2 * this.hauteur;
                //           return volume.toFixed(4); 
                //         }
                //       }
                      
                     
                //       const monCylindre = new Cylindre(3, 5); 
                //       console.log("Volume du cylindre :", monCylindre.volume());

// -------Exercice 13-----------------------
                //       const afficherHeure = () => {
                //         const maintenant = new Date();
                      
                //         let heures = maintenant.getHours().toString().padStart(2, '0');
                //         let minutes = maintenant.getMinutes().toString().padStart(2, '0');
                //         let secondes = maintenant.getSeconds().toString().padStart(2, '0');
                      
                //         console.log(`${heures}:${minutes}:${secondes}`);
                //       }
                      
                //      
                //       setInterval(afficherHeure, 1000);

                      
// -------Exercice 14-------------------------   

                //       function estMinuscule(chaine) {
                //         return chaine === chaine.toLowerCase();
                //       }
                      
                
                //       console.log(estMinuscule("bonjour")); // true
                //       console.log(estMinuscule("Bonjour")); // false
                //       console.log(estMinuscule("BONJOUR")); // false
                      
// -------Exercice 15------------------------  


let  add = (a, b) => {
        return new Promise((resolve, reject) => {
          if (a === undefined || b === undefined) {
            reject("Must provide two parameters");
          } else {
            resolve(a + b);
          }
        });
      }
      


