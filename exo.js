

// ----------question 1 : declarer une contante "euler et fixé sa valeur decimal a 4"-------------- 

    const euler = 2.71828;
     euler.toFixed(4);


// -----question 2 : utiliser un spread operator pour determiner la trouver la valeur maximal d'un tableau------------------

        let findMax = (tableau) => {
           return Math.max(...tableau);
        }

// ----------question 3 : create a template Literal--------------------
 const templateLiteral = () => {
        let product = "oranges"; 
        let price = 12;
        let quantity = 12;

        let totalPrice = price * quantity;

        return `"You purchased ${quantity} units of ${product} for ${totalPrice}."`;
  };       


// --------question 4 : combiner deux tableau en utilisant un spread Operator ----------------
   
        let tableau = (arr1, arr2) => {
                let combinedArr =[...arr1, ...arr2];
                return combinedArr.filter((valeur, index, nouveauTableau) => nouveauTableau.indexOf(valeur) === index)
                                  .sort((a,b) => {
                                        return a-b;
                                  });
        };

       


// --------question 5: Affectation par déstructuration --------------------

const car = {
        make: "",
        model: ""
       
};
const {make, model, year ="unknown"}  = car;
console.log(year);


// --------question 6: paramètre par defaut-------------------

const calculateArea = (rayon=2) => {
        let aireDuCercle = rayon**3 * Math.PI;
        return aireDuCercle;
};


// ------question 7 : paramètre de repos (Rest Parameters)

const average = (...arguments) => {
        let somme = 0;

        if(arguments.length === 0){return null;}

        for(let i= 0; arguments.length > i; i++){
                 somme += arguments[i] ;
        }
        // const total = arguments.reduce((somme, valeur) => valeur + somme);
        return somme / arguments.length;
};

// --------Question 8: methode map() dans un tableau de chaine caractère----------


const tableauDeChaine = (chaine) => {
       return  chaine.map(mot =>
                mot.split("").reverse().join(""));
        };

// -------Question 9 : methode filter() dans un tableau d'objet pour selectionner les livre de plus de 300 pages ------------------



const tableauObjetLivre = (Livres) =>{
        return  Livres.filter(livre => livre.page > 300);
}



// --------qustion 10 :  promesse 

const fetchData = () => {
        return new Promise((resolve) =>{
                const delay = Math.floor(Math.random() * 8000) + 2000;
                setTimeout(()=> 
                        resolve("Data fetched successfully!") , delay);
        });
};
        fetchData().then((resultat) => {
        console.log(resultat);
      });
      





