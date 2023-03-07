let name = "John Doe";
const age = 30;
let islearning = true;

console.log(`Je m'appelle ${name} et j'ai ${age} ans`)



let num1 = 10;
let num2 = 20;
console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(typeof(10))

let dictionnaire = new Map();
console.log(dictionnaire)

//Création d'une boucle avec la clé

const fruits = ["banane", "pomme"," orange"]
for (i=0; i<fruits.length; i++){
    console.log(i)
}

//Création b'une boucle avec la valeur
for (i=0; i<fruits.length; i++){
    console.log(`${i} =${fruits[i]}`)
}

// Pour me dire ce quec 'est que le fruit 1
console.log(fruits[0])


while(i<fruits.length) {
    console.log(`${i}= ${fruits[i]}`)
    i++
}

// Boucle avec For each
fruits.forEach((fruit)=>{
    console.log(`fruit: ${fruit}`);
})

// Exemple numéro 2
const listeCourse = [" farine", "beurre", "amande", "lait"]
listeCourse.forEach((produit)=>{
    console.log(`produit: ${produit}`)
})

for (produit=0; produit<listeCourse.length; produit++){
    console.log(`${produit} =${listeCourse[produit]}`)
}
let cat = "Nestor"
console.log(cat.slice(1))





function getLength(arr){
    //return length of arr
    return arr.Length
  }
  console.log(arr.Length);