

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
   
        let mergeTowArrays = (array1, array2) => {
                let mergeArray =[...array1, ...array2];
                return mergeArray.filter((value, index, newArray) => newArray.indexOf(value) === index)
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

const calculateArea = (radius=2) => {
        let areaOfCircle = radius**3 * Math.PI;
        return areaOfCircle;
};


// ------question 7 : paramètre de repos (Rest Parameters)

const average = (...arguments) => {
        let sum = 0;

        if(arguments.length === 0){return null;}

        for(let i= 0; arguments.length > i; i++){
                 sum += arguments[i] ;
        }
        // const total = arguments.reduce((sum, valeur) => valeur + sum);
        return sum / arguments.length;
};

// --------Question 8: methode map() dans un tableau de chaine caractère----------


const arrayOfCharacter = (character) => {
       return  character.map(word =>
                word.split("").reverse().join(""));
        };

// -------Question 9 : methode filter() dans un tableau d'objet ------------------



const arrayObjectBooks = (Books) =>{
        return  Books.filter(book => book.page > 300);
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
      





